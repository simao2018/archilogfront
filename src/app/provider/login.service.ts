import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    path: string = 'http://93.3.28.232:5000/api/'
    constructor(
        protected httpClient: HttpClient
    ) { }

    public login(data: { username?: string, password?: string }) {
        return this.httpClient.post(this.path, data);
    }
}