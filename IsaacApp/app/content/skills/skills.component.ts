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
		this.connectionError = false;
		this.skills = [];
		this.refresh();
	}

	onSkillEnabled(event, skill) {
		if(event.value) {
			this.skillsService.enableSkill(skill).subscribe(r=>{});
		} else {
			this.skillsService.disableSkill(skill).subscribe(r=>{});
		}
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

	//TODO handle if server error
	async runSkill(skill) {

		console.log("running skill " + skill.name + " " + skill.conversation.length);
		let answers = {};
		if(skill.conversation.length > 0) {

			let newConvo = await this.skillsService.resolveSkill(skill).toPromise();
			console.log("resolved convo ", newConvo);
			skill.conversation = newConvo;
			await this.handleConversation(skill.conversation, answers);
			console.log(answers);

		}

		this.skillsService.runSkill(skill, answers).subscribe(r=>{
			console.log(r);
			if(r !== undefined) {
				Toast.makeText("Ran " + skill.name).show();
			} else {
				Toast.makeText("There was an error while running the skill" +skill.name).show();
			}
		});
	}

	refresh() {
		console.log("refreshing skills");
		this.skills = [];
		this.connectionError = false;
		this.loadMask = true;
		this.skillsService.getSkills().subscribe(r=>{
            if(r == undefined) {
            	this.connectionError = true;
            } else {
            	this.skills = r;
            	this.connectionError = false;
            }
            this.loadMask = false;
        });
	}

}
