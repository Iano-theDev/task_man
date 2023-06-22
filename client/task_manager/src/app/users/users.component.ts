import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { ChangeColorPipe } from '../shared/changeColor.pipe';
import { StarComponent } from "../shared/stars/star.component";
import { UserService } from '../shared/services/users.service';

@Component({
    selector: 'app-users',
    standalone: true,
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    imports: [CommonModule, FormsModule, ChangeColorPipe, StarComponent]
})
export class UsersComponent implements OnInit {
  // imageWidth: number = 200;
  // imageHeight: number = 250;
  title: string = 'TaskMan!'

  showUserDetails?: number | null;

  checkDetails: boolean = false;

  filteredUsers?: User[]

  constructor(private getUsersService: UserService) {}

  private _filterBy: string = '';

  get filterUsers(): string {
    return this._filterBy
  }

  set filterUsers(value: string) {
    this._filterBy = value;
    this.filteredUsers = this.performFilter(value)
    // console.log(`_filtered: ${this._filterBy}`)
    // console.log(`filtered: ${this.filterUsers}`)
  }
  users: User[] = []

  performFilter(searchString: string): User[] {
    searchString = searchString.toLocaleLowerCase()
    return this.users.filter((user: User) =>
      user.name.toLocaleLowerCase().includes(searchString)
    )
  }

  toogleDetails(userId: number) {
    this.showUserDetails === userId ? null : this.showUserDetails = userId
    this.checkDetails = !this.checkDetails
    // console.log(this.showUserDetails)
    // console.log(this.checkDetails)
  }

  clearSearch(): void {
    this.filterUsers = ' '
    this.getUsersService.getUsers()
  }

  ngOnInit(): void {
    // this.users = this.getUsersService.getUsers()
    this.filterUsers = ''
  }

  usersInit() {
    this.users = this.getUsersService.getUsers();
    this.filterUsers = ''
  }

  onRatingClick(message: string) :void {
    // this.title = `Hello, ${message}!`
    console.log(message)
  }
}