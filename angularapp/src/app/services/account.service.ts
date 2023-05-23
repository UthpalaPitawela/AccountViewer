import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Account } from "./../../models/account.model"
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  list: Account[] = [];

  constructor(private http: HttpClient) {
  }
  readonly _baseUrl = 'http://localhost:5233/accounts';

  getAccountDetails() {
    return this.http.get(
      this._baseUrl+ '/read'
    );
    //this.http.get(this._baseUrl)
    //  .toPromise()
    //  .then(res => this.list = res as Account[]);
  }

  uploadAccountDetails(details: []) {
    //const data = {
    //  details: details
    //}
    //console.log("=============details", data)
    return this.http.post(this._baseUrl + '/create', details)  
  }
}
