import { Component, ViewChild } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import * as Toast from 'nativescript-toast';
import { Page } from 'tns-core-modules/ui/page';

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


    constructor(
    	private routerExtensions: RouterExtensions,
    	private page: Page) {
    	this.page.on('unloaded ', (data) => {
    		this.streamsComponent.unload();
	    });
    }

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