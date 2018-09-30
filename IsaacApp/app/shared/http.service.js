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
        var fullUrl = this.configService.getDomain() + "/api/" + url;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCxtREFBaUQ7QUFHakQ7SUFFSSxxQkFDWSxJQUFnQixFQUNoQixhQUE0QjtRQUQ1QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ2hDLENBQUM7SUFFVCx5QkFBRyxHQUFILFVBQUksR0FBVztRQUNYLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVPLGdDQUFVLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFmUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBSVMsaUJBQVU7WUFDRCw4QkFBYTtPQUovQixXQUFXLENBaUJ2QjtJQUFELGtCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi9jb25maWcuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgcHJpdmF0ZSBjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlXG4gICAgICAgICkgeyB9XG5cbiAgICBnZXQodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGZ1bGxVcmwgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0RG9tYWluKCkgKyBcIi9hcGkvXCIgKyB1cmw7XG4gICAgICAgIGNvbnNvbGUubG9nKGZ1bGxVcmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChmdWxsVXJsLCB0aGlzLmdldEhlYWRlcnMoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRIZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG59XG4iXX0=