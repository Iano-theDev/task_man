import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { User } from '../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // imageWidth: number = 200;
  // imageHeight: number = 250;
  user_id?: number

  showDetails: boolean = false;

  detailsVisibleUserId: number | null = null;

  filterUsers: string = "";

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

  toogleDetails(id: number) {
    // this.user_id = id

    // const singleUser: any = this.users.find(user => user.id === id)
    // console.log(singleUser)

    if (this.detailsVisibleUserId === id) {
      this.detailsVisibleUserId = null;
    } else {
      this.detailsVisibleUserId = id;
    }
  }

}

