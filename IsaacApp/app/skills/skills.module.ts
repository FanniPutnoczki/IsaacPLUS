import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SkillsComponent } from './skills.component';
import { SkillsService } from './skills.service';
import { skillRoutes } from './skills.routes'
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    bootstrap: [],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        NativeScriptRouterModule.forRoot(skillRoutes),
        SharedModule
    ],
    declarations: [
        SkillsComponent
    ],
    providers: [
        SkillsService
    ],
    exports: [
        NativeScriptRouterModule
    ]
})

export class SkillsModule { }
