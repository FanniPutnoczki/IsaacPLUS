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
                router_1.NativeScriptRouterModule.forRoot(skills_routes_1.skillRoutes)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLHNEQUF1RTtBQUV2RSx1REFBcUQ7QUFDckQsbURBQWlEO0FBQ2pELGlEQUE2QztBQUM3QywyRUFBMkU7QUFDM0Usb0RBQXFFO0FBRXJFLDZFQUE2RTtBQUM3RSxrREFBbUU7QUFDbkUsZ0VBQWdGO0FBc0JoRjtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQXBCeEIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLDZCQUFzQjtnQkFDdEIsMENBQTRCO2dCQUM1QixpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsMkJBQVcsQ0FBQzthQUNoRDtZQUNELFlBQVksRUFBRTtnQkFDVixrQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7YUFDM0I7U0FDSixDQUFDO09BRVcsWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFNraWxsc0NvbXBvbmVudCB9IGZyb20gJy4vc2tpbGxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTa2lsbHNTZXJ2aWNlIH0gZnJvbSAnLi9za2lsbHMuc2VydmljZSc7XG5pbXBvcnQgeyBza2lsbFJvdXRlcyB9IGZyb20gJy4vc2tpbGxzLnJvdXRlcydcbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW10sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChza2lsbFJvdXRlcylcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBTa2lsbHNDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBTa2lsbHNTZXJ2aWNlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBTa2lsbHNNb2R1bGUgeyB9XG4iXX0=