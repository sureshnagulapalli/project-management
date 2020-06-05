import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: String = 'home';


  onClick(e: any) {
    this.display = e.target.innerText;
  }
}
