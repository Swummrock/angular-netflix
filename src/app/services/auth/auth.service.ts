import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private urlToken: string = "http://localhost:8000/authentication_token";
  private urlRegister: string = "http://localhost:8000/api/users";

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<{ token: string }>(this.urlToken, user, httpOptions);
  }

  register(user: User) {
    return this.http.post<{ token: string }>(this.urlRegister, user, httpOptions);
  }
}
