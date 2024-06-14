import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAgendaResponse } from 'src/app/interfaces/agendaResponse';
import { IFData } from 'src/app/interfaces/ifdata';

@Injectable({
    providedIn: 'root'
})

 
export class ClientService {

    private baseUrl = 'http://localhost:8080/procesador/bitacora/v1';

    constructor(private http: HttpClient) { }

    agendar(formData: IFData) {
        console.log("entraa la agenda dosodsodsodso ");
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', localStorage.getItem('token') || '');
        return this.http.post<IAgendaResponse>(`${this.baseUrl}/bitacora/agenda`, formData, { headers });
    }
}
