"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var skills_component_1 = require("./skills.component");
var skills_service_1 = require("./skills.service");
var skills_routes_1 = require("./skills.routes");
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
var http_1 = require("nativescript-angular/http");
var http_client_1 = require("nativescript-angular/http-client");
var shared_module_1 = require("../shared/shared.module");
var SkillsModule = /** @class */ (function () {
    function SkillsModule() {
    }
    SkillsModule = __decorate([
        core_1.NgModule({
            bootstrap: [],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                http_client_1.NativeScriptHttpClientModule,
                router_1.NativeScriptRouterModule.forRoot(skills_routes_1.skillRoutes),
                shared_module_1.SharedModule
            ],
            declarations: [
                skills_component_1.SkillsComponent
            ],
            providers: [
                skills_service_1.SkillsService
            ],
            exports: [
                router_1.NativeScriptRouterModule
            ]
        })
    ], SkillsModule);
    return SkillsModule;
}());
exports.SkillsModule = SkillsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUV2RSx1REFBcUQ7QUFDckQsbURBQWlEO0FBQ2pELGlEQUE2QztBQUM3QywyRUFBMkU7QUFDM0Usb0RBQXFFO0FBRXJFLDZFQUE2RTtBQUM3RSxrREFBbUU7QUFDbkUsZ0VBQWdGO0FBQ2hGLHlEQUF1RDtBQXVCdkQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFyQnhCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDBDQUE0QjtnQkFDNUIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLDJCQUFXLENBQUM7Z0JBQzdDLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysa0NBQWU7YUFDbEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2FBQzNCO1NBQ0osQ0FBQztPQUVXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBTa2lsbHNDb21wb25lbnQgfSBmcm9tICcuL3NraWxscy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gJy4vc2tpbGxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgc2tpbGxSb3V0ZXMgfSBmcm9tICcuL3NraWxscy5yb3V0ZXMnXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW10sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChza2lsbFJvdXRlcyksXG4gICAgICAgIFNoYXJlZE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFNraWxsc0NvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFNraWxsc1NlcnZpY2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXG4gICAgXVxufSlcblxuZXhwb3J0IGNsYXNzIFNraWxsc01vZHVsZSB7IH1cbiJdfQ==