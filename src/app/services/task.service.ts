import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/tasks';
  
  constructor(private http: HttpClient) { }

  getTaskList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getTaskByCategory(s: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${s}`);
  }

  createTask(task: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, task);
  }

  updateTask(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

}
