import { Component, OnInit } from '@angular/core';
import { Color } from '../color';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css']
})
export class ColorpickerComponent implements OnInit {

  Colors: Color[];
  constructor() { }

  ngOnInit() {

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
        var i=r_s[row] + col * Math.round((r_e[row]-r_s[row])/7);
        var j=g_s[row] + col * Math.round((g_e[row]-g_s[row])/7);     
        var k=b_s[row] + col * Math.round((b_e[row]-b_s[row])/7);      
        color = new Color();
              color.R = Math.round(i);
              color.G = Math.round(j);
              color.B = Math.round(k);
              color.HexColor = rgbToHex(color.R,color.G,color.B);
              this.Colors.push(color);
              console.log( i);
          
        
      }
     

    }
    
 
/*
    for(var i = 0; i<=255; i=i+25)
    {
      color = new Color();
      color.R = i;
      color.HexColor = '#' + color.R.toString(16) + '00' + '00';
      this.Colors.push(color);
      console.log(color.R.toString(16));
    }
*/


  }

 
}
