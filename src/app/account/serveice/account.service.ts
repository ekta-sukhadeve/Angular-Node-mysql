import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountInfo } from '../intercept/account-info';
import { Observable } from 'rxjs';
import { UserloginInfo } from '../intercept/userlogin-info';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url = 'http://localhost:3000/';
  constructor(private http :HttpClient) { }

  //register
  RegisterUser(account :AccountInfo):Observable<AccountInfo>{
    return this.http.post<AccountInfo>(this.url+'api/register',account);
  }

  //login
  loginUser (user:UserloginInfo) :Observable<UserloginInfo>{
    return this.http.post<UserloginInfo>(this.url+'api/login',user);
  }
}
