import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User;
  isLogin = false;

  roleAs: string = '';
  constructor(public authService: AuthService, private router: Router) {
  this.user = new User('','');
  }



  login(form: NgForm) {
    this.authService.authenticateUser(form.value).subscribe((result: any) => {
      if (result && this.authService.isLoggedIn()) {
        if (this.authService.getRole() === 'admin') {
          this.router.navigate(['/account-upload'])
        } else {
          this.router.navigate(['/account-view'])
        }
      }
    })
  }
}
