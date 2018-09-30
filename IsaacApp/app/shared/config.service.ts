import { Injectable } from "@angular/core";
import {
    getString,
    setString
} from "application-settings";
import { SecureStorage } from "nativescript-secure-storage";

@Injectable()
export class ConfigService {

    private DOMAIN_KEY:string = "DOMAIN";
    private PASSWORD_KEY:string = "PASSWORD";
    private storage;

    

    constructor() {
        this.storage = new SecureStorage();
    }

    getDomain() {

        return new Promise((resolve, reject) => {
            this.storage.get({
                key: this.DOMAIN_KEY
            }).then( value => {
                    if(value) {
                        //TODO not mocking data but return value
                        resolve("http://10.0.2.2:5000");
                    } else {
                        reject();
                    }
                }
            );
        });
    }

    setDomain(domain: string) {
        return new Promise((resolve,reject) => {
            this.storage.set({
                key: this.DOMAIN_KEY,
                value: domain
            }).then(
                function(success) {
                    if(success) {
                        resolve();
                    } else {
                        reject();
                    }
                }
            );

        });
    }

    getPassword() {
        return new Promise((resolve, reject) => {
            this.storage.get({
                key: this.PASSWORD_KEY
            }).then(
                function(value) {
                    if(value) {
                        resolve(value);
                    } else {
                        reject();
                    }
                }
            );
        });
    }

    setPassword(password: string) {
        return new Promise((resolve,reject) => {
            this.storage.set({
                key: this.PASSWORD_KEY,
                value: password
            }).then(
                function(success) {
                    if(success) {
                        console.log("saved");
                        resolve();
                    } else {
                        reject();
                    }
                }
            );
        });
    }

}
