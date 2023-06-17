import { Component, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ITask } from '../models/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnDestroy{

  title = new FormControl('');
  description = new FormControl('');
  date = new FormControl('');
  singleTask?: ITask

  tasks?: ITask[];


  logData(event: Event): void {
    event.preventDefault()
    console.log(`title: ${this.title.value}\nDescription: ${this.description.value}\ndate: ${this.date.value}`)
    // console.log(this.singleTask)

  }

  ngOnInit(): void {
      console.log("youll see this when add task component is initialized")
  }

  ngOnDestroy() : void {
    console.log("RIP Add task")
  }

}
