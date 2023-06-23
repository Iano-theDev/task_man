import { Injectable } from "@angular/core"
import { User } from "src/app/models/user.model"

@Injectable({
    providedIn: "root"
})
export class UserService{
    private usersUrl = './src/assets/users.json'

    constructor (private http: HTTPCl) {}
    getUsers() :User[]{
       
    }
}