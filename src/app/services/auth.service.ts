import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';
import { IUserCredentials } from '../interfaces/userCredentials';
import { IUserLogged } from '../interfaces/userLogged';
import { registerCredentials } from '../interfaces/registerCredentials';
import { IResponseRegister } from '../interfaces/registerResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/procesador/bitacora/v1';

  constructor(private http: HttpClient) { }

  login(user: IUserCredentials) {
    return this.http.post<IUserLogged>(`${this.baseUrl}/Authentication/log`, user  );
  }

  registerUser(userDetails: registerCredentials) {
    return this.http.post<IResponseRegister>(`${this.baseUrl}/Authentication/reg`, userDetails);
  }

  getUserByEmail(email: string): Observable<User[]> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', localStorage.getItem('token') || '');

    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`, { headers });
  }
}
