import { Settings } from './../settings';
import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  message: string;
  public settings: Settings;


  constructor(public dialogRef: MatDialogRef<SettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.settings = new Settings();
      this.settings = data.settings;
  }

  ngOnInit() { }



  onNumberChange(event ) {
  }
  send(): void {
  }
  save(): void {
  }
}
