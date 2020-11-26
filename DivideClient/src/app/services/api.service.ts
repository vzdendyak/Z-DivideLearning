import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Task} from "../models/task";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  taskRoute = environment.url + 'tasks';
  summary: number;

  constructor(private http: HttpClient) {

  }

  getLearningTasks() {
    return this.http.get(`${this.taskRoute}/learning/3`);
  }

  getLearningTasksByNumber(n: number) {
    return this.http.get(`${this.taskRoute}/learning/${n}`);
  }

  getPracticeTasks() {
    return this.http.get(`${this.taskRoute}/practice`);
  }

  getExamTasks() {
    return this.http.get(`${this.taskRoute}/exam`);
  }

  validateAnswers(answers: Task[]) {
    return this.http.post(this.taskRoute, answers);
  }
}
