import { Component, ViewChild } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

    reason = '';

    close(reason: string) {
      this.reason = reason;
      this.sidenav.close();
    }
  title = 'app';

}
