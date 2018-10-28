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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGtEQUFtRTtBQUNuRSxnRUFBZ0Y7QUFDaEYsc0RBQXVFO0FBRXZFLCtDQUE2QztBQUM3QyxtREFBaUQ7QUFDakQsK0RBQTREO0FBRTVELG1FQUFnRTtBQUNoRSxxREFBbUQ7QUFFbkQsb0RBQXFFO0FBZ0NyRTtJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQTlCeEIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiw2QkFBc0I7Z0JBQ3RCLDBDQUE0QjtnQkFDNUIsK0JBQXVCO2dCQUN2QixpQ0FBd0I7YUFDM0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YseUNBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLHdCQUFVO2FBQ2I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsOEJBQWE7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix5Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsd0JBQVU7YUFDYjtZQUNELGVBQWUsRUFBRTtnQkFDYix3QkFBVTtnQkFDVixxQ0FBZ0I7YUFDbkI7U0FDSixDQUFDO09BRVcsWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwiLi9odHRwLnNlcnZpY2VcIjtcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi9jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vYWN0aW9uLmJhci5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgRGF0ZVBpY2tlckRpYWxvZyB9IGZyb20gXCIuL2RpYWxvZ3MvZGF0ZS5waWNrZXIuZGlhbG9nXCI7XG5pbXBvcnQgeyBMaXN0RGlhbG9nIH0gZnJvbSBcIi4vZGlhbG9ncy9saXN0LmRpYWxvZ1wiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW10sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBY3Rpb25CYXJDb21wb25lbnQsXG4gICAgICAgIERhdGVQaWNrZXJEaWFsb2csXG4gICAgICAgIExpc3REaWFsb2dcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBIdHRwU2VydmljZSxcbiAgICAgICAgQ29uZmlnU2VydmljZVxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIEFjdGlvbkJhckNvbXBvbmVudCxcbiAgICAgICAgRGF0ZVBpY2tlckRpYWxvZyxcbiAgICAgICAgTGlzdERpYWxvZ1xuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIExpc3REaWFsb2csXG4gICAgICAgIERhdGVQaWNrZXJEaWFsb2dcbiAgICBdXG59KVxuXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHsgfVxuIl19