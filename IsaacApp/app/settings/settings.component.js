"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var config_service_1 = require("../shared/config.service");
var router_1 = require("nativescript-angular/router");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(configService, routerExtensions) {
        var _this = this;
        this.configService = configService;
        this.routerExtensions = routerExtensions;
        this.loadMask = true;
        this.ui = {
            domain: '',
            password: ''
        };
        this.configService.getDomain().then(function (d) { _this.ui.domain = d; });
        this.configService.getPassword().then(function (p) { _this.ui.password = p; });
    }
    SettingsComponent.prototype.ok = function () {
        var _this = this;
        this.configService.setDomain(this.ui.domain).then(function (r) {
            _this.configService.setPassword(_this.ui.password).then(function (s) {
                _this.navigate();
            });
        });
    };
    SettingsComponent.prototype.navigate = function () {
        this.routerExtensions.navigate(["/skills"], {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDJEQUF5RDtBQUN6RCxzREFBK0Q7QUFPL0Q7SUFLQywyQkFDUyxhQUE0QixFQUM1QixnQkFBa0M7UUFGM0MsaUJBV0M7UUFWUSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUc7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFNLEtBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFNLEtBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCw4QkFBRSxHQUFGO1FBQUEsaUJBTUM7UUFMQSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDbEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2dCQUN0RCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JDLFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUE7SUFDSCxDQUFDO0lBbENXLGlCQUFpQjtRQUw3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9DQUFvQztTQUNwRCxDQUFDO3lDQVF1Qiw4QkFBYTtZQUNWLHlCQUFnQjtPQVAvQixpQkFBaUIsQ0FvQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNraWxsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZXR0aW5nc0NvbXBvbmVudCB7IFxuXG5cdHByaXZhdGUgbG9hZE1hc2s7XG5cdHByaXZhdGUgdWk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuXHQpIHtcblx0XHR0aGlzLmxvYWRNYXNrID0gdHJ1ZTtcblx0XHR0aGlzLnVpID0ge1xuXHRcdFx0ZG9tYWluOiAnJyxcblx0XHRcdHBhc3N3b3JkOiAnJ1xuXHRcdH07XG5cdFx0dGhpcy5jb25maWdTZXJ2aWNlLmdldERvbWFpbigpLnRoZW4oZCA9PiB7IHRoaXMudWkuZG9tYWluID0gZCB9KTtcblx0XHR0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0UGFzc3dvcmQoKS50aGVuKHAgPT4geyB0aGlzLnVpLnBhc3N3b3JkID0gcCB9KTtcblx0fVxuXG5cdG9rKCkge1xuXHRcdHRoaXMuY29uZmlnU2VydmljZS5zZXREb21haW4odGhpcy51aS5kb21haW4pLnRoZW4ociA9PiB7XG5cdFx0XHR0aGlzLmNvbmZpZ1NlcnZpY2Uuc2V0UGFzc3dvcmQodGhpcy51aS5wYXNzd29yZCkudGhlbihzID0+IHtcblx0XHRcdFx0dGhpcy5uYXZpZ2F0ZSgpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRuYXZpZ2F0ZSgpIHtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3NraWxsc1wiXSwge1xuXHQgICAgICAgIHRyYW5zaXRpb246IHtcblx0XHQgICAgICAgIG5hbWU6IFwic2xpZGVSaWdodFwiLFxuXHRcdCAgICAgICAgZHVyYXRpb246IDUwMCxcblx0XHQgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXG5cdFx0ICAgIH1cblx0XHR9KVxuXHR9XG5cbn1cbiAiXX0=