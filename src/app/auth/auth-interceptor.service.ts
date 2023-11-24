import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(request);
        }
        const modifiedRequest = request.clone({
          headers: request.headers.set("Authorization", `${user.accessToken}`)
        })
        return next.handle(modifiedRequest)
      })
    );
  }
}
