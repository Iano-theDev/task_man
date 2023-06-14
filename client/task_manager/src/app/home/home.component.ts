import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from "../users/users.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, UsersComponent]
})
export class HomeComponent {

}
