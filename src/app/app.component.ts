import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public name = "Rahul Ganesh";
  // public contactComponent: any = '';
  title = 'hello-world';

  // back(): void {
  //   this.router.navigate("..");
  // }

  constructor(){}
  
}
