import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '@app/app-config';
import { User, UserWithToken, LoginCredentials } from '@app/models';
import { BehaviorSubject, Observable, ignoreElements, tap } from 'rxjs';

const USER_LOCAL_STORAGE_KEY = 'userData';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly isLoggedIn = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: LoginCredentials) {
    const url = AppConfig.API_ENDPOINT;

    console.log("credentials", url);
    this.http.post<any>(`${url}/`, {}, {})
    this.redirectToDashboard();
  }

  logout(): void {
    this.removeUserFromLocalStorage();
    this.user.next(null);
    this.router.navigateByUrl('/login');
  }

  private saveTokenToLocalStore(userToken: string): void {
    localStorage.setItem(USER_LOCAL_STORAGE_KEY, userToken);
  }

  private pushNewUser(token: string) {
    this.user.next(this.decodeToken(token));
  }

  private decodeToken(userToken: string): UserWithToken {
    const userInfo = JSON.parse(window.atob(userToken)) as User;

    return { ...userInfo, token: userToken };
  }

  private redirectToDashboard(): void {
    console.log("=???")
    this.router.navigateByUrl('/');
  }

  private removeUserFromLocalStorage(): void {
    localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
  }

  public isAuthenticated(): Observable<boolean> {
    return this.isLoggedIn;
  }

  public logInApp(user: any): boolean {
    return user.username == 'admin@logyca.com' && user.password == '123';
  }
}
