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
  
  private url: string = "http://localhost:8000/authentication_token";

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<{ token: string }>(this.url, user, httpOptions);
  }

  register(user: User) {
    return this.http.post<{ token: string }>(this.url, user, httpOptions);
  }

  signOut(): void {
    window.sessionStorage.clear();
  }
}
