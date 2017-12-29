import { Element } from './../element';
import { ELEMENTS } from '../mock-elements';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({

  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  element: Element = {
    id: 1,
    station_ID: 1,
    name: 'dupa',
    position_X: 1,
    position_Y: 1,
    selected: false
  };
  elements = ELEMENTS;

  displayedColumns = ['id', 'name', 'position_X'];
  dataSource = new MatTableDataSource<Element>(ELEMENTS);

  constructor() {  }

  ngOnInit() {

  }

  onSelect(element: Element, event): void {
    if(event.ctrlKey){ element.selected = !element.selected; }
    else {  this.clearSelected(this.dataSource.data); element.selected = !element.selected; }

    console.log(event);
  }

  clearSelected(elements: Element[]): Element[] {
    elements.forEach(element => {
      element.selected = false;
    });
    return elements;

  }
}
