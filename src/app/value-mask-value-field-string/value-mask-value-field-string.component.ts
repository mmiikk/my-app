import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Value } from './../value';
import { Mask } from '../mask';

@Component({
  selector: 'app-value-mask-value-field-string',
  templateUrl: './value-mask-value-field-string.component.html',
  styleUrls: ['./value-mask-value-field-string.component.css']
})
export class ValueMaskValueFieldStringComponent implements OnInit {

  @Input() mask: Mask;
  @Output() messageEvent = new EventEmitter<Mask>();

  constructor() { }

  ngOnInit() {
  }

}
