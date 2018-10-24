import { Component } from "@angular/core";
import { SkillsService } from "./skills.service";
import * as Toast from 'nativescript-toast';
import * as dialogs from "tns-core-modules/ui/dialogs";
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

	async handleConversation(cons, answers) {
		console.log("start");
		for(let con of cons) {
			if(con.input) {
				const answer = await dialogs.prompt({
				    message: con.prompt,
				    okButtonText: "Ok",
				});
				answers[con.key] = {};
				answers[con.key]["text"] = answer.text;
				console.log(answer);
			} else {
				await dialogs.alert(con.prompt);
			}
			if(con.selection) {
				for(let key in con.selection) {
					if (answers[con.key]["text"].includes(key)){
						let childCon = con["selection"][key];
						answers[con.key]["choice"] = key;
						await this.handleConversation(childCon, answers);
						break;
					}
				}
			}
		} 
	}

	async runSkill(skill) {
		console.log("running skill " + skill.name + " " + skill.conversation.length);
		if(skill.conversation.length > 0) {
			//todo resolve convo
			let answers = {};
			await this.handleConversation(skill.conversation, answers);
			console.log(answers);
			return;
		}
		this.skillsService.runSkill(skill).subscribe(r=>{
			console.log(r);
			if(r !== undefined) {
				Toast.makeText("Ran " + skill.name).show();
			} else {
				Toast.makeText("There was an error while running the skill" +skill.name).show();
			}
		});
	}

	//TODO here refresh only on refresh button press, navigation and on opening.. no intervals needed 
	refresh() {
		console.log("refreshing skills");
		this.skills = [];
		this.connectionError = false;
		this.loadMask = true;
		this.skillsService.getSkills().subscribe(r=>{
            if(r === null) {
            	this.connectionError = true;
            } else {
            	console.log(r);
            	this.skills = r;
            }
            this.loadMask = false;
        });
	}

}
