import { Component, OnInit} from '@angular/core';
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
  title: string = 'TaskMan!'
  showUserDetails: boolean = false;
  filteredUsers: User[] = []
  users: User[] = []
  errorMessage?: string
  dbUsers: User[] = [];

  constructor(private getUsersService: UserService) { }

  private _filterBy: string = '';
  get filterUsers(): string {
    return this._filterBy
  }
  set filterUsers(value: string) {
    this._filterBy = value;
    console.log('value', value);
    this.filteredUsers = this.performFilter(value)
    console.log(`_filtered: ${this._filterBy}`)
    console.log(`filtered: ${this.filterUsers}`)
  }

  performFilter(searchString: string): User[] {
    searchString = searchString.toLocaleLowerCase()
    return this.users.filter((user: User) =>
      user.name.toLocaleLowerCase().includes(searchString)
    )
  }

  ngOnInit(): void {
    this.getUsersService.getUsers().subscribe({
      next: users =>{
        this.users = users
        console.log('filtered users', this.filterUsers)
        this.filterUsers = ''
      },
      error: err => this.errorMessage = err
    })
 
  }

  getRegisteredUsers() {
    this.getUsersService.getUsersFromDB().subscribe({
      next: users => this.dbUsers = users,
      error: err => this.errorMessage = err
    }) 
  }

  toggleDetails(currentUserId: number){
    let detailsStatus: boolean = false
    let currentUser = this.users.find(user => {
      if (user.id === currentUserId) {
        let toggleDetailsStatus: boolean = false;
        toggleDetailsStatus = !toggleDetailsStatus
        detailsStatus = toggleDetailsStatus
      }
    })
    console.log(detailsStatus); 
    
    // if (currentUser){
    //   let updatedUser = {...currentUser,toggleUseDetails }
    //   toggleUseDetails = !toggleUseDetails
    //   console.log('updatedUser', updatedUser.toggleUseDetails);
      
    // }
    // console.log('currrent user:', currentUser);
    // console.log('showuser deatsils:', this.showUserDetails);
    

    
  }

  clearSearch(): void {
    this.filterUsers = ''
    this.getUsersService.getUsers()
    console.log('filtered users', this.filterUsers);
  }

  onRatingClick(message: string): void {
    this.title = `Hello, ${message}!`
    console.log(message)
  }
}
