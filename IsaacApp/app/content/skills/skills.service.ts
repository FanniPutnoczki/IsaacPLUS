import { Injectable } from "@angular/core";
import { HttpService } from "../../shared/http.service";

@Injectable()
export class SkillsService {

    private getSkillsUrl: string = "skills/get";
    private resolveSkillUrl: string = "skills/resolve/";
    private enableSkillUrl: string = "skills/enable/";
    private disableSkillUrl: string = "skills/disable/";

    constructor(private httpService: HttpService) { }

    getSkills(){
        return this.httpService.get(this.getSkillsUrl);
    }

    resolveSkill(skill: any) {
        return this.httpService.get(this.resolveSkillUrl + skill.name);
    }

    runSkill(skill: any, answers: any) {
        return this.httpService.post("skills/do/" + skill.name, answers);
    }

    enableSkill(skill: any) {
        return this.httpService.get(this.enableSkillUrl + skill.name);
    }

    disableSkill(skill: any) {
        return this.httpService.get(this.disableSkillUrl + skill.name);
    }

}
