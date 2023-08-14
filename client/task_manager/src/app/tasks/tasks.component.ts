import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressBarModule, MatIconModule, MatButtonModule],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks = [
    {
      title: "Some coding",
      description: "Do some python programming",
      dueDate: "2023-08-14T15:30:00",
      complete: false
    },
    {
      title: "Make food",
      description: "prepare some food",
      dueDate: "2023-08-14T15:30:00",
      complete: false
    },
    {
      title: "Take a wok",
      description: "Take a wok to poland",
      dueDate: "2023-08-14T15:30:00",
      complete: false
    },
    {
      title: "Some coding",
      description: "Do some python programming",
      dueDate: "2023-08-14T15:30:00",
      complete: false
    }
  ]
}
