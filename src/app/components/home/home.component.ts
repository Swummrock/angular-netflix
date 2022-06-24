import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { TokenStorageService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;
  user: User = {};
  token : string | null = localStorage.getItem('token');

  constructor(
    private tokenAuth: TokenStorageService,
    ) { }

  ngOnInit(){
    if (this.token) {
      this.isLoggedIn = true;
    };
  }

  logOut(): void {
    this.tokenAuth.signOut();
    this.isLoggedIn = false;
    window.location.reload();
  }
}