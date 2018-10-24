import { Injectable } from "@angular/core";
import { HttpService } from "../../shared/http.service";

@Injectable()
export class StreamsService {

    private getSkillsUrl: string = "skills/get";
    private enableSkillUrl: string = "skills/enable/";
    private disableSkillUrl: string = "skills/disable/";

    constructor(private httpService: HttpService) { }

    getStreams(){

        //return this.httpService.get(this.getSkillsUrl);

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
    
}
