"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var http_client_1 = require("nativescript-angular/http-client");
var http_service_1 = require("./http.service");
var config_service_1 = require("./config.service");
var action_bar_component_1 = require("./action.bar.component");
var forms_1 = require("nativescript-angular/forms");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            bootstrap: [],
            imports: [
                nativescript_module_1.NativeScriptModule,
                http_1.NativeScriptHttpModule,
                http_client_1.NativeScriptHttpClientModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                action_bar_component_1.ActionBarComponent
            ],
            providers: [
                http_service_1.HttpService,
                config_service_1.ConfigService
            ],
            exports: [
                action_bar_component_1.ActionBarComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxnRUFBZ0Y7QUFFaEYsK0NBQTZDO0FBQzdDLG1EQUFpRDtBQUNqRCwrREFBNEQ7QUFDNUQsb0RBQXFFO0FBc0JyRTtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQXBCeEIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw2QkFBc0I7Z0JBQ3RCLDBDQUE0QjtnQkFDNUIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHlDQUFrQjthQUNyQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx5Q0FBa0I7YUFDckI7U0FDSixDQUFDO09BRVcsWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi9jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vYWN0aW9uLmJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBY3Rpb25CYXJDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBIdHRwU2VydmljZSxcbiAgICAgICAgQ29uZmlnU2VydmljZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBBY3Rpb25CYXJDb21wb25lbnRcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIl19