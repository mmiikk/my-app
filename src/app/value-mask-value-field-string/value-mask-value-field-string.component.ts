import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Value } from './../value';
import { Mask } from '../mask';
import { Color } from './../color';
import { ElementService } from '../element.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-value-mask-value-field-string',
  templateUrl: './value-mask-value-field-string.component.html',
  styleUrls: ['./value-mask-value-field-string.component.css']
})
export class ValueMaskValueFieldStringComponent implements OnInit, OnChanges {

  @Input() mask: Mask;
  @Input() value: Value;
  @Output() messageEvent = new EventEmitter<Mask>();
  default: Boolean;
  subscriptionValue: Subscription;
  color: Color;

  constructor(private elementService: ElementService) { 
    this.subscriptionValue = elementService.messageColor$.subscribe(
    message => {
      if(this.value.ID > 1000 && this.value.ID < 3000)
      {   this.color = message; this.mask.Value = this.color.IntVal.toString();   }
    })
  }

  ngOnInit() {
    if( this.mask.MaskVal.split('_').length - 1 === 1 )
      this.default = true;
    else
      this.default = false;

     
  }

  ngOnChanges() {
    if( this.mask.MaskVal.split('_').length - 1 === 1 )
      this.default = true;
    else
      this.default = false;
  }

  toggleDefault(){
    this.default = !this.default;
    if(this.default == true)
    {
      this.mask.MaskVal = '_';
      this.mask.Value = '';
    } else {
      this.mask.MaskVal = '0';
      this.mask.Value = '';
    }
    
  }
  sendMessage() {
 
  //  this.messageEvent.emit(this.value);
  }
}
