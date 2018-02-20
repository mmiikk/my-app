import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ElementService } from './../element.service';
import { Value } from './../value';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PLC } from '../plc';
import { MatTableDataSource } from '@angular/material';
import { Mask } from '../mask';

@Component({
  selector: 'app-value-mask',
  templateUrl: './value-mask.component.html',
  styleUrls: ['./value-mask.component.css']
})
export class ValueMaskComponent implements OnInit, OnChanges {

  dbManual: boolean;
  valueType: string;
  @Input() value: Value;
  @Output() messageEvent = new EventEmitter<Value>();
  valueIDType: string;
  subscriptionPLCs: Subscription;
  plcs: PLC[];
  displayedColumns = ['Position', 'Mask', 'Value'];
  dataSource = new MatTableDataSource<Mask>();
  selectedMask: Mask;

  constructor( private elementService: ElementService) {
    this.valueType = "-1";
    this.subscriptionPLCs = elementService.messagePLC$.subscribe(
      message => { this.plcs = message; console.log(this.value); }
    );

  }

  ngOnChanges(){
    this.elementService.getPLCs();
    this.checkValueType();
    this.dataSource = new MatTableDataSource<Mask>(this.value.Mask);
    this.clearSelected(this.value.Mask);
  }

  ngOnInit() {
    this.valueType = "-1";
    this.checkValueType();
    this.selectedMask = new Mask();
    this.clearSelected(this.value.Mask);
  }

  selectPLC(event): void{
  }

  onSelect(mask: Mask, event): void {
    this.clearSelected(this.value.Mask);
    mask.Selected = !mask.Selected;
    if(mask.Selected)
      this.selectedMask = mask;
    else
      this.selectedMask = new Mask();
  }

  onValueTypeChange(): void {
    switch (this.valueType) {
      case "0":
        this.value.Type = "Bit";
      break;
      case "4":
        this.value.Type = "Byte";
      break;
      case "2":
        this.value.Type = "Real";
      break;
      case "1":
        this.value.Type = "Int";
      break;
      case "3":
        this.value.Type = "String";
      break;
    }
    this.value.Mask = [];
    this.clearSelected(this.value.Mask);
    this.selectedMask = new Mask();
    this.dataSource = new MatTableDataSource<Mask>(this.value.Mask);
  }

  clearSelected(masks: Mask[]): Mask[] {
    masks.forEach(mask => {
      mask.Selected = false;
    });
    return masks;
  }

  checkValueType() {
    switch (this.value.Type) {
      case "Bit":
        this.valueType = "0";
      break;
      case "Byte":
        this.valueType = "4";
      break;
      case "Real":
        this.valueType = "2";
      break;
      case "Int":
        this.valueType = "1";
      break;
      case "String":
        this.valueType = "3";
      break;
    }
  }

  onDelete(): void {
    var id;
    id = this.value.Mask.indexOf(this.selectedMask);

    if(id !== -1)
      this.value.Mask.splice(id,1);

    this.dataSource = new MatTableDataSource<Mask>(this.value.Mask);
    this.sendMessage();
    this.selectedMask = new Mask();
    this.recalcMask();
  }

  onAdd(): void {
    this.clearSelected(this.value.Mask);
    var newMask = new Mask;
    newMask.ID = this.value.Mask_ID;
    newMask.Station_ID = this.value.Station_ID;
    newMask.Position = Infinity;
    newMask.MaskVal = "";
    newMask.Value = "";
    newMask.Selected = true;

    this.value.Mask.push(Object.assign({}, {}, newMask));
    var id = this.value.Mask.indexOf(this.value.Mask.find(mask => mask.Position == Infinity));
    this.onSelect(this.value.Mask[id],null);
    this.recalcMask();
    this.dataSource = new MatTableDataSource<Mask>(this.value.Mask);
   
  }

  recalcMask(): void{
    this.value.Mask.sort((a,b) => 0 - (a.Position < b.Position ? 1 : -1))
    if(this.value.Mask.length > 0){
      this.value.Mask[0].Position = 1;
      var i = 1;
      this.value.Mask.forEach(mask => {
        if(i > 1){
          mask.Position = i;
        }
        i++;
      });
    }
  }

  sendMessage() {
    this.messageEvent.emit(this.value);
  }

  checkDisabled(): boolean {
    if(this.value.DBType == parseInt("2"))
      return true;
    else return false;
  }

}
