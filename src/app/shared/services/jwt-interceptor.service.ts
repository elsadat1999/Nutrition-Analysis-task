import { ErrorHandler, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
       const token = localStorage.getItem('token');
        request = request.clone({
          setParams:{
            app_id:'47379841',
            app_key:'d28718060b8adfd39783ead254df7f92'
          }
        })
        return next.handle(request)
    }



}