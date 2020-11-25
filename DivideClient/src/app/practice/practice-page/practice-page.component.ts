import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Task} from "../../models/task";

@Component({
  selector: 'app-practice-page',
  templateUrl: './practice-page.component.html',
  styleUrls: ['./practice-page.component.scss']
})
export class PracticePageComponent implements OnInit {
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
