import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface Requests {
  client: string;
  datePed: string,
  environment: string,
  dateDevelivery: string,
  status: string,
  observable: string

}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private productsSource = new BehaviorSubject<Requests[]>([]);
  request$ = this.productsSource.asObservable();

  private loadingSource = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSource.asObservable();

  private errorSource = new BehaviorSubject<any>(null);
  error$ = this.errorSource.asObservable();

  constructor(private http: HttpClient) {}

  getProducts() {
    this.loadingSource.next(true);
    this.http.get<Requests[]>(`${environment.apiUrl}/pedido`)
      .pipe(
        catchError(error => {
          this.errorSource.next(error);
          this.loadingSource.next(false);
          throw error;
        })
      )
      .subscribe(products => {
        this.productsSource.next(products);
        this.loadingSource.next(false);
      });
  }
}