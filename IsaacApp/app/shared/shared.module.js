"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_1 = require("nativescript-angular/http");
var http_client_1 = require("nativescript-angular/http-client");
var router_1 = require("nativescript-angular/router");
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
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule
            ],
            declarations: [
                action_bar_component_1.ActionBarComponent
            ],
            providers: [
                http_service_1.HttpService,
                config_service_1.ConfigService
            ],
            exports: [
                router_1.NativeScriptRouterModule,
                action_bar_component_1.ActionBarComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxnRUFBZ0Y7QUFDaEYsc0RBQXVFO0FBRXZFLCtDQUE2QztBQUM3QyxtREFBaUQ7QUFDakQsK0RBQTREO0FBQzVELG9EQUFxRTtBQXdCckU7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUF0QnhCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRSxFQUFFO1lBQ2IsT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsNkJBQXNCO2dCQUN0QiwwQ0FBNEI7Z0JBQzVCLCtCQUF1QjtnQkFDdkIsaUNBQXdCO2FBQzNCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHlDQUFrQjthQUNyQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCw4QkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHlDQUFrQjthQUNyQjtTQUNKLENBQUM7T0FFVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwLWNsaWVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gXCIuL2h0dHAuc2VydmljZVwiO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL2NvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tIFwiLi9hY3Rpb24uYmFyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQWN0aW9uQmFyQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSHR0cFNlcnZpY2UsXG4gICAgICAgIENvbmZpZ1NlcnZpY2VcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBBY3Rpb25CYXJDb21wb25lbnRcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIl19