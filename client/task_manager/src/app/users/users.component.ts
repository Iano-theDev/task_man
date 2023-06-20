import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';
import { ChangeColorPipe } from '../shared/changeColor.pipe';
import { StarComponent } from "../shared/stars/star.component";

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
  users: User[] = [
    {
      id: 0,
      name: "Ian",
      email: "ian@email.com",
      rating: 5,
      avatar: "https://www.universityoffashion.com/blog/wp-content/uploads/2021/10/Picture1-1.png"
    },
    {
      id: 1,
      name: "Ian",
      email: "ian@email.com",
      rating: 5,
      avatar: "https://www.universityoffashion.com/blog/wp-content/uploads/2021/10/Picture1-1.png"
    },
    {
      id: 2,
      name: "John",
      email: "john@example.com",
      rating: 4,
      avatar: "https://www.pngitem.com/pimgs/m/517-5171782_freetoedit-simpsons-stickers-aesthetic-sad-cartoon-illustration-hd.png"
    },
    {
      id: 3,
      name: "Alice",
      email: "alice@example.com",
      rating: 3,
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8Afnlazwt4y83v-7THjQAqKtC7SVHPrlWW8eB-bSffDupiIg2jiMNHs4P9t_4EkbbIg&usqp=CAU"
    },
    {
      id: 4,
      name: "Sarah",
      email: "sarah@example.com",
      rating: 4,
      avatar: "https://e0.pxfuel.com/wallpapers/3/812/desktop-wallpaper-sad-cartoon-drawings-simpsons-depressed-simpsons.jpg"
    },
    {
      id: 5,
      name: "Michael",
      email: "michael@example.com",
      rating: 2,
      avatar: "https://i.pinimg.com/originals/a8/9c/3b/a89c3b9e447e29c17a0707a6ef5049ab.png"
    },
    {
      id: 6,
      name: "Emily",
      email: "emily@example.com",
      rating: 5,
      avatar: "https://i.pinimg.com/564x/d1/49/da/d149da1dac7b0d85b182df84d18b6740.jpg"
    }
  ];

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
    this.filterUsers = ''
  }

  ngOnInit(): void {
    this.filterUsers = ''
  }

  onRatingClick(message: string) :void {
    // this.title = `Hello, ${message}!`
    console.log(message)
  }
}