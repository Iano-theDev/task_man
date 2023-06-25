import { Injectable } from "@angular/core"
import { User } from "src/app/models/user.model"
import { pipe } from 'rxjs'

@Injectable({
    providedIn: "root"
})
export class UserService{
    private usersUrl = './src/assets/users.json'

    constructor (private http: HTTPCl) {}
    getUsers() :User[]{
        return  [
            {
                "id": 0,
                "name": "Ian",
                "email": "ian@email.com",
                "rating": 5,
                "avatar": "https://www.universityoffashion.com/blog/wp-content/uploads/2021/10/Picture1-1.png"
            },
            {
                "id": 1,
                "name": "Ian",
                "email": "ian@email.com",
                "rating": 5,
                "avatar": "https://www.universityoffashion.com/blog/wp-content/uploads/2021/10/Picture1-1.png"
            },
            {
                "id": 2,
                "name": "John",
                "email": "john@example.com",
                "rating": 4,
                "avatar": "https://www.pngitem.com/pimgs/m/517-5171782_freetoedit-simpsons-stickers-aesthetic-sad-cartoon-illustration-hd.png"
            },
            {
                "id": 3,
                "name": "Alice",
                "email": "alice@example.com",
                "rating": 3,
                "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8Afnlazwt4y83v-7THjQAqKtC7SVHPrlWW8eB-bSffDupiIg2jiMNHs4P9t_4EkbbIg&usqp=CAU"
            },
            {
                "id": 4,
                "name": "Sarah",
                "email": "sarah@example.com",
                "rating": 4,
                "avatar": "https://e0.pxfuel.com/wallpapers/3/812/desktop-wallpaper-sad-cartoon-drawings-simpsons-depressed-simpsons.jpg"
            },
            {
                "id": 5,
                "name": "Michael",
                "email": "michael@example.com",
                "rating": 2,
                "avatar": "https://i.pinimg.com/originals/a8/9c/3b/a89c3b9e447e29c17a0707a6ef5049ab.png"
            },
            {
                "id": 6,
                "name": "Emily",
                "email": "emily@example.com",
                "rating": 5,
                "avatar": "https://i.pinimg.com/564x/d1/49/da/d149da1dac7b0d85b182df84d18b6740.jpg"
            },
            {
                "id": 7,
                "name": "David",
                "email": "david@example.com",
                "rating": 4,
                "avatar": "https://culturedvultures.com/wp-content/uploads/2017/07/Simpsons-Wallpaper-Mr-Burns-Evil-Laugh-Wallpaper.gif"
            },
            {
                "id": 8,
                "name": "Emma",
                "email": "emma@example.com",
                "rating": 5,
                "avatar": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fjoshuathedude.artstation.com%2Fprojects%2FGXZdaW&psig=AOvVaw3nIlEsIS7xTxPZKQvFN-d3&ust=1687412115294000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCODVg5vS0_8CFQAAAAAdAAAAABAE"
            },
            {
                "id": 9,
                "name": "Jacob",
                "email": "jacob@example.com",
                "rating": 3,
                "avatar": "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2012/9/19/1348050411799/Ralph-Wiggum-003.jpg?width=700&quality=85&auto=format&fit=max&s=e0b63e3485a4a02f3697520f744e0a30"
            },
            {
                "id": 10,
                "name": "Olivia",
                "email": "olivia@example.com",
                "rating": 4,
                "avatar": "https://image.fresherslive.com/latestnews/2023/03/Lisa-Simpson-6412f07abdaef46064795-900.webp"
            }
        ]
    }
}