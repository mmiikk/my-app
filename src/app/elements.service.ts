import { PLC } from './plc';
import { Element } from './element';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ElementsService {
  private message = new Subject<Element[]>();
  private messagePLC = new Subject<PLC[]>();


  message$ = this.message.asObservable();
  messagePLC$ = this.messagePLC.asObservable();

  sendMessage(message: Element[]) {
    this.message.next(message);
  }



 /* clear() {
    this.message = [];
  }*/
}
