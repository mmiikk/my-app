import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValueService } from './../value.service';
import { Subscription } from 'rxjs/Subscription';
import { Value } from './../value';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-value-static',
  templateUrl: './value-static.component.html',
  styleUrls: ['./value-static.component.css']
})
export class ValueStaticComponent implements OnInit {

  subscriptionValue: Subscription;
  @Input() value: Value;
  @Output() messageEvent = new EventEmitter<Value>();
  valueIDType: string;

  constructor() { }
  ngOnInit() {
  }

  sendMessage() {
    console.log("dupa");
    this.messageEvent.emit(this.value);
  }



}
