import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Value } from './value';

@Injectable()
export class ValueService {
  private message = new Subject<Value>();

  message$ = this.message.asObservable();

  sendMessage(message: Value) {
    this.message.next(message);
  }

}
