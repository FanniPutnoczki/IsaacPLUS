import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { SkillsComponent } from "./skills.component";

export const skillRoutes: Routes = [
    { path: "skills", component: SkillsComponent },
];