import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const AUTH_TOKEN_NAME = 'userEmail';

@Injectable()
export class AuthService {
  private authState: Subject<boolean> = new Subject<boolean>();
  public authState$: Observable<boolean> = this.authState.asObservable();

  constructor(private router: Router) {
  }

  public login(email: string): void {
    localStorage.setItem(AUTH_TOKEN_NAME, email);
    this.authState.next(true);
    this.router.navigateByUrl('/planets');
  }

  public logout(): void {
    localStorage.removeItem(AUTH_TOKEN_NAME);
    this.authState.next(false);
    this.router.navigateByUrl('/home');
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem(AUTH_TOKEN_NAME);
  }
}
