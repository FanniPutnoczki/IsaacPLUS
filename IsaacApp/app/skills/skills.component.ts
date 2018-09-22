import { Component } from "@angular/core";
import { SkillsService } from "./skills.service";

@Component({
    selector: "skills",
    templateUrl: "./skills/skills.component.html",
})

export class SkillsComponent { 

	private loadMask;

	constructor(
		private skillsService: SkillsService
	) {
		this.loadMask = true;
		this.skillsService.getSkills();
	}

}
