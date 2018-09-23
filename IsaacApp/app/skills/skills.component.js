"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var skills_service_1 = require("./skills.service");
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skillsService) {
        this.skillsService = skillsService;
        this.loadMask = true;
        this.skills = this.skillsService.getSkills();
        console.dir(this.skills);
    }
    SkillsComponent.prototype.onSkillEnabled = function (event, skill) {
        skill.enabled = !skill.enabled;
    };
    SkillsComponent = __decorate([
        core_1.Component({
            selector: "skills",
            templateUrl: "./skills/skills.component.html",
        }),
        __metadata("design:paramtypes", [skills_service_1.SkillsService])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbURBQWlEO0FBT2pEO0lBS0MseUJBQ1MsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsS0FBSyxFQUFFLEtBQUs7UUFDMUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDaEMsQ0FBQztJQWZXLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDaEQsQ0FBQzt5Q0FRdUIsOEJBQWE7T0FOekIsZUFBZSxDQWlCM0I7SUFBRCxzQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tIFwiLi9za2lsbHMuc2VydmljZVwiO1xuaW1wb3J0IHsgU2tpbGwgfSBmcm9tIFwiLi9za2lsbFwiXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJza2lsbHNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NraWxscy9za2lsbHMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBTa2lsbHNDb21wb25lbnQgeyBcblxuXHRwcml2YXRlIHNraWxsczogU2tpbGxbXVxuXHRwcml2YXRlIGxvYWRNYXNrO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgc2tpbGxzU2VydmljZTogU2tpbGxzU2VydmljZVxuXHQpIHtcblx0XHR0aGlzLmxvYWRNYXNrID0gdHJ1ZTtcblx0XHR0aGlzLnNraWxscyA9IHRoaXMuc2tpbGxzU2VydmljZS5nZXRTa2lsbHMoKTtcblx0XHRjb25zb2xlLmRpcih0aGlzLnNraWxscyk7XG5cdH1cblxuXHRvblNraWxsRW5hYmxlZChldmVudCwgc2tpbGwpIHtcblx0XHRza2lsbC5lbmFibGVkID0gIXNraWxsLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19