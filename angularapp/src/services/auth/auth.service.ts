import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {
  }
  readonly _baseUrl = 'http://localhost:5233/users';

  authenticateUser(data: {}) {
    return this.http.post(
      this._baseUrl + '/authenticate', data
    );

  }

}
