import { ValueService } from './value.service';
import { ElementService } from './element.service';
import { PLC } from './PLC';
import { ElementsService } from './elements.service';
import { SettingsService } from './settings.service';
import { ServerRequestService } from './server-request.service';
import { ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SettingsComponent } from './settings/settings.component';
import { Settings } from './settings';
import { Color } from './color';
import { Subscription } from 'rxjs/Subscription';
import { Element } from './element';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SettingsService, ElementService, ValueService, ElementsService]
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

    settings: Settings;
    defaultSettings: Settings;
    subscriptionServerRequestService: Subscription;
    color: Color;
    element: Element;
    elements: Element[];
    plcs: PLC[];

    constructor(public dialog: MatDialog,
      private settingsService: SettingsService,
      private elementService: ElementService,
      private elementsService: ElementsService,
      private serverRequestService: ServerRequestService) {
         settingsService.message$.subscribe(

             // console.log("Parent");
          );
         elementService.messageColor$.subscribe(
          message => { this.color = message; }
         );
        this.settings = new Settings();
        this.defaultSettings = new Settings();
        this.settings.noOfRowsInTable = 6;
      }

    ngOnInit(){
      this.elements = new Array<Element>();
      this.plcs = new Array<PLC>();
      this.color = new Color();
      this.settingsService.sendMessage(this.settings);
    }

    get(): void {
      this.serverRequestService.getHeroes()
      .subscribe(heroes => {
        heroes.forEach(element => {
          this.elements.push(Object.assign({}, {}, element));
        });
        this.elementsService.sendMessage(this.elements);
       });
        this.serverRequestService.getPLCs()
        .subscribe(heroes => {
          heroes.forEach(plc => {
            this.plcs.push(Object.assign({}, {}, plc));
          }); this.elementService.sendMessagePLC(this.plcs);
        });
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
      
      if (result === true) {
        this.settings =  Object.assign({}, this.defaultSettings);
        this.settingsService.sendMessage(this.settings);
      } else {
        this.defaultSettings =  Object.assign({}, this.settings);
      }
    });

  }
}
