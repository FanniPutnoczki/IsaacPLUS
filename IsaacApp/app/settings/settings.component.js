"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_service_1 = require("../shared/config.service");
var router_1 = require("nativescript-angular/router");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(configService, routerExtensions) {
        this.configService = configService;
        this.routerExtensions = routerExtensions;
        this.ui = {
            domain: this.configService.getDomain(),
            password: this.configService.getPassword()
        };
    }
    SettingsComponent.prototype.ok = function () {
        this.configService.setPassword(this.ui.password);
        this.configService.setDomain(this.ui.domain);
        this.navigate();
    };
    SettingsComponent.prototype.navigate = function () {
        this.routerExtensions.navigate(["/content"], {
            transition: {
                name: "slideRight",
                duration: 500,
                curve: "linear"
            }
        });
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: "skills",
            templateUrl: "./settings/settings.component.html",
        }),
        __metadata("design:paramtypes", [config_service_1.ConfigService,
            router_1.RouterExtensions])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDJEQUF5RDtBQUN6RCxzREFBK0Q7QUFPL0Q7SUFJQywyQkFDUyxhQUE0QixFQUM1QixnQkFBa0M7UUFEbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUUxQyxJQUFJLENBQUMsRUFBRSxHQUFHO1lBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQ3RDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtTQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUVELDhCQUFFLEdBQUY7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUE7SUFDSCxDQUFDO0lBNUJXLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9DQUFvQztTQUNwRCxDQUFDO3lDQU91Qiw4QkFBYTtZQUNWLHlCQUFnQjtPQU4vQixpQkFBaUIsQ0E4QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9jb25maWcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJza2lsbHNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCB7IFxyXG5cclxuXHRwcml2YXRlIHVpO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSxcclxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xyXG5cdCkge1xyXG5cdFx0dGhpcy51aSA9IHtcclxuXHRcdFx0ZG9tYWluOiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0RG9tYWluKCksXHJcblx0XHRcdHBhc3N3b3JkOiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0UGFzc3dvcmQoKVxyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdG9rKCkge1xyXG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLnNldFBhc3N3b3JkKHRoaXMudWkucGFzc3dvcmQpO1xyXG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLnNldERvbWFpbih0aGlzLnVpLmRvbWFpbik7XHJcblx0XHR0aGlzLm5hdmlnYXRlKCk7XHJcblx0fVxyXG5cclxuXHRuYXZpZ2F0ZSgpIHtcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY29udGVudFwiXSwge1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjoge1xyXG5cdFx0ICAgICAgICBuYW1lOiBcInNsaWRlUmlnaHRcIixcclxuXHRcdCAgICAgICAgZHVyYXRpb246IDUwMCxcclxuXHRcdCAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuXHRcdCAgICB9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcbn1cclxuICJdfQ==