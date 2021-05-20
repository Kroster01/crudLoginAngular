import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class IncurridoService {

  constructor(private http: HttpClient) { }

  /**
   * Obtiene información de prorroga del cliente
   */
  obtenerIncurrido(): Observable<any> {


    return this.http
      .get<any>(`/apifenix/obtieneIncurridosFenix`)
      .pipe(catchError(this.handlerError));
  }

  private handlerError(error: any): Observable<never> {
    let errorMessage = 'Error unknown';
    if (error) {
      errorMessage = `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
