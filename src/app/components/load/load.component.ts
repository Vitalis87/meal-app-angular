import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
})
export class LoadComponent {
  @Input() loading: boolean

}
