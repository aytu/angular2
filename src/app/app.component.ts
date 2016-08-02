import { Component } from '@angular/core';
import { DataBindingComponent } from './data-binding';
import { OtherComponent } from './other';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <h1>Root Component</h1>
  <app-data-binding></app-data-binding>
  <app-other></app-other>
  `,
  styles: [`h1 {color :red;}`],
  directives: [DataBindingComponent,OtherComponent]
})

export class AppComponent {
  title = 'My first app works!';
}
