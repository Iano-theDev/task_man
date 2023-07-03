import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, catchError, tap, throwError } from "rxjs";
import { VaccCard } from "src/app/models/vacc-card.model";


@Injectable({
    providedIn: "root"
})
export class VaccCardService {
    private vaccCardUrl = 'assets/vacc-table-data.json'

    constructor(private http: HttpClient){}

    getVaccTableData() : Observable<{table: VaccCard}>{
        return this.http.get<{table: VaccCard}>(this.vaccCardUrl).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = ''
        if (err.error instanceof ErrorEvent){
            errorMessage = `An error occured ${err.error.message}`
        } else {
            errorMessage = `server returned code: ${err.error.code}, error message is ${err.error.message}`
        }
        console.log(errorMessage);
        return throwError(() => errorMessage);
    }
}