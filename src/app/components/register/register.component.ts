import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage: string | null = null;
  
  constructor(private auth: AuthService) { }

  onSubmit(): void {
    this.auth.register(this.user).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}