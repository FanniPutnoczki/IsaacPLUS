import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HttpService } from "./http.service";
import { ConfigService } from "./config.service";
import { ActionBarComponent } from "./action.bar.component";

import { DatePickerDialog } from "./dialogs/date.picker.dialog";
import { ListDialog } from "./dialogs/list.dialog";

import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    bootstrap: [],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule
    ],
    declarations: [
        ActionBarComponent,
        DatePickerDialog,
        ListDialog
    ],
    providers: [
        HttpService,
        ConfigService
    ],
    exports: [
        NativeScriptRouterModule,
        ActionBarComponent,
        DatePickerDialog,
        ListDialog
    ]
})

export class SharedModule { }
