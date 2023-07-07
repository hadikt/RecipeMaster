import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from './service/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loading:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
this.loading.show()
    return next.handle(request).pipe(finalize(()=>this.loading.hide()))
  }
}
