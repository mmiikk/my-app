import { Settings } from './settings';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  private message = new Subject<Settings>();

  message$ = this.message.asObservable();

  sendMessage(message: Settings) {
    this.message.next(message);
  }
}
