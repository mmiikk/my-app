import { Element } from './element';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class ServerRequestService {

  private heroesUrl = 'http://localhost:8080/api/elements';

  constructor(
    private http: HttpClient) { }

    getHeroes (): Observable<Element[]> {
console.log("dupa");
      return this.http.get<Element[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
    }
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
       //S this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
