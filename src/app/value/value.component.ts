import { ValueService } from './../value.service';
import { Font } from './../font';
import { Color } from './../color';
import { Element } from './../element';
import { Component, OnInit, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ElementService } from '../element.service';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit, OnChanges {

  valueType: string;
  element: Element;
  subscriptionElement: Subscription;
  color: Color;

  constructor(private elementService: ElementService,
              private valueService: ValueService) {

    this.subscriptionElement = elementService.message$.subscribe(
      message => { this.element = message; this.valueType = "0"; this.valueService.sendMessage(this.element.ValueID); }
    );
    this.subscriptionElement = elementService.messageColor$.subscribe(
      message => { if(this.valueType == '1'){ this.element.FontColor.Val = message.IntVal.toString();} 
        if(this.valueType == '2'){ this.element.BackColor.Val = message.IntVal.toString(); }
    }
    )
  }

  ngOnInit() {
    this.element = new Element();
    this.element.Font = new Font();
    this.valueType = "-1";
    this.color = new Color();
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

  ngOnChanges(){
   console.log("DUPA");
  }

  onValueTypeChange(type: number) {
    switch (type.toString()){
      case '0':
        this.valueService.sendMessage(this.element.ValueID);
       // this.elementService.sendColor(new Color());
        console.log("color from value 0");
        break;
      case '1':
        this.valueService.sendMessage(this.element.FontColor);
        //var color = new Color();
        this.color.IntVal = this.element.FontColor.Val;
       // this.color = color;
       // this.elementService.sendColor(color);
        console.log("color from value 1");
      break;
      case '2':
        this.valueService.sendMessage(this.element.BackColor);
       // var color = new Color();
        this.color.IntVal = this.element.BackColor.Val;
        this.color.calculateColorFromInt();
       // this.elementService.sendColor(color);
      // this.color = color;
        //console.log(color);
        console.log("color from value 2");
        break;

    }

    
  }
}
