import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-button',
  template: `<div class="btn" (click)="handleClick()">{{ label }}</div>`,
  styles: [
    `.btn{
      background-color: #4CAF50;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      display: inline-block;
    }
    .btn:hover {
      background-color: #45a049;
      cursor: pointer;
    }`
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent {
  @Input() label = 'Click me';
  @Output() action = new EventEmitter<number>();


  private numberOfClicks = 0;
  
  constructor() { }
  
  handleClick() {
    this.numberOfClicks++;
    this.action.emit(this.numberOfClicks);

  }

}
