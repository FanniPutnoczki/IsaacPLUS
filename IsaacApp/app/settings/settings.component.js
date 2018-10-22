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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDJEQUF5RDtBQUN6RCxzREFBK0Q7QUFPL0Q7SUFJQywyQkFDUyxhQUE0QixFQUM1QixnQkFBa0M7UUFEbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUUxQyxJQUFJLENBQUMsRUFBRSxHQUFHO1lBQ1QsTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1lBQ3RDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRTtTQUMxQyxDQUFDO0lBQ0gsQ0FBQztJQUVELDhCQUFFLEdBQUY7UUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUE7SUFDSCxDQUFDO0lBNUJXLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9DQUFvQztTQUNwRCxDQUFDO3lDQU91Qiw4QkFBYTtZQUNWLHlCQUFnQjtPQU4vQixpQkFBaUIsQ0E4QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNraWxsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCB7IFxuXG5cdHByaXZhdGUgdWk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuXHQpIHtcblx0XHR0aGlzLnVpID0ge1xuXHRcdFx0ZG9tYWluOiB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0RG9tYWluKCksXG5cdFx0XHRwYXNzd29yZDogdGhpcy5jb25maWdTZXJ2aWNlLmdldFBhc3N3b3JkKClcblx0XHR9O1xuXHR9XG5cblx0b2soKSB7XG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLnNldFBhc3N3b3JkKHRoaXMudWkucGFzc3dvcmQpO1xuXHRcdHRoaXMuY29uZmlnU2VydmljZS5zZXREb21haW4odGhpcy51aS5kb21haW4pO1xuXHRcdHRoaXMubmF2aWdhdGUoKTtcblx0fVxuXG5cdG5hdmlnYXRlKCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY29udGVudFwiXSwge1xuXHQgICAgICAgIHRyYW5zaXRpb246IHtcblx0XHQgICAgICAgIG5hbWU6IFwic2xpZGVSaWdodFwiLFxuXHRcdCAgICAgICAgZHVyYXRpb246IDUwMCxcblx0XHQgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXG5cdFx0ICAgIH1cblx0XHR9KVxuXHR9XG5cbn1cbiAiXX0=