import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { environment } from '../../../environments/environment';
import { ToastService } from '../../share/toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() emitAuthenticated: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  public isAuthenticated(): boolean {
    if (TokenService.getToken() == null) {
      this.emitAuthenticated.emit(false);
      return false;
    }
    this.emitAuthenticated.emit(true);
    return true;
  }

  public login(userCredentialsData: any): Observable<any> {
    const authPath =
      environment.endpoints.apiPath +
      environment.endpoints.loginPath;
    return this.http.post<any>(authPath, userCredentialsData)
      .pipe(
        tap((response) => {
          TokenService.setToken(response);
          this.emitAuthenticated.emit(true);
        }),
        catchError(() => {
          ToastService.error('Błąd', 'Nieznany błąd');
          return Observable;
        })
      );
  }

  public logout(): void {
    TokenService.removeToken();
    this.emitAuthenticated.emit(false);
  }
}
