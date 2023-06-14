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

  logData(event:any) {
    
    console.log(this.username, this.email, this.password)
    event.preventDefault();
  }
}
