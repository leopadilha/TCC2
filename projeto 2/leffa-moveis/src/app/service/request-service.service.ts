import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl = environment.apiUrl;
 // private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

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

    return this.http.get(`${this.baseUrl}/pedido`, { params }).pipe(
      map(response => {
        return response
      }),
      catchError(error => {
        return throwError(() => new Error(error));
      })
    );;
  }

  createRequest(data: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/pedido`, data);
  }

  editRequest(data: any, id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/pedido/${id}`, data);
  }

  deleteRequest(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/pedido/${id}`).pipe(
      catchError(error => {
        throw 'Erro ao excluir o pedido. Serviço indisponível.';
      })
    );
  }

  downloadPdf(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/pedido/${id}/pdf`, { responseType: 'blob' });
  }
}