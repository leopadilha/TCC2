import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000/user/'; 

  constructor(private http: HttpClient) { }

  login(credentials: { usuario: string, senha: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}login`, credentials);
  }
}