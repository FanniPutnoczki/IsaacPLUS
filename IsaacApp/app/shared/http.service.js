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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCxtREFBaUQ7QUFDakQsa0NBQWdDO0FBQ2hDLG1DQUFpQztBQUNqQyxxQ0FBbUM7QUFDbkMsOENBQTZDO0FBRzdDO0lBRUkscUJBQ1ksSUFBZ0IsRUFDaEIsYUFBNEI7UUFENUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQTJCaEMsZ0JBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDO2dCQUNyQixjQUFjLEVBQUcsa0JBQWtCO2FBQ3RDLENBQUM7U0FDTCxDQUFDO0lBOUJNLENBQUM7SUFFVCx5QkFBRyxHQUFILFVBQUksR0FBVztRQUVYLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQzthQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ2QsS0FBSyxDQUFDLFVBQUEsS0FBSztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQkFBSSxHQUFKLFVBQUssR0FBVyxFQUFFLElBQUk7UUFFbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDckQsT0FBTyxDQUFDLEtBQUssQ0FBQzthQUNkLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0JRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJUyxpQkFBVTtZQUNELDhCQUFhO09BSi9CLFdBQVcsQ0FxQ3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGltZW91dCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZVxuICAgICAgICApIHsgfVxuXG4gICAgZ2V0KHVybDogc3RyaW5nKSB7XG5cbiAgICAgICAgbGV0IGZ1bGxVcmwgPSB0aGlzLmNvbmZpZ1NlcnZpY2UuZ2V0RG9tYWluKCkgKyBcIi9hcGkvXCIgKyB1cmw7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidXJsOiBcIiArIGZ1bGxVcmwpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChmdWxsVXJsLCB7fSlcbiAgICAgICAgLnRpbWVvdXQoMjAwMDApXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHBvc3QodXJsOiBzdHJpbmcsIGRhdGEpIHtcblxuICAgICAgICBsZXQgZnVsbFVybCA9IHRoaXMuY29uZmlnU2VydmljZS5nZXREb21haW4oKSArIFwiL2FwaS9cIiArIHVybDtcbiAgICAgICAgY29uc29sZS5sb2coXCJ1cmw6IFwiICsgZnVsbFVybCk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChmdWxsVXJsLCBkYXRhLCB0aGlzLmh0dHBPcHRpb25zKVxuICAgICAgICAudGltZW91dCgyMDAwMClcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBodHRwT3B0aW9ucyA9IHtcbiAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0pXG4gICAgfTtcblxufVxuIl19