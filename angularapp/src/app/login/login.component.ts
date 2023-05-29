import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User;
  constructor(public authService: AuthService) {
  this.user = new User('','');
  }



  login(form: NgForm) {
    console.log(form.value)
    this.authService.authenticateUser(form.value).subscribe((res: any) => {
      if (res) {
        //this.accountData = res;
        console.log("res", res)
      }

    })
  }
  
}
