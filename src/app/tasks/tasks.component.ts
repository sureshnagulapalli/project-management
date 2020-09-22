import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  types = ['All','Project', 'Self']
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

  constructor() { }
  ngOnInit() {
  }

}
