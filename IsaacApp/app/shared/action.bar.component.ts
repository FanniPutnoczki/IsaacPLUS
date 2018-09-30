import { Component, OnInit, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "action-bar",
    moduleId: module.id,
    templateUrl: "./action.bar.component.html"
})
export class ActionBarComponent {

	constructor(private routerExtensions: RouterExtensions) {}

	settings() {
		this.routerExtensions.navigate(["/settings"], {
	        transition: {
		        name: "slideLeft",
		        duration: 500,
		        curve: "linear"
		    }
		});
	}
}