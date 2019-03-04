import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { request, getFile, getImage, getJSON, getString } from "tns-core-modules/http";
import { ConfigService } from "./config.service";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

    constructor(
        private http: HttpClient,
        private configService: ConfigService
        ) { }

    get(url: string) {

        let fullUrl = this.configService.getDomain() + "/api/" + url;
        console.log("url: " + fullUrl);
        return this.http.get(fullUrl, {})
        .timeout(20000)
        .catch(error => {
            console.log(error.message);
            return Observable.of(undefined);
        });
    }

    post(url: string, data) {

        let fullUrl = this.configService.getDomain() + "/api/" + url;
        console.log("url: " + fullUrl);
        return this.http.post(fullUrl, data, this.httpOptions)
        .timeout(20000)
        .catch(error => {
            console.log(error.message);
            return Observable.of(undefined);
        });
    }

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

}
