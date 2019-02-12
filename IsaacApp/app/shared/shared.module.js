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
var date_picker_dialog_1 = require("./dialogs/date.picker.dialog");
var list_dialog_1 = require("./dialogs/list.dialog");
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
                action_bar_component_1.ActionBarComponent,
                date_picker_dialog_1.DatePickerDialog,
                list_dialog_1.ListDialog
            ],
            providers: [
                http_service_1.HttpService,
                config_service_1.ConfigService
            ],
            exports: [
                router_1.NativeScriptRouterModule,
                action_bar_component_1.ActionBarComponent,
                date_picker_dialog_1.DatePickerDialog,
                list_dialog_1.ListDialog
            ],
            entryComponents: [
                list_dialog_1.ListDialog,
                date_picker_dialog_1.DatePickerDialog
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxnRUFBZ0Y7QUFDaEYsc0RBQXVFO0FBRXZFLCtDQUE2QztBQUM3QyxtREFBaUQ7QUFDakQsK0RBQTREO0FBRTVELG1FQUFnRTtBQUNoRSxxREFBbUQ7QUFFbkQsb0RBQXFFO0FBZ0NyRTtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQTlCeEIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw2QkFBc0I7Z0JBQ3RCLDBDQUE0QjtnQkFDNUIsK0JBQXVCO2dCQUN2QixpQ0FBd0I7YUFDM0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YseUNBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLHdCQUFVO2FBQ2I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix5Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsd0JBQVU7YUFDYjtZQUNELGVBQWUsRUFBRTtnQkFDYix3QkFBVTtnQkFDVixxQ0FBZ0I7YUFDbkI7U0FDSixDQUFDO09BRVcsWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL2NvbmZpZy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFjdGlvbkJhckNvbXBvbmVudCB9IGZyb20gXCIuL2FjdGlvbi5iYXIuY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBEYXRlUGlja2VyRGlhbG9nIH0gZnJvbSBcIi4vZGlhbG9ncy9kYXRlLnBpY2tlci5kaWFsb2dcIjtcclxuaW1wb3J0IHsgTGlzdERpYWxvZyB9IGZyb20gXCIuL2RpYWxvZ3MvbGlzdC5kaWFsb2dcIjtcclxuXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFjdGlvbkJhckNvbXBvbmVudCxcclxuICAgICAgICBEYXRlUGlja2VyRGlhbG9nLFxyXG4gICAgICAgIExpc3REaWFsb2dcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBIdHRwU2VydmljZSxcclxuICAgICAgICBDb25maWdTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgZXhwb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcclxuICAgICAgICBBY3Rpb25CYXJDb21wb25lbnQsXHJcbiAgICAgICAgRGF0ZVBpY2tlckRpYWxvZyxcclxuICAgICAgICBMaXN0RGlhbG9nXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgTGlzdERpYWxvZyxcclxuICAgICAgICBEYXRlUGlja2VyRGlhbG9nXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxyXG4iXX0=