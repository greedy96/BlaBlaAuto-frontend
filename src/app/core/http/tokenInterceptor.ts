import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../auth/token.service';
import { tap } from 'rxjs/operators';
import { RedirectService } from '../redirect/redirect.service';
import { ToastService } from '../../share/toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private redirectService: RedirectService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!TokenService.getToken()) {
      return next.handle(req);
    }
    const modified = req.clone({setHeaders: {Authorization: `Token ${TokenService.getToken()}`}});
    return next.handle(modified).pipe(tap(
      () => {
      },
      (err) => {
        if (err.status === 401) {
          TokenService.removeToken();
          this.redirectService.redirectToLoginPage();
          ToastService.warning('Błąd', 'Zostałeś wylogowany');
        }
      }
    ));
  }
}
