import { Injectable } from "@angular/core";
import {
    getString,
    setString
} from "application-settings";
@Injectable()
export class ConfigService {

    //TODO not mocking data

    constructor() { }

    getPort() {
        return 5000;
    }

    setPort() {}

    getHost() {
        return "10.0.2.2";
    }

    setHost() {}

}
