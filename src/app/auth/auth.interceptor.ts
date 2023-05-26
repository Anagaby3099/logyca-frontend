import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = request.url;
    const searchParams = new URLSearchParams(url);

    // Verificar si los parámetros necesarios están presentes en la URL
    if (searchParams.has('tx') && searchParams.has('p')) {
      const user = searchParams.get('tx');
      const token = searchParams.get('p');


      console.log("@TOKEN", token);
      console.log("@USER", user);
      // Aquí puedes almacenar los valores recuperados en algún servicio o en el almacenamiento local
      // Ejemplo: authService.setUser(user);
      // Ejemplo: authService.setToken(token);
    }

    return next.handle(request);
  }
}
