import { Routes } from "@angular/router";

import { ContentComponent } from "./content.component";
import { RoutinesAddComponent } from "./routines/routines.add.component";

export const contentRoutes: Routes = [
    { path: "content", component: ContentComponent },
    { path: "routines/:id", component: RoutinesAddComponent }
];