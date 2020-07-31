import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '',
})
export class AppComponent {
  @Output() 'did-finish-load-one' = new EventEmitter();
  @Output() didFinishLoadTwo = new EventEmitter();
}
