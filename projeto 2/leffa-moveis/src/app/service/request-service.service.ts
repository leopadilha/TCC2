import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRequest(page: number, designer?: string, date?: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    if (designer) {
      params = params.append('projetista', designer);
    }
    if (date) {
      params = params.append('data_pedido', date);
    }

    return this.http.get(`${this.baseUrl}/pedido/todos`, { params });
  }
}