import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import config from '../config/config';
import { throwError } from 'rxjs';

@Injectable()
export class AuthClient {

  constructor(private client: HttpClient) { }

  get<T>(path: string) {
    const headers = {
      'Authorization': 'Basic YWRtaW46UGFzc3dvcmQx'
    }

    return this.client.get<T>(`${config.wepApiUrl}/${path}`, { headers }).pipe(
      map(x => x as T),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was:`, error.error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
