// import { Injectable } from "@angular/core"
// import { User } from "src/app/models/user.model"
// import { HttpClient, HttpErrorResponse } from "@angular/common/http"
// import { Observable, catchError, tap } from 'rxjs'

// @Injectable({
//     providedIn: "root"
// })
// export class UserService{
//     private usersUrl = './src/assets/users.json' 

//     constructor(
//         private http: HttpClient
//     ){}

//     getUsers() : Observable<User[]> {
//         return this.http.get<User[]>(this.usersUrl).pipe(
//             tap(data => console.log('my data: ', JSON.stringify(data))), catchError(this.handleError)
//         )
//     }

//     private handleError(err : HttpErrorResponse) {
//         let errorMessage = '';
//         errorMessage : `An error occoured: $(err.error.message)!`
//     }
// }