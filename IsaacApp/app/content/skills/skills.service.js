"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../../shared/http.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJza2lsbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywwREFBd0Q7QUFHeEQ7SUFNSSx1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKcEMsaUJBQVksR0FBVyxZQUFZLENBQUM7UUFDcEMsbUJBQWMsR0FBVyxnQkFBZ0IsQ0FBQztRQUMxQyxvQkFBZSxHQUFXLGlCQUFpQixDQUFDO0lBRUosQ0FBQztJQUVqRCxpQ0FBUyxHQUFUO1FBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RDs7Ozs7Ozs7Ozs7O2dDQVl3QjtJQUNwQixDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLEtBQVU7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLEtBQVU7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsS0FBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQXJDUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBT3dCLDBCQUFXO09BTm5DLGFBQWEsQ0F1Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2h0dHAuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2tpbGxzU2VydmljZSB7XG5cbiAgICBwcml2YXRlIGdldFNraWxsc1VybDogc3RyaW5nID0gXCJza2lsbHMvZ2V0XCI7XG4gICAgcHJpdmF0ZSBlbmFibGVTa2lsbFVybDogc3RyaW5nID0gXCJza2lsbHMvZW5hYmxlL1wiO1xuICAgIHByaXZhdGUgZGlzYWJsZVNraWxsVXJsOiBzdHJpbmcgPSBcInNraWxscy9kaXNhYmxlL1wiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwU2VydmljZTogSHR0cFNlcnZpY2UpIHsgfVxuXG4gICAgZ2V0U2tpbGxzKCl7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuZ2V0U2tpbGxzVXJsKTtcblxuLyogICAgICAgIGxldCBza2lsbHM6IFNraWxsW10gPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJIZWxsb1wiLFxuICAgICAgICAgICAgICAgIHVybDogXCIuLi5cIixcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxhbXBcIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4uXCIsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICAgIHJldHVybiBza2lsbHM7Ki9cbiAgICB9XG5cbiAgICBydW5Ta2lsbChza2lsbDogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldChcInNraWxscy9kby9cIiArIHNraWxsLm5hbWUpO1xuICAgIH1cblxuICAgIGVuYWJsZVNraWxsKHNraWxsOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuZW5hYmxlU2tpbGxVcmwgKyBza2lsbC5uYW1lKTtcbiAgICB9XG5cbiAgICBkaXNhYmxlU2tpbGwoc2tpbGw6IGFueSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQodGhpcy5kaXNhYmxlU2tpbGxVcmwgKyBza2lsbC5uYW1lKTtcbiAgICB9XG5cbn1cbiJdfQ==