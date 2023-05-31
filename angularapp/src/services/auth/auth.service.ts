import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = false;
  roleAs: string = 'user';
  constructor(private http: HttpClient) {
  }
  readonly _baseUrl = 'http://localhost:5233/users';

  authenticateUser(data: {}): Observable<any> {
   return this.http.post(
      this._baseUrl + '/authenticate', data
   ).pipe(map((result: any) => {
     localStorage.setItem('STATE', 'true');
     localStorage.setItem('ROLE', result.role);
     console.log('data service', result)
     return result;
   }))
   
  }

    isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  getRole() {
    this.roleAs = localStorage.getItem('ROLE')?? '';
    return this.roleAs;
  }

}
