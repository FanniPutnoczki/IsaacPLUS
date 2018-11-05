import { Injectable } from "@angular/core";
import { HttpService } from "../../shared/http.service";

@Injectable()
export class StreamsService  {

    private getStreamsUrl: string = "streams";
    private getStreamDataUrl: string = "streams/";
    //private disableSkillUrl: string = "skills/disable/";

    constructor(private httpService: HttpService) { }

    getStreams(){
        return this.httpService.get(this.getStreamsUrl);
    }
    
    getStreamData(stream) {
        return this.httpService.get(this.getStreamDataUrl + stream.id);
    }
}
