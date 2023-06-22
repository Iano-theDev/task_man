import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { range } from "rxjs/internal/observable/range";


@Injectable({
    providedIn: 'root'
})
export class NumberService{
    constructor(private http: HttpClient){}
    const source$: Observable<number> = range(1, 10);

    source$.pipe( 
        map(x => x * 3)filter(x => x % 2 === 0 )
    ).subscribe(x: any => console.log(x));
}