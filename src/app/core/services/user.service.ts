import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  getUserData(): Observable<User> {
    return this.httpClient.get<User>(environment.endpoints.apiPath + environment.endpoints.profilePath);
  }

  registerUser(registrationCredentials): Observable<any> {
    return this.httpClient.post(environment.endpoints.apiPath + environment.endpoints.registrationPath, registrationCredentials);
  }
}
