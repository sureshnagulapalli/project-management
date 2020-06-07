import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  chat: boolean = true;

  onClick(e: String) {
    if (e == 'chat') {
      this.chat = !this.chat
    }
  }

  tasks = [
    {'id': 3, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'new'},
    {'id': 4, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'new'},
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'current'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'current'},
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'done'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'done'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date', 'category': 'project', 'status': 'done'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
