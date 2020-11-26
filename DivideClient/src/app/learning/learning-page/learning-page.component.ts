import {Component, OnInit} from '@angular/core';
import {Task} from "../../models/task";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-learning-page',
  templateUrl: './learning-page.component.html',
  styleUrls: ['./learning-page.component.scss']
})
export class LearningPageComponent implements OnInit {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  tasks: Task[];
  activeNumber: number;

  constructor(private apiService: ApiService) {
    this.apiService.getLearningTasks().subscribe(value => {
      // @ts-ignore
      this.tasks = value.tasks;
      console.log(this.tasks);
    })
  }

  ngOnInit(): void {
  }

  showNumber(n: number) {
    this.activeNumber = n;
    this.apiService.getLearningTasksByNumber(n).subscribe(value => {
      // @ts-ignore
      this.tasks = value.tasks;
    })
  }
}
