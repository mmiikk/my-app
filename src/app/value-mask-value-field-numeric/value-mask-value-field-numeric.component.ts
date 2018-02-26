import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Value } from './../value';
import { Mask } from '../mask';
import { Color } from './../color';
import { ElementService } from '../element.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-value-mask-value-field-numeric',
  templateUrl: './value-mask-value-field-numeric.component.html',
  styleUrls: ['./value-mask-value-field-numeric.component.css']
})
export class ValueMaskValueFieldNumericComponent implements OnInit, OnChanges {

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
      {   this.color = message;    }
    })
    console.log(this.value);
  }

  ngOnInit() {
    console.log("numeric");
    this.checkDefault();
  }

  ngOnChanges() {
    this.checkDefault();
    this.elementService.getColor("Value Mask Field Numeric L 38");
  }

  checkDefault(): void{
    if( this.mask.MaskVal.split('_').length - 1 === this.value.Length )
      this.default = true;
    else
      this.default = false;
  }

  toggleDefault(){
    this.default = !this.default;
    if(this.default == true)
    {
      this.mask.MaskVal = ' ';
      for(var i=0; i<this.value.Length; i++) {
        this.mask.MaskVal =  this.mask.MaskVal + '_';
      }
      this.mask.Value = '';
    } else {
      this.mask.MaskVal = '';
      for(var i=0; i<this.value.Length; i++) {
        this.mask.MaskVal =  this.mask.MaskVal + ' ';
      }
      this.mask.Value = '';
    }
    
  }
  sendMessage(event): void{
  }
    

}
