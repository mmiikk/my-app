import { ElementService } from './../element.service';
import { SettingsService } from './../settings.service';
import { Element } from './../element';
import { ELEMENTS } from '../mock-elements';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Settings } from './../settings';
import { Subscription } from 'rxjs/Subscription';


@Component({

  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit, OnDestroy {
  element: Element = {
    id: 1,
    station_ID: 1,
    name: 'dupa',
    position_X: 1,
    position_Y: 1,
    selected: false,width: 300,height: 300,showBorder: false,showName: false,position_name: 'Bottom',onTop: false
    ,font: {  id: 1,  station_ID: 1,  size: 12,  bold: true,  italic: false,  unterline: false,  centeralign: false  }

  };
  elements = ELEMENTS;
  subscriptionSettings: Subscription;
  subscriptionElement: Subscription;
  settings: Settings;
  displayedColumns = ['id', 'name', 'position_X', 'position_Y', 'width', 'height'];
  dataSource = new MatTableDataSource<Element>(ELEMENTS);

  constructor(private settingsService: SettingsService, private elementService: ElementService) {

    this.subscriptionSettings = settingsService.message$.subscribe(
      message => { this.settings = message; }
    );
    this.subscriptionElement = elementService.message$.subscribe(
      message => { this.element = message; }
    );
  }


  ngOnInit() {

  }
  ngOnDestroy() { }


  onSelect(element: Element, event): void {
    if(event.ctrlKey){ element.selected = !element.selected; }
    else {  this.clearSelected(this.dataSource.data); element.selected = !element.selected; this.elementService.sendMessage(element);  }

    console.log(event);
  }



  clearSelected(elements: Element[]): Element[] {
    elements.forEach(element => {
      element.selected = false;
    });
    return elements;

  }
}
