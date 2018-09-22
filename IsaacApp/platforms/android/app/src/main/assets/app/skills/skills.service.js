"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var SkillsService = /** @class */ (function () {
    function SkillsService(http) {
        this.http = http;
    }
    SkillsService.prototype.getSkills = function () {
        var url = "http://10.0.2.2:5000/api/skills/do/Hi";
        console.log(url),
            this.http.get(url, {})
                .subscribe(function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        return [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJza2lsbHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFLL0Q7SUFFSSx1QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsaUNBQVMsR0FBVDtRQUNJLElBQUksR0FBRyxHQUFHLHVDQUF1QyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBRWhCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7aUJBQ2pCLFNBQVMsQ0FBQyxVQUFDLE1BQU07Z0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixDQUFDLEVBQUUsVUFBQyxLQUFLO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxDQUFDLENBQUM7UUFDUCxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxLQUFZO0lBRXJCLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksS0FBWTtJQUV4QixDQUFDO0lBdkJRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FHaUIsaUJBQVU7T0FGM0IsYUFBYSxDQXlCekI7SUFBRCxvQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBTa2lsbCB9IGZyb20gXCIuL3NraWxsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTa2lsbHNTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICBnZXRTa2lsbHMoKTogU2tpbGxbXSB7XG4gICAgICAgIGxldCB1cmwgPSBcImh0dHA6Ly8xMC4wLjIuMjo1MDAwL2FwaS9za2lsbHMvZG8vSGlcIjtcbiAgICAgICAgY29uc29sZS5sb2codXJsKSxcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaHR0cC5nZXQodXJsLCB7fSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJ1blNraWxsKHNraWxsOiBTa2lsbCkge1xuXG4gICAgfVxuXG4gICAgZW5hYmxlU2tpbGwoc2tpbGw6IFNraWxsKSB7XG5cbiAgICB9XG5cbn1cbiJdfQ==