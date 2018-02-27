import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValueService } from './../value.service';
import { SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Value } from './../value';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ElementService } from '../element.service';

@Component({
  selector: 'app-value-static',
  templateUrl: './value-static.component.html',
  styleUrls: ['./value-static.component.css']
})
export class ValueStaticComponent implements OnInit, OnChanges {

  subscriptionValue: Subscription;
  @Input() value: Value;
  @Output() messageEvent = new EventEmitter<Value>();
  valueIDType: string;
 
  

  constructor(private elementService: ElementService) { };
  ngOnInit() {
    
  }

  ngOnChanges() {
   
  }

  sendMessage() {
    this.messageEvent.emit(this.value);

    console.log("miana");
  }

  onColorChange(event): void{
    this.value.Val = event;  
    console.log(event);
  }
  

}
