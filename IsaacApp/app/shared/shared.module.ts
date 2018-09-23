import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { HttpService } from "./http.service";
import { ConfigService } from "./config.service";
import { ActionBarComponent } from "./action.bar.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    bootstrap: [],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule
    ],
    declarations: [
        ActionBarComponent
    ],
    providers: [
        HttpService,
        ConfigService
    ],
    exports: [
        ActionBarComponent
    ]
})

export class SharedModule { }
