import { Injectable } from "@angular/core"
import { User } from "src/app/models/user.model"
import { pipe } from 'rxjs'

@Injectable({
    providedIn: "root"
})
export class UserService{


    private usersUrl = "src/assets/users.json";

    constructor (
        private http: HttpClient
    ){}
    getUsers() :User[]{
        return  this.http.get.
    }
}