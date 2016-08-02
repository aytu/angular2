import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-data-binding',
  templateUrl: 'data-binding.component.html',
  styleUrls: ['data-binding.component.css']
})
export class DataBindingComponent  {
 stringInterpolation="This is data-binding component";
 numberInterpolation=2;
}
