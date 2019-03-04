import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SettingsComponent } from "./settings.component";

export const settingsRoutes: Routes = [
    { path: "settings", component: SettingsComponent },
];