import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  user: User = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage: string | null = null;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

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