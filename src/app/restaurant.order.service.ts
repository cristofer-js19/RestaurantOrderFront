import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http'
import { map, catchError } from 'rxjs/operators'

@Injectable()
export class RestaurantOrderService {
    constructor(private http: Http) {}

    public getOutput(input: string): Observable<string> {
        return this.http.get(`https://localhost:44367/api/RestaurantOrder/${input}`)
            .pipe(
                map((response: any) => response.text())
            )
    }
}