import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { ConfigService } from "./config.service";

@Injectable()
export class HttpService {

    constructor(
        private http: HttpClient,
        private configService: ConfigService
        ) { }

    get(url: string) {
        let fullUrl = "http://" + this.configService.getHost() + ":" + this.configService.getPort() + "/api/" + url;
        console.log(fullUrl);
        return this.http.get(fullUrl, this.getHeaders());
    }

    private getHeaders() {
        return {};
    }

}
