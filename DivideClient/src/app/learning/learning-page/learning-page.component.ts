import { Component, OnInit } from '@angular/core';
import {Task} from "../../models/task";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-learning-page',
  templateUrl: './learning-page.component.html',
  styleUrls: ['./learning-page.component.scss']
})
export class LearningPageComponent implements OnInit {

  tasks: Task[];

  constructor(private apiService: ApiService) {
    this.apiService.getTasks().subscribe(value => {
      // @ts-ignore
      this.tasks = value.tasks;
      console.log(this.tasks);
    })
  }

  ngOnInit(): void {
  }
}
