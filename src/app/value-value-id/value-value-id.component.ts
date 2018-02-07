import { ValueService } from './../value.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Value } from './../value';
import { ValueStaticComponent } from '../value-static/value-static.component';

@Component({
  selector: 'app-value-value-id',
  templateUrl: './value-value-id.component.html',
  styleUrls: ['./value-value-id.component.css']
})
export class ValueValueIdComponent implements OnInit {

  subscriptionValue: Subscription;
  value: Value;
  valueIDType: string;

  constructor(private valueService: ValueService) {
    this.subscriptionValue = valueService.message$.subscribe(
      message => {

        this.value = message;
        this.valueIDType = '-1';
        if( this.value.Type === 'Static' ) { this.valueIDType = '1'; }
        else {
          if(this.value.Type !== 'Static' && this.value.Mask_ID === 0) { this.valueIDType = '2'; }
          else { this.valueIDType = '3'; }
        }

      });
   }

  ngOnInit() {

  }

  receiveMessage($event) {
    this.value = $event;
  }

  setDirect(): void {
    if( (this.value.Type === 'Static') || ( this.value.Type !== 'Static' && this.value.Mask_ID !== 0 ))
    {
      this.value.Type = 'Bit';
      this.value.DB = 0;
      this.value.Length = 0;
      this.value.StartByte = 0;
      this.value.Val = '';
      this.value.Mask_ID = 0;
      this.value.PLC_ID = 0;
      this.value.DBType = 2;
    }
  }

  setStatic(): void {
    if( ( this.value.Type !== 'Static' && this.value.Mask_ID === 0 ) || ( this.value.Type !== 'Static' && this.value.Mask_ID !== 0 ))
    {
      this.value.Type = 'Static';
      this.value.DB = 0;
      this.value.Length = 0;
      this.value.StartByte = 0;
      this.value.Val = '';
      this.value.Mask_ID = 0;
      this.value.PLC_ID = 0;
      this.value.DBType = 2;
    }
  }
  setMask(): void {
    if( ( this.value.Type === 'Static') || ( this.value.Type !== 'Static' && this.value.Mask_ID === 0 ))
    {
      this.value.Type = 'Bit';
      this.value.DB = 0;
      this.value.Length = 0;
      this.value.StartByte = 0;
      this.value.Val = '';
      this.value.Mask_ID = this.value.ID;
      this.value.PLC_ID = 0;
      this.value.DBType = 2;
    }
  }
}
