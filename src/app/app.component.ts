import { ElementService } from './element.service';
import { SettingsService } from './settings.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SettingsComponent } from './settings/settings.component';
import { Settings } from './settings';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SettingsService, ElementService]
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

    settings: Settings;
    defaultSettings: Settings;

    constructor(public dialog: MatDialog,
      private settingsService: SettingsService,
      private elementService: ElementService) {
         settingsService.message$.subscribe(

             // console.log("Parent");
          );
         elementService.message$.subscribe(
          message => {  console.log(message);}
         );
        this.settings = new Settings();
        this.defaultSettings = new Settings();
        this.settings.noOfRowsInTable = 6;
      }

    ngOnInit(){
      this.settingsService.sendMessage(this.settings);
    }

    close(reason: string) {
      this.sidenav.close();
    }

    openDialog(): void {
      this.defaultSettings =  Object.assign({}, this.settings);
      let dialogRef = this.dialog.open(SettingsComponent, {
        width: '50%',
        height: '50%',
        data: {settings: this.defaultSettings}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log(this.settings);
      console.log(result);
      if (result === true) {
        this.settings =  Object.assign({}, this.defaultSettings);
        this.settingsService.sendMessage(this.settings);
      } else {
        this.defaultSettings =  Object.assign({}, this.settings);
      }
    });

  }
}
