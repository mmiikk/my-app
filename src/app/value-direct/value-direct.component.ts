import { Value } from './../value';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-value-direct',
  templateUrl: './value-direct.component.html',
  styleUrls: ['./value-direct.component.css']
})
export class ValueDirectComponent implements OnInit {

  @Input() value: Value;

  constructor() { }

  ngOnInit() {

  }

}
