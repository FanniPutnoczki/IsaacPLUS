"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var skills_service_1 = require("./skills.service");
var Toast = require("nativescript-toast");
var router_1 = require("nativescript-angular/router");
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skillsService, routerExtensions) {
        this.skillsService = skillsService;
        this.routerExtensions = routerExtensions;
        this.skills = [];
        this.refresh();
    }
    SkillsComponent.prototype.onSkillEnabled = function (event, skill) {
        console.dir(event);
        if (event.value) {
            this.skillsService.enableSkill(skill).subscribe(function (r) { });
        }
        else {
            this.skillsService.disableSkill(skill).subscribe(function (r) { });
        }
    };
    SkillsComponent.prototype.runSkill = function (skill) {
        console.log("running skill");
        this.skillsService.runSkill(skill).subscribe(function (r) {
            console.log(r);
            if (r) {
                Toast.makeText("Ran " + skill.name).show();
            }
            else {
                Toast.makeText("There was an error while running the skill" + skill.name).show();
            }
        });
    };
    SkillsComponent.prototype.settings = function () {
        this.routerExtensions.navigate(["/settings"], {
            transition: {
                name: "slideLeft",
                duration: 500,
                curve: "linear"
            }
        });
    };
    SkillsComponent.prototype.refresh = function () {
        var _this = this;
        Toast.makeText("Refreshing").show();
        this.loadMask = true;
        this.skillsService.getSkills().subscribe(function (r) {
            console.log(r);
            _this.connectionError = (r === null);
            _this.skills = (r === null ? [] : r);
            _this.loadMask = false;
        });
    };
    SkillsComponent = __decorate([
        core_1.Component({
            selector: "skills",
            templateUrl: "./skills/skills.component.html",
        }),
        __metadata("design:paramtypes", [skills_service_1.SkillsService,
            router_1.RouterExtensions])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbURBQWlEO0FBRWpELDBDQUE0QztBQUM1QyxzREFBK0Q7QUFPL0Q7SUFNQyx5QkFDUyxhQUE0QixFQUM1QixnQkFBa0M7UUFEbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUUxQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxLQUFLLEVBQUUsS0FBSztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBRyxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUVGLENBQUM7SUFFRCxrQ0FBUSxHQUFSLFVBQVMsS0FBSztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDTixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0MsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxRQUFRLENBQUMsNENBQTRDLEdBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pGLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZDLFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsaUNBQU8sR0FBUDtRQUFBLGlCQVNDO1FBUkEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLEtBQUcsSUFBSSxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBdkRXLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxnQ0FBZ0M7U0FDaEQsQ0FBQzt5Q0FTdUIsOEJBQWE7WUFDVix5QkFBZ0I7T0FSL0IsZUFBZSxDQXlEM0I7SUFBRCxzQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tIFwiLi9za2lsbHMuc2VydmljZVwiO1xuaW1wb3J0IHsgU2tpbGwgfSBmcm9tIFwiLi9za2lsbFwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNraWxsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2tpbGxzL3NraWxscy5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIFNraWxsc0NvbXBvbmVudCB7IFxuXG5cdHByaXZhdGUgc2tpbGxzOiBTa2lsbFtdO1xuXHRwcml2YXRlIGxvYWRNYXNrO1xuXHRwcml2YXRlIGNvbm5lY3Rpb25FcnJvcjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHNraWxsc1NlcnZpY2U6IFNraWxsc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG5cdCkge1xuXHRcdHRoaXMuc2tpbGxzID0gW107XG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cdH1cblxuXHRvblNraWxsRW5hYmxlZChldmVudCwgc2tpbGwpIHtcblx0XHRjb25zb2xlLmRpcihldmVudCk7XG5cdFx0aWYoZXZlbnQudmFsdWUpIHtcblx0XHRcdHRoaXMuc2tpbGxzU2VydmljZS5lbmFibGVTa2lsbChza2lsbCkuc3Vic2NyaWJlKHI9Pnt9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5za2lsbHNTZXJ2aWNlLmRpc2FibGVTa2lsbChza2lsbCkuc3Vic2NyaWJlKHI9Pnt9KTtcblx0XHR9XG5cdFx0XG5cdH1cblxuXHRydW5Ta2lsbChza2lsbCkge1xuXHRcdGNvbnNvbGUubG9nKFwicnVubmluZyBza2lsbFwiKTtcblx0XHR0aGlzLnNraWxsc1NlcnZpY2UucnVuU2tpbGwoc2tpbGwpLnN1YnNjcmliZShyPT57XG5cdFx0XHRjb25zb2xlLmxvZyhyKTtcblx0XHRcdGlmKHIpIHtcblx0XHRcdFx0VG9hc3QubWFrZVRleHQoXCJSYW4gXCIgK3NraWxsLm5hbWUpLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFRvYXN0Lm1ha2VUZXh0KFwiVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIHJ1bm5pbmcgdGhlIHNraWxsXCIgK3NraWxsLm5hbWUpLnNob3coKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHNldHRpbmdzKCkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc2V0dGluZ3NcIl0sIHtcblx0ICAgICAgICB0cmFuc2l0aW9uOiB7XG5cdFx0ICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiLFxuXHRcdCAgICAgICAgZHVyYXRpb246IDUwMCxcblx0XHQgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXG5cdFx0ICAgIH1cblx0XHR9KTtcblx0fVxuXG5cdHJlZnJlc2goKSB7XG5cdFx0VG9hc3QubWFrZVRleHQoXCJSZWZyZXNoaW5nXCIpLnNob3coKTtcblx0XHR0aGlzLmxvYWRNYXNrID0gdHJ1ZTtcblx0XHR0aGlzLnNraWxsc1NlcnZpY2UuZ2V0U2tpbGxzKCkuc3Vic2NyaWJlKHI9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uRXJyb3IgPSAocj09PW51bGwpO1xuICAgICAgICAgICAgdGhpcy5za2lsbHMgPSAocj09PW51bGwgPyBbXSA6IHIpO1xuICAgICAgICAgICAgdGhpcy5sb2FkTWFzayA9IGZhbHNlO1xuICAgICAgICB9KTtcblx0fVxuXG59XG4iXX0=