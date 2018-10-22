import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ContentComponent } from "./content.component";

export const contentRoutes: Routes = [
    { path: "content", component: ContentComponent },
];