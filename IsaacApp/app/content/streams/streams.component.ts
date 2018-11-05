import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { StreamsService } from "./streams.service";
import { Observable } from 'rxjs';

@Component({
    selector: "streams",
    templateUrl: "./content/streams/streams.component.html"
})
export class StreamsComponent {

	//TODO auto refresh on given intervals
	private streams;
	private connectionError;
	private loadMask;
    private intervalsStarted;

    constructor(
        private streamsService: StreamsService) {
        console.log("const");
        this.connectionError = false;
        this.streams = [];
        this.loadMask = false;
        //this.intervalsStarted = true;
        this.refresh();
    }
    
    refresh() {
        this.stopIntervals();
    	console.info("refreshing streams");
        this.streams = [];
        this.connectionError = false;
    	this.loadMask = true;
        this.streamsService.getStreams().subscribe(r => {
            if(r !== undefined) {
                this.connectionError = false;
                this.loadMask = false;
                this.streams = r
                //console.dir(this.streams);
                for(let stream of this.streams) {
                    this.setData(stream);
                }
                this.startIntervals();
            } else {
                this.loadMask = false; 
                this.connectionError = true;
            }
        });
    }

    setData(stream) {
        this.streamsService.getStreamData(stream).subscribe(r=>{
            if(r == undefined) {
                this.stopIntervals();
                this.connectionError = true;
            } else {
                for (var i = 0; i < r.length; i++) {
                    stream.view[i].data = r[i];
                }
            }
            //console.dir(stream);
        });
    }

    startIntervals() {
        console.log("adding intervals")
        //this.intervalsStarted = true;
        for(let stream of this.streams) {
            stream["interval"] = setInterval(() => {
                this.setData(stream);
            }, stream.refreshRate * 1000);
        }
    }

    stopIntervals() {
        console.log("stopping intervals");
        if(true) {
            for(let stream of this.streams) {
                clearInterval(stream["interval"]);
            }           
        }
    }

    unload() {
        this.stopIntervals();
    }

}