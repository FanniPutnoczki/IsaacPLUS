"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var http_client_1 = require("nativescript-angular/http-client");
var content_routes_1 = require("./content.routes");
var content_component_1 = require("./content.component");
var streams_component_1 = require("./streams/streams.component");
var routines_component_1 = require("./routines/routines.component");
var skills_component_1 = require("./skills/skills.component");
var skills_service_1 = require("./skills/skills.service");
var streams_service_1 = require("./streams/streams.service");
var routines_service_1 = require("./routines/routines.service");
var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                http_client_1.NativeScriptHttpClientModule,
                router_1.NativeScriptRouterModule.forRoot(content_routes_1.contentRoutes)
            ],
            declarations: [
                content_component_1.ContentComponent,
                routines_component_1.RoutinesComponent,
                streams_component_1.StreamsComponent,
                skills_component_1.SkillsComponent
            ],
            providers: [
                skills_service_1.SkillsService,
                streams_service_1.StreamsService,
                routines_service_1.RoutinesService
            ],
            exports: [
                router_1.NativeScriptRouterModule
            ]
        })
    ], ContentModule);
    return ContentModule;
}());
exports.ContentModule = ContentModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250ZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsZ0VBQWdGO0FBRWhGLG1EQUFnRDtBQUNoRCx5REFBdUQ7QUFFdkQsaUVBQStEO0FBQy9ELG9FQUFrRTtBQUNsRSw4REFBNEQ7QUFJNUQsMERBQXdEO0FBQ3hELDZEQUEyRDtBQUMzRCxnRUFBOEQ7QUEyQjlEO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBeEJ6QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLDZCQUFzQjtnQkFDdEIsMENBQTRCO2dCQUM1QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsOEJBQWEsQ0FBQzthQUNsRDtZQUNELFlBQVksRUFBRTtnQkFDVixvQ0FBZ0I7Z0JBQ2hCLHNDQUFpQjtnQkFDakIsb0NBQWdCO2dCQUNoQixrQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCxrQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7YUFDM0I7U0FDSixDQUFDO09BRVcsYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbmltcG9ydCB7IGNvbnRlbnRSb3V0ZXMgfSBmcm9tIFwiLi9jb250ZW50LnJvdXRlc1wiXG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGVudC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgU3RyZWFtc0NvbXBvbmVudCB9IGZyb20gXCIuL3N0cmVhbXMvc3RyZWFtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRpbmVzQ29tcG9uZW50IH0gZnJvbSBcIi4vcm91dGluZXMvcm91dGluZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTa2lsbHNDb21wb25lbnQgfSBmcm9tIFwiLi9za2lsbHMvc2tpbGxzLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBSb3V0aW5lc0RpYWxvZyB9IGZyb20gXCIuL3JvdXRpbmVzL3JvdXRpbmVzLmRpYWxvZ1wiO1xuXG5pbXBvcnQgeyBTa2lsbHNTZXJ2aWNlIH0gZnJvbSBcIi4vc2tpbGxzL3NraWxscy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTdHJlYW1zU2VydmljZSB9IGZyb20gXCIuL3N0cmVhbXMvc3RyZWFtcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0aW5lc1NlcnZpY2UgfSBmcm9tIFwiLi9yb3V0aW5lcy9yb3V0aW5lcy5zZXJ2aWNlXCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGNvbnRlbnRSb3V0ZXMpXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ29udGVudENvbXBvbmVudCxcbiAgICAgICAgUm91dGluZXNDb21wb25lbnQsXG4gICAgICAgIFN0cmVhbXNDb21wb25lbnQsXG4gICAgICAgIFNraWxsc0NvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFNraWxsc1NlcnZpY2UsXG4gICAgICAgIFN0cmVhbXNTZXJ2aWNlLFxuICAgICAgICBSb3V0aW5lc1NlcnZpY2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRlbnRNb2R1bGUgeyB9XG4iXX0=