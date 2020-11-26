import {Component, OnInit} from '@angular/core';
import {Task} from "../../models/task";
import {ApiService} from "../../services/api.service";
import {Router} from "@angular/router";
import {ThemePalette} from "@angular/material/core";
import {ProgressBarMode} from "@angular/material/progress-bar";

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 0;

  tasks: Task[];
  progress: number;
  seconds: number;
  taskNumber: number;
  timer;
  timeEnd: boolean;

  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getExamTasks().subscribe(value => {
      this.timeEnd = false;
      this.taskNumber = 0;
      // @ts-ignore
      this.tasks = value.tasks;
      console.log(this.tasks);
      // this.seconds = 1200;
      this.seconds = 10;
      this.startTimer();
    })
  }

  ngOnInit(): void {
  }

  displayTime() {
    let minutesNum = Math.floor(this.seconds / 60);
    let minutesText = minutesNum.toString();
    if (minutesNum < 10) {
      minutesText = `0${minutesNum}`;

    }
    let secondsNum = Math.floor(this.seconds % 60);
    let secondsText = secondsNum.toString();
    if (secondsNum < 10) {
      secondsText = `0${secondsNum}`;
    }
    return minutesText + ':' + secondsText;
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.seconds == 0) {
        this.timeLost();
      }
      this.seconds--;
    }, 1000);

  }

  moveNext() {
    this.taskNumber++;
  }

  movePrev() {
    this.taskNumber--;
  }

  makeAnswer(answer: number) {
    if (this.timeEnd) {
      return;
    }
    this.tasks[this.taskNumber].userAnswer = answer;
  }

  getValue() {
    let number = this.tasks.filter(task => task.userAnswer != null).length;
    return number * 10;
  }

  submitTest() {
    this.apiService.validateAnswers(this.tasks).subscribe(value => {
      // @ts-ignore
      this.apiService.summary = value.right;
      console.log(this.apiService.summary);
      this.router.navigateByUrl('/summary');
    })
  }

  private timeLost() {
    clearInterval(this.timer);
    this.timeEnd = true;
    this.seconds = 1;
  }
}
