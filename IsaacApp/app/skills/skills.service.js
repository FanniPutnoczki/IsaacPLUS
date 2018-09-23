"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var SkillsService = /** @class */ (function () {
    function SkillsService(http) {
        this.http = http;
    }
    SkillsService.prototype.getSkills = function () {
        /*let url = "http://10.0.2.2:5000/api/skills/do/Hi";
        console.log(url),
        
        this.http.get(url, {})
            .subscribe((result) => {
                console.log(result);
                console.log("result");
            }, (error) => {
                console.log("error");
                console.log(error);
            });
        return [];*/
        var skills = [
            {
                name: "Hello",
                url: "...",
                enabled: true
            },
            {
                name: "Lamp",
                url: "...",
                enabled: true
            }
        ];
        return skills;
    };
    SkillsService.prototype.runSkill = function (skill) {
    };
    SkillsService.prototype.enableSkill = function (skill) {
    };
    SkillsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SkillsService);
    return SkillsService;
}());
exports.SkillsService = SkillsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJza2lsbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFLL0Q7SUFFSSx1QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsaUNBQVMsR0FBVDtRQUNJOzs7Ozs7Ozs7OztvQkFXWTtRQUNaLElBQUksTUFBTSxHQUFZO1lBQ2xCO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxLQUFLO2dCQUNWLE9BQU8sRUFBRSxJQUFJO2FBQ2hCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsT0FBTyxFQUFFLElBQUk7YUFDaEI7U0FDSixDQUFBO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLEtBQVk7SUFFckIsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFZO0lBRXhCLENBQUM7SUF0Q1EsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUdpQixpQkFBVTtPQUYzQixhQUFhLENBd0N6QjtJQUFELG9CQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCB7IFNraWxsIH0gZnJvbSBcIi4vc2tpbGxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNraWxsc1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIGdldFNraWxscygpOiBTa2lsbFtdIHtcbiAgICAgICAgLypsZXQgdXJsID0gXCJodHRwOi8vMTAuMC4yLjI6NTAwMC9hcGkvc2tpbGxzL2RvL0hpXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKHVybCksXG4gICAgICAgIFxuICAgICAgICB0aGlzLmh0dHAuZ2V0KHVybCwge30pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIpO1xuICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtdOyovXG4gICAgICAgIGxldCBza2lsbHM6IFNraWxsW10gPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJIZWxsb1wiLFxuICAgICAgICAgICAgICAgIHVybDogXCIuLi5cIixcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiTGFtcFwiLFxuICAgICAgICAgICAgICAgIHVybDogXCIuLi5cIixcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgcmV0dXJuIHNraWxscztcbiAgICB9XG5cbiAgICBydW5Ta2lsbChza2lsbDogU2tpbGwpIHtcblxuICAgIH1cblxuICAgIGVuYWJsZVNraWxsKHNraWxsOiBTa2lsbCkge1xuXG4gICAgfVxuXG59XG4iXX0=