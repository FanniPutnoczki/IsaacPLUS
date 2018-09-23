import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Skill } from "./skill";

@Injectable()
export class SkillsService {

    constructor(private http: HttpClient) { }

    getSkills(): Skill[] {
        /*let url = "http://10.0.2.2:5000/api/skills/do/Hi";
        console.log(url),
        
        this.http.get(url, {})
            .subscribe((result) => {
                console.log(result);
                console.log("result");
            }, (error) => {
                console.log("error");
                console.log(error);
            });
        return [];*/
        let skills: Skill[] = [
            {
                name: "Hello",
                url: "...",
                enabled: false
            },
            {
                name: "Lamp",
                url: "...",
                enabled: true
            }
        ]
        return skills;
    }

    runSkill(skill: Skill) {

    }

    enableSkill(skill: Skill) {

    }

}
