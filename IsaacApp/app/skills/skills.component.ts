import { Component } from "@angular/core";
import { SkillsService } from "./skills.service";
import { Skill } from "./skill";
import * as Toast from 'nativescript-toast';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "skills",
    templateUrl: "./skills/skills.component.html",
})

export class SkillsComponent { 

	private skills: Skill[];
	private loadMask;
	private connectionError;

	constructor(
		private skillsService: SkillsService,
		private routerExtensions: RouterExtensions
	) {
		this.skills = [];
		this.refresh();
	}

	onSkillEnabled(event, skill) {
		console.dir(event);
		if(event.value) {
			this.skillsService.enableSkill(skill).subscribe(r=>{});
		} else {
			this.skillsService.disableSkill(skill).subscribe(r=>{});
		}
		
	}

	runSkill(skill) {
		console.log("running skill");
		this.skillsService.runSkill(skill).subscribe(r=>{
			console.log(r);
			if(r) {
				Toast.makeText("Ran " +skill.name).show();
			} else {
				Toast.makeText("There was an error while running the skill" +skill.name).show();
			}
		});
	}

	settings() {
		this.routerExtensions.navigate(["/settings"], {
	        transition: {
		        name: "slideLeft",
		        duration: 500,
		        curve: "linear"
		    }
		});
	}

	refresh() {
		Toast.makeText("Refreshing").show();
		this.loadMask = true;
		this.skillsService.getSkills().subscribe(r=>{
            console.log(r);
            this.connectionError = (r===null);
            this.skills = (r===null ? [] : r);
            this.loadMask = false;
        });
	}

}
