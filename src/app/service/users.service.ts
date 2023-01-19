import { Injectable } from '@angular/core';
import {UserLdap} from "../model/user-ldap";
import {LDAP_USERS} from "../model/ldap-mock-data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }

  // Liste des utilisateurs
  users: UserLdap[] = LDAP_USERS;

  getUser(login: string): Observable<UserLdap> {
    return of (this.users.find(user => user.login === login))
  }

  getUsers(): Observable<UserLdap[]> {
    return of(this.users);
  }
}
