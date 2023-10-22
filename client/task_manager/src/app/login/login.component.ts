import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../shared/services/users.service';
// import { LoginResponse} from "../models/login.model"

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private loginService: UserService, private router: Router) {
  }


  loginUser() {
    let user: any = {
      email: this.email.value,
      password: this.password.value
    }
    console.log("Credentials: ", user);

    try {
      const success = this.loginService.loginUser(user).subscribe({
        next: (res: any) => {
          console.log("User logged in", res);
          localStorage.setItem("token", res.token)
          this.router.navigate(['/new-task'])
        },
        error: err => console.log("Error", err)
      })
      return success;
    } catch (error) {
      console.log("Error", error)
      return error
    }
  }

}
