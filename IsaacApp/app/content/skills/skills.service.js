"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../../shared/http.service");
var SkillsService = /** @class */ (function () {
    function SkillsService(httpService) {
        this.httpService = httpService;
        this.getSkillsUrl = "skills/get";
        this.resolveSkillUrl = "skills/resolve/";
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
    SkillsService.prototype.resolveSkill = function (skill) {
        return this.httpService.get(this.resolveSkillUrl + skill.name);
    };
    SkillsService.prototype.runSkill = function (skill, answers) {
        return this.httpService.post("skills/do/" + skill.name, answers);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJza2lsbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywwREFBd0Q7QUFHeEQ7SUFPSSx1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFMcEMsaUJBQVksR0FBVyxZQUFZLENBQUM7UUFDcEMsb0JBQWUsR0FBVyxpQkFBaUIsQ0FBQztRQUM1QyxtQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLG9CQUFlLEdBQVcsaUJBQWlCLENBQUM7SUFFSixDQUFDO0lBRWpELGlDQUFTLEdBQVQ7UUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXZEOzs7Ozs7Ozs7Ozs7Z0NBWXdCO0lBQ3BCLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsS0FBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxLQUFVLEVBQUUsT0FBWTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFVO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLEtBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUExQ1EsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQVF3QiwwQkFBVztPQVBuQyxhQUFhLENBNEN6QjtJQUFELG9CQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9odHRwLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNraWxsc1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBnZXRTa2lsbHNVcmw6IHN0cmluZyA9IFwic2tpbGxzL2dldFwiO1xuICAgIHByaXZhdGUgcmVzb2x2ZVNraWxsVXJsOiBzdHJpbmcgPSBcInNraWxscy9yZXNvbHZlL1wiO1xuICAgIHByaXZhdGUgZW5hYmxlU2tpbGxVcmw6IHN0cmluZyA9IFwic2tpbGxzL2VuYWJsZS9cIjtcbiAgICBwcml2YXRlIGRpc2FibGVTa2lsbFVybDogc3RyaW5nID0gXCJza2lsbHMvZGlzYWJsZS9cIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7IH1cblxuICAgIGdldFNraWxscygpe1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmdldFNraWxsc1VybCk7XG5cbi8qICAgICAgICBsZXQgc2tpbGxzOiBTa2lsbFtdID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiSGVsbG9cIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4uXCIsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJMYW1wXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4uLlwiLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICByZXR1cm4gc2tpbGxzOyovXG4gICAgfVxuXG4gICAgcmVzb2x2ZVNraWxsKHNraWxsOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMucmVzb2x2ZVNraWxsVXJsICsgc2tpbGwubmFtZSk7XG4gICAgfVxuXG4gICAgcnVuU2tpbGwoc2tpbGw6IGFueSwgYW5zd2VyczogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXCJza2lsbHMvZG8vXCIgKyBza2lsbC5uYW1lLCBhbnN3ZXJzKTtcbiAgICB9XG5cbiAgICBlbmFibGVTa2lsbChza2lsbDogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmVuYWJsZVNraWxsVXJsICsgc2tpbGwubmFtZSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZVNraWxsKHNraWxsOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuZGlzYWJsZVNraWxsVXJsICsgc2tpbGwubmFtZSk7XG4gICAgfVxuXG59XG4iXX0=