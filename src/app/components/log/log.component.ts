import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { TokenStorageService } from 'src/app/services/auth/token.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  user: User = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage: string | null = null;

  constructor(
    private auth: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  log() {
    this.auth.login(this.user).subscribe({
      next: res => {
        if (res.token != null) {
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          localStorage.setItem('token', res.token);
          this.router.navigateByUrl('/movies');

        }
      },
      error: res => {
        this.errorMessage = res.message
        this.isLoginFailed = true;
      }
    });
  }
}