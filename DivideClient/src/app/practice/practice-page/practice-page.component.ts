import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Task} from "../../models/task";
import {Router} from "@angular/router";

@Component({
  selector: 'app-practice-page',
  templateUrl: './practice-page.component.html',
  styleUrls: ['./practice-page.component.scss']
})
export class PracticePageComponent implements OnInit {
  tasks: Task[];
  progress: number;
  seconds: number;
  taskNumber: number;

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getPracticeTasks().subscribe(value => {
      this.taskNumber = 0;
      // @ts-ignore
      this.tasks = value.tasks;
      console.log(this.tasks);
    })
  }

  ngOnInit(): void {
  }

  moveNext() {
    this.taskNumber++;
  }

  movePrev() {
    this.taskNumber--;
  }

  makeAnswer(answer: number) {
    this.tasks[this.taskNumber].userAnswer = answer;
  }

  submitTest() {
    this.apiService.validateAnswers(this.tasks).subscribe(value => {
      // @ts-ignore
      this.apiService.summary = value.right;
      console.log(this.apiService.summary);
      this.router.navigateByUrl('/summary');
    })
  }
}
