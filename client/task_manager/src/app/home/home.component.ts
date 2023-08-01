import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from "../users/users.component";
import { Logger } from '../shared/services/logger.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmActionComponent } from '../shared/confirm-action/confirm-action.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, UsersComponent, ConfirmActionComponent]
})
export class HomeComponent {

    constructor(private logger: Logger, public dialog: MatDialog){}

    logTest() {
        this.logger.log('logging... My logger works!')
    }
}
