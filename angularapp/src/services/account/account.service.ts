import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Account } from "./../../models/account.model"
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  list: Account[] = [];
  readonly _baseUrl = 'http://localhost:5233/accounts';

  constructor(private http: HttpClient) {
  }

  getAccountDetails() {
    return this.http.get(
      this._baseUrl+ '/read'
    );
  
  }

  uploadAccountDetails(details: []) {
    return this.http.post(this._baseUrl + '/create', details)  
  }
}
