import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn = false;
  user: User = {};

  constructor(private auth: AuthService,) { }

  // ngOnInit(user: User){
  //   // this.isLoggedIn = !!localStorage.getItem();

  //   if (this.isLoggedIn) {
  //     // const user = this.tokenStorageService.getUser();
  //     return user.email;
  //   }
  // }

  logOut(): void {
    this.auth.signOut();
    window.location.reload();
  }
}