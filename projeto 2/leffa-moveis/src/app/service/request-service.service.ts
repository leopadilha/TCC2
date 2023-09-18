import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private baseUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  getRequest(): Observable<any> {
    return this.http.get(`${this.baseUrl}/pedido`);
  }
}
