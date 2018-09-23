import { Component } from "@angular/core";
import { SkillsService } from "./skills.service";
import { Skill } from "./skill"
@Component({
    selector: "skills",
    templateUrl: "./skills/skills.component.html",
})

export class SkillsComponent { 

	private skills: Skill[]
	private loadMask;

	constructor(
		private skillsService: SkillsService
	) {
		this.loadMask = true;
		this.skills = this.skillsService.getSkills();
		console.dir(this.skills);
	}

	onSkillEnabled(event, skill) {
		console.log("checked");
	}

}
