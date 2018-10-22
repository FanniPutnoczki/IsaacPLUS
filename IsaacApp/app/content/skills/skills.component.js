"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var skills_service_1 = require("./skills.service");
var router_1 = require("nativescript-angular/router");
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skillsService, routerExtensions) {
        this.skillsService = skillsService;
        this.routerExtensions = routerExtensions;
        console.log("skills constructor");
        this.connectionError = false;
        this.skills = [];
        this.refresh();
    }
    SkillsComponent.prototype.onSkillEnabled = function (event, skill) {
        /*		console.dir(event);
                if(event.value) {
                    this.skillsService.enableSkill(skill).subscribe(r=>{});
                } else {
                    this.skillsService.disableSkill(skill).subscribe(r=>{});
                }*/
    };
    SkillsComponent.prototype.runSkill = function (skill) {
        /*		console.log("running skill");
                this.skillsService.runSkill(skill).subscribe(r=>{
                    console.log(r);
                    if(r) {
                        Toast.makeText("Ran " +skill.name).show();
                    } else {
                        Toast.makeText("There was an error while running the skill" +skill.name).show();
                    }
                });*/
    };
    //TODO here refresh only on refresh button press, navigation and on opening.. no intervals needed 
    SkillsComponent.prototype.refresh = function () {
        var _this = this;
        console.log("refreshing skills");
        this.loadMask = true;
        this.skillsService.getSkills().subscribe(function (r) {
            if (r === null) {
                _this.connectionError = true;
                _this.skills = [];
            }
            else {
                console.log(r);
                _this.skills = r;
            }
            _this.loadMask = false;
        });
    };
    SkillsComponent = __decorate([
        core_1.Component({
            selector: "skills",
            templateUrl: "./content/skills/skills.component.html",
        }),
        __metadata("design:paramtypes", [skills_service_1.SkillsService,
            router_1.RouterExtensions])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbURBQWlEO0FBRWpELHNEQUErRDtBQU8vRDtJQU9DLHlCQUNTLGFBQTRCLEVBQzVCLGdCQUFrQztRQURsQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRTFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxLQUFLLEVBQUUsS0FBSztRQUM1Qjs7Ozs7bUJBS0s7SUFFSixDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLEtBQUs7UUFDZjs7Ozs7Ozs7cUJBUU87SUFDTixDQUFDO0lBRUQsa0dBQWtHO0lBQ2xHLGlDQUFPLEdBQVA7UUFBQSxpQkFhQztRQVpBLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDaEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLENBQUM7WUFDRCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFyRFcsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHdDQUF3QztTQUN4RCxDQUFDO3lDQVV1Qiw4QkFBYTtZQUNWLHlCQUFnQjtPQVQvQixlQUFlLENBdUQzQjtJQUFELHNCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gXCIuL3NraWxscy5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic2tpbGxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZW50L3NraWxscy9za2lsbHMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBTa2lsbHNDb21wb25lbnQgeyBcblxuXHRwdWJsaWMgY29ubmVjdGlvbkVycm9yO1xuXG5cdHByaXZhdGUgc2tpbGxzO1xuXHRwcml2YXRlIGxvYWRNYXNrO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgc2tpbGxzU2VydmljZTogU2tpbGxzU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcblx0KSB7XG5cdFx0Y29uc29sZS5sb2coXCJza2lsbHMgY29uc3RydWN0b3JcIik7XG5cdFx0dGhpcy5jb25uZWN0aW9uRXJyb3IgPSBmYWxzZTtcblx0XHR0aGlzLnNraWxscyA9IFtdO1xuXHRcdHRoaXMucmVmcmVzaCgpO1xuXHR9XG5cblx0b25Ta2lsbEVuYWJsZWQoZXZlbnQsIHNraWxsKSB7XG4vKlx0XHRjb25zb2xlLmRpcihldmVudCk7XG5cdFx0aWYoZXZlbnQudmFsdWUpIHtcblx0XHRcdHRoaXMuc2tpbGxzU2VydmljZS5lbmFibGVTa2lsbChza2lsbCkuc3Vic2NyaWJlKHI9Pnt9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5za2lsbHNTZXJ2aWNlLmRpc2FibGVTa2lsbChza2lsbCkuc3Vic2NyaWJlKHI9Pnt9KTtcblx0XHR9Ki9cblx0XHRcblx0fVxuXG5cdHJ1blNraWxsKHNraWxsKSB7XG4vKlx0XHRjb25zb2xlLmxvZyhcInJ1bm5pbmcgc2tpbGxcIik7XG5cdFx0dGhpcy5za2lsbHNTZXJ2aWNlLnJ1blNraWxsKHNraWxsKS5zdWJzY3JpYmUocj0+e1xuXHRcdFx0Y29uc29sZS5sb2cocik7XG5cdFx0XHRpZihyKSB7XG5cdFx0XHRcdFRvYXN0Lm1ha2VUZXh0KFwiUmFuIFwiICtza2lsbC5uYW1lKS5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRUb2FzdC5tYWtlVGV4dChcIlRoZXJlIHdhcyBhbiBlcnJvciB3aGlsZSBydW5uaW5nIHRoZSBza2lsbFwiICtza2lsbC5uYW1lKS5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fSk7Ki9cblx0fVxuXG5cdC8vVE9ETyBoZXJlIHJlZnJlc2ggb25seSBvbiByZWZyZXNoIGJ1dHRvbiBwcmVzcywgbmF2aWdhdGlvbiBhbmQgb24gb3BlbmluZy4uIG5vIGludGVydmFscyBuZWVkZWQgXG5cdHJlZnJlc2goKSB7XG5cdFx0Y29uc29sZS5sb2coXCJyZWZyZXNoaW5nIHNraWxsc1wiKTtcblx0XHR0aGlzLmxvYWRNYXNrID0gdHJ1ZTtcblx0XHR0aGlzLnNraWxsc1NlcnZpY2UuZ2V0U2tpbGxzKCkuc3Vic2NyaWJlKHI9PntcbiAgICAgICAgICAgIGlmKHIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIFx0dGhpcy5jb25uZWN0aW9uRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgXHR0aGlzLnNraWxscyA9IFtdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFx0Y29uc29sZS5sb2cocik7XG4gICAgICAgICAgICBcdHRoaXMuc2tpbGxzID0gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9hZE1hc2sgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cdH1cblxufVxuIl19