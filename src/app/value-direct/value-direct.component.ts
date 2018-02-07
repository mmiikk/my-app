import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Value } from './../value';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-value-direct',
  templateUrl: './value-direct.component.html',
  styleUrls: ['./value-direct.component.css']
})
export class ValueDirectComponent implements OnInit, OnChanges {


  valueType: string;
  @Input() value: Value;
  @Output() messageEvent = new EventEmitter<Value>();
  valueIDType: string;

  constructor() {
    this.valueType = 0;
  //  this.value = new Value();
  }

  ngOnChanges(){
    console.log('a');
   this.checkValueType();
  }

  ngOnInit() {
    this.checkValueType();

  }

  checkValueType() {
    switch (this.value.Type) {
      case "Bit":
        this.valueType = "0";
      break;
      case "Byte":
      this.valueType = "4";
      break;
      case "Real":
      this.valueType = "2";
      break;
      case "Int":
      this.valueType = "1";
      break;
      case "String":
      this.valueType = "3";
      break;

    }
  }

  sendMessage() {
    console.log("dupa");
    this.messageEvent.emit(this.value);
  }


}
