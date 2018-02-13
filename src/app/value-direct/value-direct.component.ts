import { ElementService } from './../element.service';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { Value } from './../value';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PLC } from '../plc';

@Component({
  selector: 'app-value-direct',
  templateUrl: './value-direct.component.html',
  styleUrls: ['./value-direct.component.css']
})
export class ValueDirectComponent implements OnInit, OnChanges {

  dbManual: boolean;
  valueType: string;
  @Input() value: Value;
  @Output() messageEvent = new EventEmitter<Value>();
  valueIDType: string;
  subscriptionPLCs: Subscription;
  plcs: PLC[];

  constructor( private elementService: ElementService) {
    this.valueType = "0";
    this.subscriptionPLCs = elementService.messagePLC$.subscribe(
      message => { this.plcs = message; console.log(this.value);}
    );

  //  this.value = new Value();
  }

  ngOnChanges(){

    this.elementService.getPLCs();
   this.checkValueType();
  }

  ngOnInit() {
    this.checkValueType();

  }

  selectPLC(event): void{
    console.log(this.value);
  }

  checkValueType() {
    console.log(this.value);
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

  checkDisabled(): boolean {
    if(this.value.DBType == parseInt("2"))
      return true;
    else return false;
  }

}
