import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "streams",
    templateUrl: "./content/streams/streams.component.html"
})
export class StreamsComponent {

	//TODO auto refresh on given intervals
	private streams;
	private connectionError;
	private loadMask;

    constructor() {
        this.connectionError = false;
        this.streams = [];
        this.loadMask = false;
        this.refresh();
    }
    
    refresh() {
    	console.info("refreshing streams");
        this.streams = [];
        this.connectionError = false;
    	this.loadMask = true;
    }

}