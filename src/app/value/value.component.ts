import { Font } from './../font';
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
    //this.element = new Element();
    console.log("val")
    this.subscriptionElement = elementService.message$.subscribe(
      message => { this.element = message; console.log(message); }
    );


  }

  ngOnInit() {
    this.element = new Element();
    this.element.font = new Font();
    this.element.font.bold = false;
    this.element.font.centeralign = false;
    this.element.font.italic = false;
    this.element.font.unterline = false;

  }

  toggleAlignCenter(): void{
    this.element.font.centeralign = !this.element.font.centeralign;
  }
  toggleBold(): void{
    this.element.font.bold = !this.element.font.bold;
  }
  toggleUnderline(): void{
    this.element.font.unterline = !this.element.font.unterline;
  }
  toggleItalic(): void{
    this.element.font.italic = !this.element.font.italic;
  }
}
