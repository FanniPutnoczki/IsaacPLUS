"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var config_service_1 = require("./config.service");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/timeout");
var Observable_1 = require("rxjs/Observable");
var HttpService = /** @class */ (function () {
    function HttpService(http, configService) {
        this.http = http;
        this.configService = configService;
    }
    HttpService.prototype.get = function (url) {
        var fullUrl = this.configService.getDomain() + "/api/" + url;
        console.log("url: " + fullUrl);
        return this.http.get(fullUrl, {})
            .timeout(20000)
            .catch(function (error) {
            console.log(error.message);
            return Observable_1.Observable.of(undefined);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCxtREFBaUQ7QUFDakQsa0NBQWdDO0FBQ2hDLG1DQUFpQztBQUNqQyxxQ0FBbUM7QUFDbkMsOENBQTZDO0FBRzdDO0lBRUkscUJBQ1ksSUFBZ0IsRUFDaEIsYUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNoQyxDQUFDO0lBRVQseUJBQUcsR0FBSCxVQUFJLEdBQVc7UUFFWCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7YUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNkLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sZ0NBQVUsR0FBbEI7UUFDSSxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQXJCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBSVMsaUJBQVU7WUFDRCw4QkFBYTtPQUovQixXQUFXLENBdUJ2QjtJQUFELGtCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL2NvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RpbWVvdXQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2VcbiAgICAgICAgKSB7IH1cblxuICAgIGdldCh1cmw6IHN0cmluZykge1xuXG4gICAgICAgIGxldCBmdWxsVXJsID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldERvbWFpbigpICsgXCIvYXBpL1wiICsgdXJsO1xuICAgICAgICBjb25zb2xlLmxvZyhcInVybDogXCIgKyBmdWxsVXJsKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoZnVsbFVybCwge30pXG4gICAgICAgIC50aW1lb3V0KDIwMDAwKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEhlYWRlcnMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbn1cbiJdfQ==