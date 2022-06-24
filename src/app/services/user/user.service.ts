import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "http://localhost:8000/api/users";
  token : string | null = localStorage.getItem('token');
  isLoggedIn: Boolean = false;

  constructor(private http: HttpClient) { }

  getUserStatus(): Observable<any> {
    if (this.token) {
      this.isLoggedIn = true;
    };
    return this.http.get(this.url, { responseType: 'text' });
  }


}
