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

  getTasks() {
    return this.http.get(this.taskRoute);
  }

  validateAnswers(answers: Task[]){
    return this.http.post(this.taskRoute, answers);
  }
}
