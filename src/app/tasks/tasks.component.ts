import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  types = ['All','Project', 'Self']
  show: String = 'self'
  
  new_tasks = [
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self'},
    {'id': 3, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self'},
    {'id': 4, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self'},
    {'id': 3, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'},
    {'id': 4, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'}
  ]
  current_tasks = [
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self'},
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'}
  ]
  done_tasks = [
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'self'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'},
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'}
  ]


  onClick(str: String) {
    this.show = str;
  }

  constructor() { }
  ngOnInit() {
  }

}
