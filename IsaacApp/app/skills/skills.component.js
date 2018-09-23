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
        console.log("checked");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbURBQWlEO0FBT2pEO0lBS0MseUJBQ1MsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsS0FBSyxFQUFFLEtBQUs7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBZlcsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGdDQUFnQztTQUNoRCxDQUFDO3lDQVF1Qiw4QkFBYTtPQU56QixlQUFlLENBaUIzQjtJQUFELHNCQUFDO0NBQUEsQUFqQkQsSUFpQkM7QUFqQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gXCIuL3NraWxscy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTa2lsbCB9IGZyb20gXCIuL3NraWxsXCJcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNraWxsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2tpbGxzL3NraWxscy5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIFNraWxsc0NvbXBvbmVudCB7IFxuXG5cdHByaXZhdGUgc2tpbGxzOiBTa2lsbFtdXG5cdHByaXZhdGUgbG9hZE1hc2s7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBza2lsbHNTZXJ2aWNlOiBTa2lsbHNTZXJ2aWNlXG5cdCkge1xuXHRcdHRoaXMubG9hZE1hc2sgPSB0cnVlO1xuXHRcdHRoaXMuc2tpbGxzID0gdGhpcy5za2lsbHNTZXJ2aWNlLmdldFNraWxscygpO1xuXHRcdGNvbnNvbGUuZGlyKHRoaXMuc2tpbGxzKTtcblx0fVxuXG5cdG9uU2tpbGxFbmFibGVkKGV2ZW50LCBza2lsbCkge1xuXHRcdGNvbnNvbGUubG9nKFwiY2hlY2tlZFwiKTtcblx0fVxuXG59XG4iXX0=