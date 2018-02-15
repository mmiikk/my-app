import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Value } from './../value';
import { Mask } from '../mask';

@Component({
  selector: 'app-value-mask-value-field-numeric',
  templateUrl: './value-mask-value-field-numeric.component.html',
  styleUrls: ['./value-mask-value-field-numeric.component.css']
})
export class ValueMaskValueFieldNumericComponent implements OnInit, OnChanges {

  @Input() mask: Mask;
  @Input() value: Value;
  @Output() messageEvent = new EventEmitter<Mask>();

  constructor() { }

  ngOnInit() {
    console.log("dupa");
  }

}
