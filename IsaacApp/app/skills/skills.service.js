"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../shared/http.service");
var SkillsService = /** @class */ (function () {
    function SkillsService(httpService) {
        this.httpService = httpService;
        this.getSkillsUrl = "skills/get";
        this.enableSkillUrl = "skills/enable/";
        this.disableSkillUrl = "skills/disable/";
    }
    SkillsService.prototype.getSkills = function () {
        return this.httpService.get(this.getSkillsUrl);
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
    SkillsService.prototype.runSkill = function (skill) {
        return this.httpService.get("skills/do/" + skill.name);
    };
    SkillsService.prototype.enableSkill = function (skill) {
        return this.httpService.get(this.enableSkillUrl + skill.name);
    };
    SkillsService.prototype.disableSkill = function (skill) {
        return this.httpService.get(this.disableSkillUrl + skill.name);
    };
    SkillsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], SkillsService);
    return SkillsService;
}());
exports.SkillsService = SkillsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJza2lsbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1REFBcUQ7QUFLckQ7SUFNSSx1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKcEMsaUJBQVksR0FBVyxZQUFZLENBQUM7UUFDcEMsbUJBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyxvQkFBZSxHQUFXLGlCQUFpQixDQUFDO0lBRUosQ0FBQztJQUVqRCxpQ0FBUyxHQUFUO1FBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RDs7Ozs7Ozs7Ozs7O2dDQVl3QjtJQUNwQixDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLEtBQVk7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFZO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLEtBQVk7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFyQ1EsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQU93QiwwQkFBVztPQU5uQyxhQUFhLENBdUN6QjtJQUFELG9CQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9odHRwLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgU2tpbGwgfSBmcm9tIFwiLi9za2lsbFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2tpbGxzU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGdldFNraWxsc1VybDogc3RyaW5nID0gXCJza2lsbHMvZ2V0XCI7XG4gICAgcHJpdmF0ZSBlbmFibGVTa2lsbFVybDogc3RyaW5nID0gXCJza2lsbHMvZW5hYmxlL1wiO1xuICAgIHByaXZhdGUgZGlzYWJsZVNraWxsVXJsOiBzdHJpbmcgPSBcInNraWxscy9kaXNhYmxlL1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHsgfVxuXG4gICAgZ2V0U2tpbGxzKCl7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuZ2V0U2tpbGxzVXJsKTtcblxuLyogICAgICAgIGxldCBza2lsbHM6IFNraWxsW10gPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJIZWxsb1wiLFxuICAgICAgICAgICAgICAgIHVybDogXCIuLi5cIixcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxhbXBcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4uXCIsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICAgIHJldHVybiBza2lsbHM7Ki9cbiAgICB9XG5cbiAgICBydW5Ta2lsbChza2lsbDogU2tpbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KFwic2tpbGxzL2RvL1wiICsgc2tpbGwubmFtZSk7XG4gICAgfVxuXG4gICAgZW5hYmxlU2tpbGwoc2tpbGw6IFNraWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmVuYWJsZVNraWxsVXJsICsgc2tpbGwubmFtZSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZVNraWxsKHNraWxsOiBTa2lsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQodGhpcy5kaXNhYmxlU2tpbGxVcmwgKyBza2lsbC5uYW1lKTtcbiAgICB9XG5cbn1cbiJdfQ==