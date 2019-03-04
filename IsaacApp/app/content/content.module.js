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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250ZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBQ3ZFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsZ0VBQWdGO0FBRWhGLG1EQUFnRDtBQUNoRCx5REFBdUQ7QUFFdkQsaUVBQStEO0FBQy9ELG9FQUFrRTtBQUNsRSw0RUFBeUU7QUFDekUsOERBQTREO0FBRTVELDBEQUF3RDtBQUN4RCw2REFBMkQ7QUFDM0QsZ0VBQThEO0FBNEI5RDtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQXpCekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDBDQUE0QjtnQkFDNUIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLDhCQUFhLENBQUM7YUFDbEQ7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2dCQUNoQixzQ0FBaUI7Z0JBQ2pCLDZDQUFvQjtnQkFDcEIsb0NBQWdCO2dCQUNoQixrQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw4QkFBYTtnQkFDYixnQ0FBYztnQkFDZCxrQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7YUFDM0I7U0FDSixDQUFDO09BRVcsYUFBYSxDQUFJO0lBQUQsb0JBQUM7Q0FBQSxBQUE5QixJQUE4QjtBQUFqQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgY29udGVudFJvdXRlcyB9IGZyb20gXCIuL2NvbnRlbnQucm91dGVzXCJcclxuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gXCIuL2NvbnRlbnQuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBTdHJlYW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vc3RyZWFtcy9zdHJlYW1zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSb3V0aW5lc0NvbXBvbmVudCB9IGZyb20gXCIuL3JvdXRpbmVzL3JvdXRpbmVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSb3V0aW5lc0FkZENvbXBvbmVudCB9IGZyb20gXCIuL3JvdXRpbmVzL3JvdXRpbmVzLmFkZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2tpbGxzQ29tcG9uZW50IH0gZnJvbSBcIi4vc2tpbGxzL3NraWxscy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tIFwiLi9za2lsbHMvc2tpbGxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RyZWFtc1NlcnZpY2UgfSBmcm9tIFwiLi9zdHJlYW1zL3N0cmVhbXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0aW5lc1NlcnZpY2UgfSBmcm9tIFwiLi9yb3V0aW5lcy9yb3V0aW5lcy5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGNvbnRlbnRSb3V0ZXMpXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ29udGVudENvbXBvbmVudCxcclxuICAgICAgICBSb3V0aW5lc0NvbXBvbmVudCxcclxuICAgICAgICBSb3V0aW5lc0FkZENvbXBvbmVudCxcclxuICAgICAgICBTdHJlYW1zQ29tcG9uZW50LFxyXG4gICAgICAgIFNraWxsc0NvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFNraWxsc1NlcnZpY2UsXHJcbiAgICAgICAgU3RyZWFtc1NlcnZpY2UsXHJcbiAgICAgICAgUm91dGluZXNTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxyXG4gICAgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRlbnRNb2R1bGUgeyB9XHJcbiJdfQ==