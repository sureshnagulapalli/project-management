import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-notifications',
  templateUrl: './home-notifications.component.html',
  styleUrls: ['./home-notifications.component.css']
})
export class HomeNotificationsComponent implements OnInit {

  notis = [
    {'status': 'assigned', 'by': 'groupmate 1', 'in': 'project 1'},
    {'status': 'started', 'by': 'groupmate 3', 'in': 'project 1'},
    {'status': 'completed', 'by': 'groupmate 3', 'in': 'project 1'},
    {'status': 'assigned', 'by': 'groupmate 2', 'in': 'project 1'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
