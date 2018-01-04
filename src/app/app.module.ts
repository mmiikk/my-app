import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconRegistry, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';

import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AmexioWidgetModule,CommonHttpService } from 'amexio-ng-extensions';


@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    AmexioWidgetModule,
    MatMenuModule,
    MatInputModule


  ],
  providers: [CommonHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

