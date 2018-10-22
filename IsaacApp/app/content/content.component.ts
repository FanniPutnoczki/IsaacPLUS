import { Component, ViewChild } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import * as Toast from 'nativescript-toast';

import { SkillsComponent } from "./skills/skills.component";
import { StreamsComponent } from "./streams/streams.component";
import { RoutinesComponent } from "./routines/routines.component";


@Component({
    selector: "content",
    templateUrl: "./content/content.component.html"
})
export class ContentComponent {

	@ViewChild(SkillsComponent) skillsComponent: SkillsComponent;
	@ViewChild(StreamsComponent) streamsComponent: StreamsComponent;
	@ViewChild(RoutinesComponent) routinesComponent: RoutinesComponent;


    constructor(private routerExtensions: RouterExtensions) {
    	console.log("content constructor");
    }

/*    onConnectionError(event) {
    	console.log("onConnectionError");
    	this.connError = true;
    }*/

    settings() {
    	console.log("settings button pushed");
		this.routerExtensions.navigate(["/settings"], {
	        transition: {
		        name: "slideLeft",
		        duration: 500,
		        curve: "linear"
		    }
		});
	}

	refresh() {
		console.log("refresh button pushed");
		Toast.makeText("Refreshing").show();
		this.skillsComponent.refresh();
		this.streamsComponent.refresh();
		this.routinesComponent.refresh();
	}
    
}