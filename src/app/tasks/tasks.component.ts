import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../services/task';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';
import { error } from 'protractor';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  /*
  show: String = 'self'
  tasks = [
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self', 'status': 'new'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self', 'status': 'new'},
    {'id': 3, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self', 'status': 'new'},
    {'id': 4, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self', 'status': 'new'},
    {'id': 3, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'new'},
    {'id': 4, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'new'},
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self', 'status': 'current'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self', 'status': 'current'},
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'current'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'current'},
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self', 'status': 'done'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'done'},
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'done'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'done'}
  ]
  onClick(str: String) {
    this.show = str;
  }
  */

  tasks: Observable<Task[]>;
  
  task: Task = new Task();
  categoryToSend = 'self';

  constructor(private taskService: TaskService, private router: Router) { }
  
  ngOnInit() {
    this.categoryToSend = 'self';
    this.reloadData();
  }
  reloadData() {
    this.tasks = this.taskService.getTaskByCategory(this.categoryToSend);
  }
  reload(s: string) {
    this.tasks = this.taskService.getTaskByCategory(s);
  }

  onCreate() {
    this.task.created_at = "current";
    this.task.category = this.categoryToSend;
    this.task.status = "new";

    this.taskService.createTask(this.task).subscribe(
      data => {
        console.log(data);
        this.task = new Task();
        this.reload(this.categoryToSend);
      },
      error => console.log(error)
    );
  }

  onUpdate(id: number, status: string) {
    this.taskService.updateTask(id, status).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    )
  }

  onClick(s: string) {
    if(s == 'all') {
      this.tasks = this.taskService.getTaskList();
    }
    else {
      this.taskService.getTaskByCategory(s).subscribe(
        data => {
          console.log(data);
          this.categoryToSend = s;
          this.reloadData();
        },
        error => console.log(error)
      )
    }
  }

}
