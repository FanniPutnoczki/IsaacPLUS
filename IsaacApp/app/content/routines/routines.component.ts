import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "routines",
    templateUrl: "./content/routines/routines.component.html"
})
export class RoutinesComponent {

	//TODO here refresh only on refresh button press, navigation and on opening, and on new add. no intervals needed 
	private connectionError;
	private routines;
	private loadMask;

    constructor(private routerExtensions: RouterExtensions) {
        this.refresh();
    }

    refresh() {
    	console.info("refreshing routines");
        this.routines = [];
        this.connectionError = false;
    	this.loadMask = false;
    }
    
    addRoutine() {
        console.log("settings button pushed");
        this.routerExtensions.navigate(["/routines", ""], {
            transition: {
                name: "slideLeft",
                duration: 500,
                curve: "linear"
            }
        });
    }

}