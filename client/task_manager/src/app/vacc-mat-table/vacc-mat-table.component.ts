import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-vacc-mat-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './vacc-mat-table.component.html',
  styleUrls: ['./vacc-mat-table.component.css']
})
export class VaccMatTableComponent {

}
