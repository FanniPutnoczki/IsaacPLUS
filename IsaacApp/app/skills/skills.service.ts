import { Injectable } from "@angular/core";
import { HttpService } from "../shared/http.service";

import { Skill } from "./skill";

@Injectable()
export class SkillsService {

    private getSkillsUrl: string = "skills/get";
    private enableSkillUrl: string = "skills/enable/";
    private disableSkillUrl: string = "skills/disable/";

    constructor(private httpService: HttpService) { }

    getSkills(){

        return this.httpService.get(this.getSkillsUrl);

/*        let skills: Skill[] = [
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
        return skills;*/
    }

    runSkill(skill: Skill) {
        return this.httpService.get("skills/do/" + skill.name);
    }

    enableSkill(skill: Skill) {
        return this.httpService.get(this.enableSkillUrl + skill.name);
    }

    disableSkill(skill: Skill) {
        return this.httpService.get(this.disableSkillUrl + skill.name);
    }

}
