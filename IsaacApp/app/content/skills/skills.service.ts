import { Injectable } from "@angular/core";
import { HttpService } from "../../shared/http.service";

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

    runSkill(skill: any) {
        return this.httpService.get("skills/do/" + skill.name);
    }

    enableSkill(skill: any) {
        return this.httpService.get(this.enableSkillUrl + skill.name);
    }

    disableSkill(skill: any) {
        return this.httpService.get(this.disableSkillUrl + skill.name);
    }

}
