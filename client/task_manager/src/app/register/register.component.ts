import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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

  logData(e:Event) { 
    e.preventDefault()
    console.log(this.username.value, this.email.value, this.password.value);
  }
}
