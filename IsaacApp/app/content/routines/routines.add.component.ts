import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { SkillsService } from "../skills/skills.service";
import { ListDialog } from "../../shared/dialogs/list.dialog";
import { DatePickerDialog } from "../../shared/dialogs/date.picker.dialog";
import { TimePicker } from "tns-core-modules/ui/time-picker";
import { RoutinesService } from "./routines.service";
import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

@Component({
    selector: "routines-add",
    templateUrl: "./content/routines/routines.add.component.html"
})
export class RoutinesAddComponent {

	private skills;
	private routine;
	private days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
	private dayDisplay;
	private timePicker;
    private id;
    private skillNameMap;

    constructor(
        private pageRoute: PageRoute,
    	private modalService: ModalDialogService,
    	private skillsService: SkillsService,
    	private routinesService: RoutinesService,
        private viewContainerRef: ViewContainerRef,
        private routerExtensions: RouterExtensions) {

        this.getSkills();
        this.skillNameMap = {};

        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => { this.id = params["id"]; console.log(this.id);});

    	let d = new Date();
    	this.routine = {
        	days: [false,false,false,false,false,false,false],
        	skills: [],
        	date: {
        		day: d.getDate(),
        		month: d.getMonth()+1,
        		year: d.getFullYear()
        	},
        	name: '',
        	recurring: false,
        	message: '',
        	enabled: true
        };
        this.setFormattedDate();
        
        if(this.id) {
            this.routinesService.getRoutine(this.id).subscribe(r => {
                if(r) {
                    console.log(r);
                    this.routine = r;
                    this.setFormattedDate();
                    this.setTime();
                } else {
                    //TODO handle error
                }
            });
        }

    }

    setFormattedDate() {
		var options = { year: '2-digit', month: 'short', day: 'numeric' };
        this.dayDisplay = new Date(this.routine.date.year, this.routine.date.month-1, this.routine.date.day).toLocaleDateString('en-US', options);
        console.log(this.dayDisplay);
    }

    getSkills() {

    	this.skillsService.getSkills().subscribe(r => {
        	if(r) {
        		this.skills = r;
                for(let skill of r) {
                    this.skillNameMap[skill.name] = skill.full_name;
                }
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

    pickDate() {
    	this.modalService.showModal(DatePickerDialog, {
    		viewContainerRef: this.viewContainerRef,
    		context: {
    			date: this.routine.date
    		}
    	}).then(r => {
    		if(r.result) {
    			console.log(r.date);
    			this.routine.date = r.date;
    			this.setFormattedDate();
    		}
    	});
    }

    pickSkill() {
    	this.modalService.showModal(ListDialog, {
    		viewContainerRef: this.viewContainerRef,
    		context: {
    			items: this.skills,
    			key: "full_name",
    			searchBar: true
    		}
    	}).then(r => {
    		
    		if(r.result) {
    			this.routine.skills.push(r.data.name);
    		}

    	});
    }    

    onPickerLoaded(args) {
        this.timePicker = <TimePicker>args.object;
        this.setTime();
    }

    cancel() {
        this.routerExtensions.navigate(["/content"], {
            transition: {
                name: "fade",
                duration: 500,
                curve: "linear"
            }
        });
    }

    setTime() {
        if(this.timePicker) {
            this.timePicker.hour = this.routine.time.hour;
            this.timePicker.minute = this.routine.time.minute;
        }
    }

    done() {

    	this.routine.time = {
    		hour: this.timePicker.hour,
    		minute: this.timePicker.minute
    	};

    	//TODO validate
    	let valid = true;

    	if(valid) {
    		console.log(this.routine);
    		this.routinesService.addRoutine(this.routine).subscribe(r => {
    			this.routerExtensions.navigate(["/content"], {
		            transition: {
		                name: "fade",
		                duration: 500,
		                curve: "linear"
		            }
		        });
    		});
    	}
    }
    
}