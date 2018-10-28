import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { SkillsService } from "../skills/skills.service";
import { ListDialog } from "../../shared/dialogs/list.dialog";
import { DatePickerDialog } from "../../shared/dialogs/date.picker.dialog";


@Component({
    selector: "routines-add",
    templateUrl: "./content/routines/routines.add.component.html"
})
export class RoutinesAddComponent {

	private isNew
	private skills;
	private routine;
	private days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    constructor(
    	private modalService: ModalDialogService,
    	private skillsService: SkillsService,
        private viewContainerRef: ViewContainerRef,
        private routerExtensions: RouterExtensions) {

        this.getSkills();

        this.isNew = true;

        if(isNew) {
        	this.routine = {
	        	days: [false,false,false,false,false,false,false],
	        	skills: []
	        };
        } else {
        	//TODO get routine data based on id from route parameter
        }
    
    }

    getSkills() {

    	this.skillsService.getSkills().subscribe(r => {
        	if(r) {
        		this.skills = r;
        	} else {
        		this.skills = [];
        	}
        });

    }

    removeSkill(s: string) {
    	let newSkills = [];
    	for(let skill of this.routine.skills) {
    		if(skill !== s) {
    			newSkills.push(skill);
    		}
    	}
    	this.routine.skills = newSkills;
    }

    done() {
    	//TODO validate
    	let valid = true;
    	if(valid) {
    		this.routerExtensions.navigate(["/content"], {
	            transition: {
	                name: "slideLeft",
	                duration: 500,
	                curve: "linear"
	            }
	        });
    	}
    }

    pickDate() {
    	this.modalService.showModal(DatePickerDialog, {
    		viewContainerRef: this.viewContainerRef,
    		context: {

    		}
    	}).then(r => {
    		if(r.result) {

    		}
    	});
    }

    pickSkill() {
    	this.modalService.showModal(ListDialog, {
    		viewContainerRef: this.viewContainerRef,
    		context: {
    			items: this.skills,
    			key: "name"
    		}
    	}).then(r => {
    		
    		if(r.result) {
    			this.routine.skills.push(r.name);
    		}

    	});
    }    

    onTimeChanged(event) {

    }

    cancel() {
        this.routerExtensions.navigate(["/content"], {
            transition: {
                name: "slideLeft",
                duration: 500,
                curve: "linear"
            }
        });
    }
    
}