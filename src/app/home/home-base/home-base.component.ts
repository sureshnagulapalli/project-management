import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.css']
})
export class HomeBaseComponent implements OnInit {

  projects = [
    {'category' : 'college', 'name': 'project 1'},
    {'category' : 'Office', 'name': 'project 2'},
    {'category' : 'App Developement', 'name': 'project 3'},
    {'category' : 'IOS app', 'name': 'project 4'},
    {'category' : 'self', 'name': 'my list'}
  ];

  new_tasks = [
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date'},
    {'id': 3, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date'},
    {'id': 4, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date'}
  ]
  current_tasks = [
    {'id': 1, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date'},
    {'id': 2, 'name': 'bugs in file 3 at line 17', 'created_at': 'Date', 'complete_by': 'Date'},
  ]



  constructor() { }

  ngOnInit() {
  }

}
