"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var skills_service_1 = require("./skills.service");
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skillsService) {
        this.skillsService = skillsService;
        this.loadMask = true;
        this.skillsService.getSkills();
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbURBQWlEO0FBT2pEO0lBSUMseUJBQ1MsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBVFcsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGdDQUFnQztTQUNoRCxDQUFDO3lDQU91Qiw4QkFBYTtPQUx6QixlQUFlLENBVzNCO0lBQUQsc0JBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTa2lsbHNTZXJ2aWNlIH0gZnJvbSBcIi4vc2tpbGxzLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic2tpbGxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgU2tpbGxzQ29tcG9uZW50IHsgXG5cblx0cHJpdmF0ZSBsb2FkTWFzaztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHNraWxsc1NlcnZpY2U6IFNraWxsc1NlcnZpY2Vcblx0KSB7XG5cdFx0dGhpcy5sb2FkTWFzayA9IHRydWU7XG5cdFx0dGhpcy5za2lsbHNTZXJ2aWNlLmdldFNraWxscygpO1xuXHR9XG5cbn1cbiJdfQ==