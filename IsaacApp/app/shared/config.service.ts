import { Injectable } from "@angular/core";
import {
    getString,
    setString
} from "application-settings";

@Injectable()
export class ConfigService {

    private DOMAIN_KEY:string = "DOMAIN";
    private PASSWORD_KEY:string = "PASSWORD";
    private storage;

    getDomain() {
        return getString(this.DOMAIN_KEY);
    }

    setDomain(domain: string) {
        setString(this.DOMAIN_KEY, domain ? domain : '');
    }

    getPassword() {
        getString(this.PASSWORD_KEY);
    }

    setPassword(password: string) {
        setString(this.PASSWORD_KEY, password ? password : '');
    }

}
