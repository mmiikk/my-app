import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Value } from './../value';
import { Mask } from '../mask';

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

  constructor() { }

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
    console.log(this.mask);
   
  //  this.messageEvent.emit(this.value);
  }
}
