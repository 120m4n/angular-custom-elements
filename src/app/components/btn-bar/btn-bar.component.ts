import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MetaData } from 'src/app/models/metadata';

@Component({
  selector: 'app-btn-bar',
  templateUrl: './btn-bar.component.html',
  styleUrls: ['./btn-bar.component.scss']
})
export class BtnBarComponent implements OnInit {

  @Input() properties: MetaData;

  @Output() action = new EventEmitter<MetaData>();

  constructor() { 
    this.properties = {
      action: 'click',
      data: { }
    }
  }

  ngOnInit(): void { 
    // console.log(this.properties.img);
  }

  handleClick() {
    this.action.emit(this.properties);
  }

}
