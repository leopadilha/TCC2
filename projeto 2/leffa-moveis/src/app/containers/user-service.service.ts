import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserRole } from '../types/user.enum';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  user$: Observable<any> = this.userSubject.asObservable();

  setUser(data: any): void {
    this.userSubject.next(data);
  }

  getUser(): any {
    return this.userSubject.getValue();
  }

  canDisplayButton(): boolean {
    return this.getUser().cargo != UserRole.Projetista;
  }
}