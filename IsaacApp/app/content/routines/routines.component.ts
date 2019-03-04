import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RoutinesService } from "./routines.service";

@Component({
    selector: "routines",
    templateUrl: "./content/routines/routines.component.html"
})
export class RoutinesComponent {

	//TODO here refresh only on refresh button press, navigation and on opening, and on new add. no intervals needed 
	private connectionError;
	private routines;
	private loadMask;

    constructor(
        private routinesService: RoutinesService,
        private routerExtensions: RouterExtensions) {
        this.refresh();
    }

    refresh() {
    	console.info("refreshing routines");
        this.routines = [];
        this.connectionError = false;
    	this.loadMask = false;
        this.routinesService.getRoutines().subscribe(r=>{
            if(r == undefined) {
                this.connectionError = true;
            } else {
                //console.log(r);
                this.routines = r;
                this.formatRoutines();
                this.connectionError = false;
            }
            this.loadMask = false;
        });
    }

    formatRoutines() {
        for(let r of this.routines) {
            if(r.recurring) {
                let dis = "";
                let week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                for(let i=0; i<7; i++) {
                    if(r.days[i]) {
                        dis += (week[i]+", ");
                    }
                }
                dis = dis.slice(0, -2);
                r.displayDate = dis;
            } else {
                var options = { year: '2-digit', month: 'short', day: 'numeric' };
                r.displayDate = new Date(r.date.year, r.date.month-1, r.date.day).toLocaleDateString('en-US', options);
            }
            
            let t = new Date(0,0,0, r.time.hour, r.time.minute, 0);
            let displayTime = t.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}).split(' ')[0];
            let split = displayTime.split(":");
            r.displayTime = split[0]+":"+split[1];

        }
    }

    deleteRoutine(routine: any) {
        this.routinesService.deleteRoutine(routine._id.$oid).subscribe(r => {
            console.log(r);
            //TODO in case of error refresh and show message
            
        });
        let index = 0;
        for (var i = 0; i < this.routines.length; i++) {
            if(this.routines[i]._id.$oid === routine._id.$oid) {
                index = i;
                break;
            }
        }
        this.routines.splice(index,1);
    }

    editRoutine(routine: any) {
        this.routerExtensions.navigate(["/routines", routine._id.$oid], {
            transition: {
                name: "fade",
                duration: 500,
                curve: "easeIn"
            }
        }); 
    }

    addRoutine() {
        console.log("settings button pushed");
        this.routerExtensions.navigate(["/routines", ""], {
            transition: {
                name: "fade",
                duration: 500,
                curve: "easeIn"
            }
        });
    }

}