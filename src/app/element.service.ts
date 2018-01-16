import { Element } from './element';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class ElementService {
  private message = new Subject<Element>();

  message$ = this.message.asObservable();

  sendMessage(message: Element) {
    this.message.next(message);
  }
}
