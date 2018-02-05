import { ValueService } from './../value.service';
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

  valueType: string;
  element: Element;
  subscriptionElement: Subscription;

  constructor(private elementService: ElementService,
              private valueService: ValueService) {

    this.subscriptionElement = elementService.message$.subscribe(
      message => { this.element = message; this.valueType = "0"; this.valueService.sendMessage(this.element.ValueID); }
    );


  }

  ngOnInit() {
    this.element = new Element();
    this.element.Font = new Font();
    this.valueType = "0";

  }

  toggleAlignCenter(): void{
    this.element.Font.CenterAlign = !this.element.Font.CenterAlign;
  }
  toggleBold(): void{
    this.element.Font.Bold = !this.element.Font.Bold;
  }
  toggleUnderline(): void{
    this.element.Font.Unterline = !this.element.Font.Unterline;
  }
  toggleItalic(): void{
    this.element.Font.Italic = !this.element.Font.Italic;
  }
}
