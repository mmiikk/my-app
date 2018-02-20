import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValueService } from './../value.service';
import { SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Value } from './../value';
import { Color } from './../color';
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
  color: Color;
  

  constructor(private elementService: ElementService) { 
    this.subscriptionValue = elementService.messageColor$.subscribe(
      message => {
        if(this.value.ID > 1000 && this.value.ID < 3000)
        {   this.color = message;    }
      }
    )};
  ngOnInit() {
    
  }

  ngOnChanges() {
    if(this.value.ID > 1000 && this.value.ID < 3000)
    {
      console.log(this.value);
      this.color = new Color();
      this.color.IntVal = this.value.Val;
      this.color.calculateColorFromInt();
    }
  }

  sendMessage() {
    this.messageEvent.emit(this.value);

    console.log("miana");
  }

  onColorChange() {
    console.log("miana");
  }


}
