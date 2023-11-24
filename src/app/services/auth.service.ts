import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { UserLogin } from './model/user.login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:9000/api/user/token';

  user: BehaviorSubject<UserLogin> = new BehaviorSubject<UserLogin>(null!);
  userSubject!: Subject<UserLogin>;

  isAuthenticated = false

  private tokenExpirationDate: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.httpClient.post<UserLogin>(this.url, {
      email, password
    }).pipe(
      tap(user => {
        this.handleAuthentication(user.email, user.password, user.accessToken, user.tokenExpiration)
      })
    )
  }

  autoLogin() {
    const userData: {
      tokenExpiration: Date;
      email: string,
      password: string,
      accessToken: string
    } = JSON.parse(localStorage.getItem('user')!)

    if (!userData) {
      return;
    }

    const loadedUser = new UserLogin(userData.email, userData.password, userData.accessToken, userData.tokenExpiration)
    if (loadedUser.accessToken) {
      this.user.next(loadedUser)
      const expirationTime = 3600000;
      this.autoLogout(expirationTime)
    }
  }

  logout() {

    localStorage.removeItem('user')
    this.user.next(null!)
    this.router.navigate(['auth'])

    if (this.tokenExpirationDate) {
      clearTimeout(this.tokenExpirationDate);
      this.user.next(null!)
    }
    this.tokenExpirationDate = null;
  }

  autoLogout(expirationTime: number) {
    this.tokenExpirationDate = setTimeout(() => {
      this.logout();
    }, 3600000)
  }

  private handleAuthentication(email: string, password: string, accessToken: string, tokenExpiration: any) {
    const user = new UserLogin(email, password, accessToken, tokenExpiration);
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user))
  }
}
