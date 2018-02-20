import { Element } from './element';
import { PLC } from './plc';
import { Color } from './color';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class ElementService {
  private message = new Subject<Element>();
  private messagePLC = new Subject<PLC[]>();
  private messageColor = new Subject<Color>();

  PLCs: PLC[];
  color: Color;

  message$ = this.message.asObservable();
  messagePLC$ = this.messagePLC.asObservable();
  messageColor$ = this.messageColor.asObservable();

  sendMessage(message: Element) {
    this.message.next(message);
  }
  sendMessagePLC(message: PLC[]) {
    this.messagePLC.next(message);
    this.PLCs = message;
  }
  sendColor(message: Color){
    this.color = message;
    this.messageColor.next(message);
  }

  getPLCs() {
    this.messagePLC.next(this.PLCs);
  }
  getColor() {
    this.messageColor.next(this.color);
  }
}
