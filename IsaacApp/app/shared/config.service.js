"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ConfigService = /** @class */ (function () {
    //TODO not mocking data
    function ConfigService() {
    }
    ConfigService.prototype.getPort = function () {
        return 5000;
    };
    ConfigService.prototype.setPort = function () { };
    ConfigService.prototype.getHost = function () {
        return "10.0.2.2";
    };
    ConfigService.prototype.setHost = function () { };
    ConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQU0zQztJQUVJLHVCQUF1QjtJQUV2QjtJQUFnQixDQUFDO0lBRWpCLCtCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwrQkFBTyxHQUFQLGNBQVcsQ0FBQztJQUVaLCtCQUFPLEdBQVA7UUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwrQkFBTyxHQUFQLGNBQVcsQ0FBQztJQWhCSCxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQWtCekI7SUFBRCxvQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICAgIGdldFN0cmluZyxcbiAgICBzZXRTdHJpbmdcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG5cbiAgICAvL1RPRE8gbm90IG1vY2tpbmcgZGF0YVxuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIGdldFBvcnQoKSB7XG4gICAgICAgIHJldHVybiA1MDAwO1xuICAgIH1cblxuICAgIHNldFBvcnQoKSB7fVxuXG4gICAgZ2V0SG9zdCgpIHtcbiAgICAgICAgcmV0dXJuIFwiMTAuMC4yLjJcIjtcbiAgICB9XG5cbiAgICBzZXRIb3N0KCkge31cblxufVxuIl19