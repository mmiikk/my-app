import { SettingsComponent } from './settings/settings.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';


import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { ValueComponent } from './value/value.component';
import { ValueValueIdComponent } from './value-value-id/value-value-id.component';
import { ValueStaticComponent } from './value-static/value-static.component';
import { ValueDirectComponent } from './value-direct/value-direct.component';
import { ValueMaskComponent } from './value-mask/value-mask.component';
import { ServerRequestService } from './server-request.service';
import { ValueMaskValueFieldNumericComponent } from './value-mask-value-field-numeric/value-mask-value-field-numeric.component';
import { ValueMaskValueFieldStringComponent } from './value-mask-value-field-string/value-mask-value-field-string.component';
import { ColorpickerComponent } from './colorpicker/colorpicker.component';
import { ValueFontColorComponent } from './value-font-color/value-font-color.component';
import { ValueBackColorComponent } from './value-back-color/value-back-color.component';


@NgModule({
  declarations: [
    AppComponent,
    ElementsComponent,
    SettingsComponent,
    ValueComponent,
    ValueValueIdComponent,
    ValueStaticComponent,
    ValueDirectComponent,
    ValueMaskComponent,
    ValueMaskValueFieldNumericComponent,
    ValueMaskValueFieldStringComponent,
    ColorpickerComponent,
    ValueFontColorComponent,
    ValueBackColorComponent
  ],
  exports: [  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    HttpClientModule
  ],
  entryComponents: [
    SettingsComponent
  ],
  providers: [ServerRequestService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
