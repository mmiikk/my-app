import { ServerRequestService } from './../server-request.service';
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

  element: Element;
  elements: Element[];
  subscriptionSettings: Subscription;
  subscriptionElement: Subscription;
  subscriptionServerRequestService: Subscription;
  settings: Settings;
  displayedColumns = ['ID', 'Name', 'Position_X', 'Position_Y', 'Width', 'Height'];
  dataSource = new MatTableDataSource<Element>(this.elements);

  constructor(private settingsService: SettingsService,
    private elementService: ElementService,
    private serverRequestService: ServerRequestService) {


    this.subscriptionSettings = settingsService.message$.subscribe(
      message => { this.settings = message; }
    );
    this.subscriptionElement = elementService.message$.subscribe(
      message => { this.element = message; }
    );
  }

  get(): void {
    this.serverRequestService.getHeroes()
    .subscribe(heroes => {
      heroes.forEach(element => {
        this.elements.push(Object.assign({}, {}, element));
      });
      this.dataSource = new MatTableDataSource<Element>(this.elements);
     });

  }
  ngOnInit() {
    this.elements = new Array<Element>();

  }
  ngOnDestroy() { }


  onSelect(element: Element, event): void {
    if(event.ctrlKey){ element.Selected = !element.Selected; }
    else {  this.clearSelected(this.dataSource.data); element.Selected = !element.Selected; this.elementService.sendMessage(element);  }

  }



  clearSelected(elements: Element[]): Element[] {
    elements.forEach(element => {
      element.Selected = false;
    });
    return elements;

  }
}
