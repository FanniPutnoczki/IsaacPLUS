"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var config_service_1 = require("./config.service");
var HttpService = /** @class */ (function () {
    function HttpService(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    HttpService.prototype.get = function (url) {
        var fullUrl = "http://" + this.configService.getHost() + ":" + this.configService.getPort() + "/api/" + url;
        console.log(fullUrl);
        return this.http.get(fullUrl, this.getHeaders());
    };
    HttpService.prototype.getHeaders = function () {
        return {};
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            config_service_1.ConfigService])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCxtREFBaUQ7QUFHakQ7SUFFSSxxQkFDWSxJQUFnQixFQUNoQixhQUE0QjtRQUQ1QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ2hDLENBQUM7SUFFVCx5QkFBRyxHQUFILFVBQUksR0FBVztRQUNYLElBQUksT0FBTyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDNUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTyxnQ0FBVSxHQUFsQjtRQUNJLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBZlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUlTLGlCQUFVO1lBQ0QsOEJBQWE7T0FKL0IsV0FBVyxDQWlCdkI7SUFBRCxrQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vY29uZmlnLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZVxuICAgICAgICApIHsgfVxuXG4gICAgZ2V0KHVybDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmdWxsVXJsID0gXCJodHRwOi8vXCIgKyB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0SG9zdCgpICsgXCI6XCIgKyB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0UG9ydCgpICsgXCIvYXBpL1wiICsgdXJsO1xuICAgICAgICBjb25zb2xlLmxvZyhmdWxsVXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoZnVsbFVybCwgdGhpcy5nZXRIZWFkZXJzKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxufVxuIl19