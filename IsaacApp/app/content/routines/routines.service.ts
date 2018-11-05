import { Injectable } from "@angular/core";
import { HttpService } from "../../shared/http.service";

@Injectable()
export class RoutinesService {

    private getRoutinesUrl: string = "routines";
    private getRoutineUrl: string = "routines/";
    private addRoutineUrl: string = "routines/add";
    private deleteRoutineUrl: string = "routines/delete/";
    

    constructor(private httpService: HttpService) { }

    getRoutine(id: string) {
        return this.httpService.get(this.getRoutineUrl+id);
    }

    deleteRoutine(id: string) {
        return this.httpService.get(this.deleteRoutineUrl+id);
    }

    getRoutines(){
        return this.httpService.get(this.getRoutinesUrl);
    }

    addRoutine(routine: any) {
        return this.httpService.post(this.addRoutineUrl, routine);
    }

}
