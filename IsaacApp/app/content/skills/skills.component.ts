import { Component } from "@angular/core";
import { SkillsService } from "./skills.service";
import * as Toast from 'nativescript-toast';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "skills",
    templateUrl: "./content/skills/skills.component.html",
})

export class SkillsComponent { 

	public connectionError;

	private skills;
	private loadMask;

	constructor(
		private skillsService: SkillsService,
		private routerExtensions: RouterExtensions
	) {
		console.log("skills constructor");
		this.connectionError = false;
		this.skills = [];
		this.refresh();
	}

	onSkillEnabled(event, skill) {
/*		console.dir(event);
		if(event.value) {
			this.skillsService.enableSkill(skill).subscribe(r=>{});
		} else {
			this.skillsService.disableSkill(skill).subscribe(r=>{});
		}*/
		
	}

	runSkill(skill) {
/*		console.log("running skill");
		this.skillsService.runSkill(skill).subscribe(r=>{
			console.log(r);
			if(r) {
				Toast.makeText("Ran " +skill.name).show();
			} else {
				Toast.makeText("There was an error while running the skill" +skill.name).show();
			}
		});*/
	}

	//TODO here refresh only on refresh button press, navigation and on opening.. no intervals needed 
	refresh() {
		console.log("refreshing skills");
		this.loadMask = true;
		this.skillsService.getSkills().subscribe(r=>{
            if(r === null) {
            	this.connectionError = true;
            	this.skills = [];
            } else {
            	console.log(r);
            	this.skills = r;
            }
            this.loadMask = false;
        });
	}

}
