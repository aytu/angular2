import { Component } from '@angular/core';
import { AnotherComponent } from './another.component';
@Component({
  moduleId: module.id,
  selector: 'app-other',
  templateUrl: 'other.component.html',
  directives:[AnotherComponent]
})
export class OtherComponent {
}
