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
var routines_add_component_1 = require("./routines/routines.add.component");
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
                routines_add_component_1.RoutinesAddComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250ZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsZ0VBQWdGO0FBRWhGLG1EQUFnRDtBQUNoRCx5REFBdUQ7QUFFdkQsaUVBQStEO0FBQy9ELG9FQUFrRTtBQUNsRSw0RUFBeUU7QUFDekUsOERBQTREO0FBRTVELDBEQUF3RDtBQUN4RCw2REFBMkQ7QUFDM0QsZ0VBQThEO0FBNEI5RDtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQXpCekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDBDQUE0QjtnQkFDNUIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLDhCQUFhLENBQUM7YUFDbEQ7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2dCQUNoQixzQ0FBaUI7Z0JBQ2pCLDZDQUFvQjtnQkFDcEIsb0NBQWdCO2dCQUNoQixrQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCxrQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7YUFDM0I7U0FDSixDQUFDO09BRVcsYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbmltcG9ydCB7IGNvbnRlbnRSb3V0ZXMgfSBmcm9tIFwiLi9jb250ZW50LnJvdXRlc1wiXG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vY29udGVudC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgU3RyZWFtc0NvbXBvbmVudCB9IGZyb20gXCIuL3N0cmVhbXMvc3RyZWFtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRpbmVzQ29tcG9uZW50IH0gZnJvbSBcIi4vcm91dGluZXMvcm91dGluZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSb3V0aW5lc0FkZENvbXBvbmVudCB9IGZyb20gXCIuL3JvdXRpbmVzL3JvdXRpbmVzLmFkZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNraWxsc0NvbXBvbmVudCB9IGZyb20gXCIuL3NraWxscy9za2lsbHMuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tIFwiLi9za2lsbHMvc2tpbGxzLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN0cmVhbXNTZXJ2aWNlIH0gZnJvbSBcIi4vc3RyZWFtcy9zdHJlYW1zLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRpbmVzU2VydmljZSB9IGZyb20gXCIuL3JvdXRpbmVzL3JvdXRpbmVzLnNlcnZpY2VcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoY29udGVudFJvdXRlcylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBDb250ZW50Q29tcG9uZW50LFxuICAgICAgICBSb3V0aW5lc0NvbXBvbmVudCxcbiAgICAgICAgUm91dGluZXNBZGRDb21wb25lbnQsXG4gICAgICAgIFN0cmVhbXNDb21wb25lbnQsXG4gICAgICAgIFNraWxsc0NvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFNraWxsc1NlcnZpY2UsXG4gICAgICAgIFN0cmVhbXNTZXJ2aWNlLFxuICAgICAgICBSb3V0aW5lc1NlcnZpY2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIENvbnRlbnRNb2R1bGUgeyB9XG4iXX0=