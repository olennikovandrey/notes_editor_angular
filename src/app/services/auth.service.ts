import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { IUsersData } from '../data/users-data/usersData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {};

  setToken(token: string) {
    localStorage.setItem("Token", token);
  };

  getToken() {
    return localStorage.getItem("Token");
  };

  isLoggedIn() {
    return this.getToken() !== null;
  };

  login(userInfo: IUsersData): Observable<string | boolean> {
    const registeredUsers = JSON.parse(localStorage.getItem("UsersData")!);
    if (registeredUsers.find((item: IUsersData) => item.login === userInfo.login && item.password === userInfo.password)) {
      this.setToken("loggedIn");
      return of (true);
    };
    return throwError(() => new Error("Failed login"));
  };

  logout() {
    this.router.navigate(["login"]);
  };
};
