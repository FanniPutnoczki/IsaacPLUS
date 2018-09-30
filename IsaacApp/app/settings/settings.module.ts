import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SettingsComponent } from './settings.component';
import { settingsRoutes } from './settings.routes'
import { NativeScriptFormsModule } from "nativescript-angular/forms";

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
        NativeScriptRouterModule.forRoot(settingsRoutes),
        SharedModule
    ],
    declarations: [
        SettingsComponent
    ],
    providers: [
    ],
    exports: [
        NativeScriptRouterModule
    ]
})

export class SettingsModule { }
