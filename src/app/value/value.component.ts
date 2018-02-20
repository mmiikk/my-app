import { ValueService } from './../value.service';
import { Font } from './../font';
import { Color } from './../color';
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

  onValueTypeChange(type: number) {
    switch (type.toString()){
      case '0':
        this.valueService.sendMessage(this.element.ValueID);
        this.elementService.sendColor(new Color());
        break;
      case '1':
        this.valueService.sendMessage(this.element.FontColor);
        var color = new Color();
        color.IntVal = this.element.FontColor.Val;
        this.elementService.sendColor(color);
      break;
      case '2':
        this.valueService.sendMessage(this.element.BackColor);
        var color = new Color();
        color.IntVal = this.element.BackColor.Val;
        color.calculateColorFromInt();
        this.elementService.sendColor(color);
        console.log(color);
        break;

    }

    
  }
}
