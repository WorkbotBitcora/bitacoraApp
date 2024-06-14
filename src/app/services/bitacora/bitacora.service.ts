import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, tap, throwError } from 'rxjs';
import { IBitacora } from 'src/app/interfaces/bitacora';
import { IResponseEquipo } from 'src/app/interfaces/equipoResponse';
import { registerEquipoCredentials } from 'src/app/interfaces/regirterEquipoCredentials';

@Injectable({
    providedIn: 'root'
})
export class BitacoraService {

    private baseUrl = 'http://localhost:8080/procesador/bitacora/v1';

    constructor(private http: HttpClient) { }

    getBitacoras(): Observable<IBitacora[]> {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', localStorage.getItem('token') || '');

        return this.http.get<IBitacora[]>(`${this.baseUrl}/bitacora/agendalista`, { headers }).pipe(
            tap(data => console.log('Datos recibidos del servidor:', data)),
            catchError(this.handleError)
          );
    }
    getBitacorasCompletadas(): Observable<IBitacora[]> {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', localStorage.getItem('token') || '');

        return this.http.get<IBitacora[]>(`${this.baseUrl}/bitacora/agendalista/completadas`, { headers }).pipe(
            tap(data => console.log('Datos recibidos del servidor:', data)),
            catchError(this.handleError)
          );
    }

    saveEquipo(data: registerEquipoCredentials , id : number ) {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', localStorage.getItem('token') || '');
        return this.http.patch<IResponseEquipo>(`${this.baseUrl}/bitacora/equipo/${id}`, data , { headers })
    }

    getBitacorasByUSer(id: string): Observable<IBitacora[]> {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', localStorage.getItem('token') || '');

        return this.http.get<IBitacora[]>(`${this.baseUrl}/bitacora/usuario/${id}`, { headers }).pipe(
            tap(data => console.log('Datos recibidos del servidor:', data)),
            catchError(this.handleError)
          );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('Error en la solicitud HTTP:', error);
        return throwError('Algo salió mal; por favor, inténtalo de nuevo más tarde.');
      }

}
