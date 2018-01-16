import { Element } from './../element';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ElementService } from '../element.service';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  element: Element;
  subscriptionElement: Subscription;

  constructor(private elementService: ElementService) {
    this.element = new Element();
    this.subscriptionElement = elementService.message$.subscribe(
      message => { this.element = message; console.log(message); }
    );


  }

  ngOnInit() {

  }

  toggle(event): void{
    console.log(event);
  }

}
