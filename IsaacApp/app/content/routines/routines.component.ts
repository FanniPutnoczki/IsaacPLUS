import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "routines",
    templateUrl: "./content/routines/routines.component.html"
})
export class RoutinesComponent {

	//TODO here refresh only on refresh button press, navigation and on opening, and on new add. no intervals needed 
	private connectionError;
	private routines;
	private loadMask;

    constructor() {
        this.refresh();
    }

    refresh() {
    	console.info("refreshing routines");
        this.routines = [];
        this.connectionError = false;
    	this.loadMask = true;
    }
    
}