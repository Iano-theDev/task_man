import { Injectable } from "@angular/core"
import { User } from "src/app/models/user.model"
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, catchError, tap, throwError } from 'rxjs'

@Injectable({
    providedIn: "root"
})
export class UserService{
    private usersUrl = 'assets/users.json' 
    private dbUsersUsrl = 'http://localhost:3000/users'

    constructor(private http: HttpClient){}

    getUsers() : Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl).pipe(
            tap(data => console.log('my data: ', data)), catchError(this.handleError)
        )
    }

    getUsersFromDB(): Observable<User[]> {
        return this.http.get<User[]>(this.dbUsersUsrl).pipe(
            tap(users => console.log('Users from db: ', users), catchError(this.handleError))
        )
    }

    private handleError(err : HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occoured: ${err.error.message}!`
        } else {
            errorMessage = `Error code: ${err.error.code}, message ${err.error.message}!`
        }
        console.log(errorMessage);
        return throwError(() => errorMessage)
    }

}