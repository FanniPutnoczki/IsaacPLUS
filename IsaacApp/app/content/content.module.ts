import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { contentRoutes } from "./content.routes"
import { ContentComponent } from "./content.component";

import { StreamsComponent } from "./streams/streams.component";
import { RoutinesComponent } from "./routines/routines.component";
import { SkillsComponent } from "./skills/skills.component";

import { RoutinesDialog } from "./routines/routines.dialog";

import { SkillsService } from "./skills/skills.service";
import { StreamsService } from "./streams/streams.service";
import { RoutinesService } from "./routines/routines.service";


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        NativeScriptRouterModule.forRoot(contentRoutes)
    ],
    declarations: [
        ContentComponent,
        RoutinesComponent,
        StreamsComponent,
        SkillsComponent
    ],
    providers: [
        SkillsService,
        StreamsService,
        RoutinesService
    ],
    exports: [
        NativeScriptRouterModule
    ]
})

export class ContentModule { }
