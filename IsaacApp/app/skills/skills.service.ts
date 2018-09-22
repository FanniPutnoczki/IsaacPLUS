import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Skill } from "./skill";

@Injectable()
export class SkillsService {

    constructor(private http: HttpClient) { }

    getSkills(): Skill[] {
        let url = "http://10.0.2.2:5000/api/skills/do/Hi";
        console.log(url),
        
        this.http.get(url, {})
            .subscribe((result) => {
                console.log(result);
            }, (error) => {
                console.log(error);
            });
        return [];
    }

    runSkill(skill: Skill) {

    }

    enableSkill(skill: Skill) {

    }

}
