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
    RoutinesService.prototype.addRoutine = function () {
    };
    RoutinesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], RoutinesService);
    return RoutinesService;
}());
exports.RoutinesService = RoutinesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRpbmVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsMERBQXdEO0FBR3hEO0lBTUkseUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSnBDLGlCQUFZLEdBQVcsWUFBWSxDQUFDO1FBQ3BDLG1CQUFjLEdBQVcsZ0JBQWdCLENBQUM7UUFDMUMsb0JBQWUsR0FBVyxpQkFBaUIsQ0FBQztJQUVKLENBQUM7SUFFakQscUNBQVcsR0FBWDtRQUVJLGlEQUFpRDtRQUV6RDs7Ozs7Ozs7Ozs7O2dDQVl3QjtJQUNwQixDQUFDO0lBRUQsb0NBQVUsR0FBVjtJQUVBLENBQUM7SUE3QlEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQU93QiwwQkFBVztPQU5uQyxlQUFlLENBK0IzQjtJQUFELHNCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9odHRwLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJvdXRpbmVzU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGdldFNraWxsc1VybDogc3RyaW5nID0gXCJza2lsbHMvZ2V0XCI7XG4gICAgcHJpdmF0ZSBlbmFibGVTa2lsbFVybDogc3RyaW5nID0gXCJza2lsbHMvZW5hYmxlL1wiO1xuICAgIHByaXZhdGUgZGlzYWJsZVNraWxsVXJsOiBzdHJpbmcgPSBcInNraWxscy9kaXNhYmxlL1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHsgfVxuXG4gICAgZ2V0Um91dGluZXMoKXtcblxuICAgICAgICAvL3JldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmdldFNraWxsc1VybCk7XG5cbi8qICAgICAgICBsZXQgc2tpbGxzOiBTa2lsbFtdID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiSGVsbG9cIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4uXCIsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJMYW1wXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4uLlwiLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICByZXR1cm4gc2tpbGxzOyovXG4gICAgfVxuXG4gICAgYWRkUm91dGluZSgpIHtcblxuICAgIH1cblxufVxuIl19