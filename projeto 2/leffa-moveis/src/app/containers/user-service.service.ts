import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserRole } from '../types/user.enum';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userSubject: BehaviorSubject<any> = new BehaviorSubject(this.getUserFromLocalStorage());
  user$: Observable<any> = this.userSubject.asObservable();

  constructor() {
    if(this.getUserFromLocalStorage()){
      this.userSubject.next(this.getUserFromLocalStorage());
    }
  }

  getUserFromLocalStorage(): any {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData) : null;
  }

  setUser(data: any): void {
    localStorage.setItem('userData', JSON.stringify(data));
    this.userSubject.next(data);
  }

  getUser(): any {
    return this.userSubject.getValue();
  }

  canDisplayButton(): boolean {
    const user = this.getUser();
    return user && user.cargo !== UserRole.Projetista;
  }
}