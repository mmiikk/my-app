import { Component, OnInit, OnChanges,  Input, Output, EventEmitter  } from '@angular/core';
import { Color } from '../color';
import { Value } from '../value';
import { ElementService } from '../element.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css']
})
export class ColorpickerComponent implements OnInit, OnChanges {

  Colors: Color[];
  selectedColor: Color;
  @Input() value: Value;
  @Input() valueInt: number;
  @Output() 
  change: EventEmitter<number> = new EventEmitter<number>();

  subscriptionElement: Subscription;

  constructor(private elementService: ElementService) { 
  //  this.selectedColor = new Color();
  /*  this.subscriptionElement = elementService.messageColor$.subscribe(
      message => { this.selectedColor = message; this.selectedColor.calculateColorFromInt(); console.log(this.selectedColor);}
    );*/
  }

  ngOnInit() {
console.log('a');
    this.selectedColor = new Color();
    if(typeof this.valueInt !== "undefined")
      this.selectedColor.IntVal = this.valueInt.toString();
    this.selectedColor.calculateColorFromInt();
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }).join('');

    this.Colors = [];
    var r_s = [73,73,73,0,0,0,73,0];
    var g_s = [0,36,73,73,73,0,0,0];
    var b_s = [0,0,0,0,85,85,85,0];
    var r_e = [255,255,255,0,0,0,255,255];
    var g_e = [0,146,255,255,255,0,0,255];
    var b_e = [0,0,0,0,255,255,255,255]; 
    var color;
    var t=0;
    var i =0;
    var j = 0;
    var k = 0;
    for(var row=0; row< 8; row++)
    {
      for(var col=0; col< 8; col++)
      {
        var k=r_s[row] + col * Math.round((r_e[row]-r_s[row])/7);
        var j=g_s[row] + col * Math.round((g_e[row]-g_s[row])/7);     
        var i=b_s[row] + col * Math.round((b_e[row]-b_s[row])/7);      
        color = new Color();
        color.IntVal = Math.round(i) * 65536 + Math.round(j) * 256 + Math.round(k);
        color.calculateColorFromInt();
        this.Colors.push(color);
      }
    }
  }

  ngOnChanges() {
    this.selectedColor = new Color();
    if(typeof this.valueInt !== "undefined")
      this.selectedColor.IntVal = this.valueInt.toString();
    this.selectedColor.calculateColorFromInt();
  }

  onSelectColor(color: Color): void{
    this.selectedColor = color;
    this.valueInt = color.IntVal;
    this.change.emit(parseInt(this.valueInt.toString());
   // this.elementService.sendColor(this.selectedColor);
  }

  onTypeColor(): void{
    var color = this.selectedColor;
    this.selectedColor = new Color();

    color.calculateColorFromInt();
   
    this.selectedColor = color;
    this.valueInt = color.IntVal;
   // this.elementService.sendColor(this.selectedColor);
  }
}
