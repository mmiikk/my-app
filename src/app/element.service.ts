import { Element } from './element';
import { PLC } from './plc';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class ElementService {
  private message = new Subject<Element>();
  private messagePLC = new Subject<PLC[]>();

  PLCs: PLC[];

  message$ = this.message.asObservable();
  messagePLC$ = this.messagePLC.asObservable();

  sendMessage(message: Element) {
    this.message.next(message);
  }
  sendMessagePLC(message: PLC[]) {
    this.messagePLC.next(message);
    this.PLCs = message;
  }

  getPLCs() {
    this.messagePLC.next(this.PLCs);
  }
}
