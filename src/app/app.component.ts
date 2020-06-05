import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: String = 'project';


  onClick(e: any) {
    this.display = e.target.innerText;
    if (this.display == 'ProGeNt') {
      this.display = 'home';
    }
  }
}
