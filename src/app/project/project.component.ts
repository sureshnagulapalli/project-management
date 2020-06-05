import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  chat: boolean = false;

  onClick(e: String) {
    if (e == 'chat') {
      this.chat = !this.chat
    }
  }

  new_tasks = [
    {'id': 3, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'},
    {'id': 4, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'}
  ]
  current_tasks = [
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'}
  ]
  done_tasks = [
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'},
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
