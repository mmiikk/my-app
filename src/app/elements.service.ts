import { Element } from './element';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ElementsService {
  private message = new Subject<Element[]>();

  message$ = this.message.asObservable();

  sendMessage(message: Element[]) {
    this.message.next(message);
  }

 /* clear() {
    this.message = [];
  }*/
}
