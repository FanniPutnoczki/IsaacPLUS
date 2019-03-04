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
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
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
    HttpService.prototype.post = function (url, data) {
        var fullUrl = this.configService.getDomain() + "/api/" + url;
        console.log("url: " + fullUrl);
        return this.http.post(fullUrl, data, this.httpOptions)
            .timeout(20000)
            .catch(function (error) {
            console.log(error.message);
            return Observable_1.Observable.of(undefined);
        });
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            config_service_1.ConfigService])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCxtREFBaUQ7QUFDakQsa0NBQWdDO0FBQ2hDLG1DQUFpQztBQUNqQyxxQ0FBbUM7QUFDbkMsOENBQTZDO0FBRzdDO0lBRUkscUJBQ1ksSUFBZ0IsRUFDaEIsYUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQTJCaEMsZ0JBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDO2dCQUNyQixjQUFjLEVBQUcsa0JBQWtCO2FBQ3RDLENBQUM7U0FDTCxDQUFDO0lBOUJNLENBQUM7SUFFVCx5QkFBRyxHQUFILFVBQUksR0FBVztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQzthQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ2QsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQkFBSSxHQUFKLFVBQUssR0FBVyxFQUFFLElBQUk7UUFFbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckQsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNkLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0JRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJUyxpQkFBVTtZQUNELDhCQUFhO09BSi9CLFdBQVcsQ0FxQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5pbXBvcnQgeyByZXF1ZXN0LCBnZXRGaWxlLCBnZXRJbWFnZSwgZ2V0SlNPTiwgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vY29uZmlnLnNlcnZpY2VcIjtcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGltZW91dCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHR0cFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2VcclxuICAgICAgICApIHsgfVxyXG5cclxuICAgIGdldCh1cmw6IHN0cmluZykge1xyXG5cclxuICAgICAgICBsZXQgZnVsbFVybCA9IHRoaXMuY29uZmlnU2VydmljZS5nZXREb21haW4oKSArIFwiL2FwaS9cIiArIHVybDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVybDogXCIgKyBmdWxsVXJsKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChmdWxsVXJsLCB7fSlcclxuICAgICAgICAudGltZW91dCgyMDAwMClcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodW5kZWZpbmVkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0KHVybDogc3RyaW5nLCBkYXRhKSB7XHJcblxyXG4gICAgICAgIGxldCBmdWxsVXJsID0gdGhpcy5jb25maWdTZXJ2aWNlLmdldERvbWFpbigpICsgXCIvYXBpL1wiICsgdXJsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXJsOiBcIiArIGZ1bGxVcmwpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChmdWxsVXJsLCBkYXRhLCB0aGlzLmh0dHBPcHRpb25zKVxyXG4gICAgICAgIC50aW1lb3V0KDIwMDAwKVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZih1bmRlZmluZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbn1cclxuIl19