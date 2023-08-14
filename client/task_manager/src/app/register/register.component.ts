import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../shared/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');  

  constructor(private userService: UserService, private router: Router){}
  logData(e:Event) { 
    e.preventDefault()
    
    
    let newUser = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value
    }
    console.log('newUser: ', newUser);
  }

  registerUser(){
    let newUser = {
      userName: this.username.value,
      email: this.email.value,
      password: this.password.value
    }
    try {
      if (!newUser){
        throw "User entered is invalid"
      }
      this.userService.addUser(newUser).subscribe(res=>console.log(res))
      this.router.navigate(['/login'])
      console.log('newUser: ', newUser);
      
    } catch (error) {
      console.log("Error: ", error)
    }   
  }

}
 