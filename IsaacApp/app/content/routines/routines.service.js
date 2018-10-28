"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../../shared/http.service");
var RoutinesService = /** @class */ (function () {
    function RoutinesService(httpService) {
        this.httpService = httpService;
        this.getSkillsUrl = "skills/get";
        this.enableSkillUrl = "skills/enable/";
        this.disableSkillUrl = "skills/disable/";
    }
    RoutinesService.prototype.getRoutine = function (id) {
    };
    RoutinesService.prototype.getRoutines = function () {
        //return this.httpService.get(this.getSkillsUrl);
        /*        let skills: Skill[] = [
                    {
                        name: "Hello",
                        url: "...",
                        enabled: false
                    },
                    {
                        name: "Lamp",
                        url: "...",
                        enabled: true
                    }
                ]
                return skills;*/
    };
    RoutinesService.prototype.addRoutine = function (routine) {
    };
    RoutinesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], RoutinesService);
    return RoutinesService;
}());
exports.RoutinesService = RoutinesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRpbmVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMERBQXdEO0FBR3hEO0lBTUkseUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnBDLGlCQUFZLEdBQVcsWUFBWSxDQUFDO1FBQ3BDLG1CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsb0JBQWUsR0FBVyxpQkFBaUIsQ0FBQztJQUVKLENBQUM7SUFFakQsb0NBQVUsR0FBVixVQUFXLEVBQVU7SUFFckIsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFFSSxpREFBaUQ7UUFFekQ7Ozs7Ozs7Ozs7OztnQ0FZd0I7SUFDcEIsQ0FBQztJQUVELG9DQUFVLEdBQVYsVUFBVyxPQUFZO0lBRXZCLENBQUM7SUFqQ1EsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQU93QiwwQkFBVztPQU5uQyxlQUFlLENBbUMzQjtJQUFELHNCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9odHRwLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRpbmVzU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGdldFNraWxsc1VybDogc3RyaW5nID0gXCJza2lsbHMvZ2V0XCI7XG4gICAgcHJpdmF0ZSBlbmFibGVTa2lsbFVybDogc3RyaW5nID0gXCJza2lsbHMvZW5hYmxlL1wiO1xuICAgIHByaXZhdGUgZGlzYWJsZVNraWxsVXJsOiBzdHJpbmcgPSBcInNraWxscy9kaXNhYmxlL1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHsgfVxuXG4gICAgZ2V0Um91dGluZShpZDogc3RyaW5nKSB7XG5cbiAgICB9XG5cbiAgICBnZXRSb3V0aW5lcygpe1xuXG4gICAgICAgIC8vcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuZ2V0U2tpbGxzVXJsKTtcblxuLyogICAgICAgIGxldCBza2lsbHM6IFNraWxsW10gPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJIZWxsb1wiLFxuICAgICAgICAgICAgICAgIHVybDogXCIuLi5cIixcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxhbXBcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4uXCIsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICAgIHJldHVybiBza2lsbHM7Ki9cbiAgICB9XG5cbiAgICBhZGRSb3V0aW5lKHJvdXRpbmU6IGFueSkge1xuXG4gICAgfVxuXG59XG4iXX0=