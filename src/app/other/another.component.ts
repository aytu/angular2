import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-another',
  template: `
    <p>
      <button (click)="clicked()">Click me</button>
    </p>
  `
})
export class AnotherComponent {
 clicked(){
  alert("clicked me");
 }
}
