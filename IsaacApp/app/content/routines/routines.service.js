"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../../shared/http.service");
var RoutinesService = /** @class */ (function () {
    function RoutinesService(httpService) {
        this.httpService = httpService;
        this.getRoutinesUrl = "routines";
        this.getRoutineUrl = "routines/";
        this.addRoutineUrl = "routines/add";
        this.deleteRoutineUrl = "routines/delete/";
    }
    RoutinesService.prototype.getRoutine = function (id) {
        return this.httpService.get(this.getRoutineUrl + id);
    };
    RoutinesService.prototype.deleteRoutine = function (id) {
        return this.httpService.get(this.deleteRoutineUrl + id);
    };
    RoutinesService.prototype.getRoutines = function () {
        return this.httpService.get(this.getRoutinesUrl);
    };
    RoutinesService.prototype.addRoutine = function (routine) {
        return this.httpService.post(this.addRoutineUrl, routine);
    };
    RoutinesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], RoutinesService);
    return RoutinesService;
}());
exports.RoutinesService = RoutinesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRpbmVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMERBQXdEO0FBR3hEO0lBUUkseUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBTnBDLG1CQUFjLEdBQVcsVUFBVSxDQUFDO1FBQ3BDLGtCQUFhLEdBQVcsV0FBVyxDQUFDO1FBQ3BDLGtCQUFhLEdBQVcsY0FBYyxDQUFDO1FBQ3ZDLHFCQUFnQixHQUFXLGtCQUFrQixDQUFDO0lBR04sQ0FBQztJQUVqRCxvQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLEVBQVU7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxPQUFZO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUF4QlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQVN3QiwwQkFBVztPQVJuQyxlQUFlLENBMEIzQjtJQUFELHNCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9odHRwLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRpbmVzU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGdldFJvdXRpbmVzVXJsOiBzdHJpbmcgPSBcInJvdXRpbmVzXCI7XG4gICAgcHJpdmF0ZSBnZXRSb3V0aW5lVXJsOiBzdHJpbmcgPSBcInJvdXRpbmVzL1wiO1xuICAgIHByaXZhdGUgYWRkUm91dGluZVVybDogc3RyaW5nID0gXCJyb3V0aW5lcy9hZGRcIjtcbiAgICBwcml2YXRlIGRlbGV0ZVJvdXRpbmVVcmw6IHN0cmluZyA9IFwicm91dGluZXMvZGVsZXRlL1wiO1xuICAgIFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHsgfVxuXG4gICAgZ2V0Um91dGluZShpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmdldFJvdXRpbmVVcmwraWQpO1xuICAgIH1cblxuICAgIGRlbGV0ZVJvdXRpbmUoaWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQodGhpcy5kZWxldGVSb3V0aW5lVXJsK2lkKTtcbiAgICB9XG5cbiAgICBnZXRSb3V0aW5lcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQodGhpcy5nZXRSb3V0aW5lc1VybCk7XG4gICAgfVxuXG4gICAgYWRkUm91dGluZShyb3V0aW5lOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdCh0aGlzLmFkZFJvdXRpbmVVcmwsIHJvdXRpbmUpO1xuICAgIH1cblxufVxuIl19