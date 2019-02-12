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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJza2lsbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQywwREFBd0Q7QUFHeEQ7SUFPSSx1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFMcEMsaUJBQVksR0FBVyxZQUFZLENBQUM7UUFDcEMsb0JBQWUsR0FBVyxpQkFBaUIsQ0FBQztRQUM1QyxtQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLG9CQUFlLEdBQVcsaUJBQWlCLENBQUM7SUFFSixDQUFDO0lBRWpELGlDQUFTLEdBQVQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsS0FBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxLQUFVLEVBQUUsT0FBWTtRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFVO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLEtBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUEzQlEsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQVF3QiwwQkFBVztPQVBuQyxhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2h0dHAuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2tpbGxzU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTa2lsbHNVcmw6IHN0cmluZyA9IFwic2tpbGxzL2dldFwiO1xyXG4gICAgcHJpdmF0ZSByZXNvbHZlU2tpbGxVcmw6IHN0cmluZyA9IFwic2tpbGxzL3Jlc29sdmUvXCI7XHJcbiAgICBwcml2YXRlIGVuYWJsZVNraWxsVXJsOiBzdHJpbmcgPSBcInNraWxscy9lbmFibGUvXCI7XHJcbiAgICBwcml2YXRlIGRpc2FibGVTa2lsbFVybDogc3RyaW5nID0gXCJza2lsbHMvZGlzYWJsZS9cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkgeyB9XHJcblxyXG4gICAgZ2V0U2tpbGxzKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuZ2V0U2tpbGxzVXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlU2tpbGwoc2tpbGw6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLnJlc29sdmVTa2lsbFVybCArIHNraWxsLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1blNraWxsKHNraWxsOiBhbnksIGFuc3dlcnM6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLnBvc3QoXCJza2lsbHMvZG8vXCIgKyBza2lsbC5uYW1lLCBhbnN3ZXJzKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVTa2lsbChza2lsbDogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuZW5hYmxlU2tpbGxVcmwgKyBza2lsbC5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlU2tpbGwoc2tpbGw6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmRpc2FibGVTa2lsbFVybCArIHNraWxsLm5hbWUpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=