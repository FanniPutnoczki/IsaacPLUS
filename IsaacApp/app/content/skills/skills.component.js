"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var skills_service_1 = require("./skills.service");
var Toast = require("nativescript-toast");
var dialogs = require("tns-core-modules/ui/dialogs");
var router_1 = require("nativescript-angular/router");
var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skillsService, routerExtensions) {
        this.skillsService = skillsService;
        this.routerExtensions = routerExtensions;
        this.connectionError = false;
        this.skills = [];
        this.refresh();
    }
    SkillsComponent.prototype.onSkillEnabled = function (event, skill) {
        if (event.value) {
            this.skillsService.enableSkill(skill).subscribe(function (r) { });
        }
        else {
            this.skillsService.disableSkill(skill).subscribe(function (r) { });
        }
    };
    SkillsComponent.prototype.handleConversation = function (cons, answers) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, cons_1, con, answer, _a, _b, _c, key, childCon;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        console.log("start");
                        _i = 0, cons_1 = cons;
                        _d.label = 1;
                    case 1:
                        if (!(_i < cons_1.length)) return [3 /*break*/, 10];
                        con = cons_1[_i];
                        if (!con.input) return [3 /*break*/, 3];
                        return [4 /*yield*/, dialogs.prompt({
                                message: con.prompt,
                                okButtonText: "Ok",
                            })];
                    case 2:
                        answer = _d.sent();
                        answers[con.key] = {};
                        answers[con.key]["text"] = answer.text;
                        console.log(answer);
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, dialogs.alert(con.prompt)];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        if (!con.selection) return [3 /*break*/, 9];
                        _a = [];
                        for (_b in con.selection)
                            _a.push(_b);
                        _c = 0;
                        _d.label = 6;
                    case 6:
                        if (!(_c < _a.length)) return [3 /*break*/, 9];
                        key = _a[_c];
                        if (!answers[con.key]["text"].includes(key)) return [3 /*break*/, 8];
                        childCon = con["selection"][key];
                        answers[con.key]["choice"] = key;
                        return [4 /*yield*/, this.handleConversation(childCon, answers)];
                    case 7:
                        _d.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        _c++;
                        return [3 /*break*/, 6];
                    case 9:
                        _i++;
                        return [3 /*break*/, 1];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    //TODO handle if server error
    SkillsComponent.prototype.runSkill = function (skill) {
        return __awaiter(this, void 0, void 0, function () {
            var answers, newConvo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("running skill " + skill.name + " " + skill.conversation.length);
                        answers = {};
                        if (!(skill.conversation.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.skillsService.resolveSkill(skill).toPromise()];
                    case 1:
                        newConvo = _a.sent();
                        console.log("resolved convo ", newConvo);
                        skill.conversation = newConvo;
                        return [4 /*yield*/, this.handleConversation(skill.conversation, answers)];
                    case 2:
                        _a.sent();
                        console.log(answers);
                        _a.label = 3;
                    case 3:
                        this.skillsService.runSkill(skill, answers).subscribe(function (r) {
                            console.log(r);
                            if (r !== undefined) {
                                Toast.makeText("Ran " + skill.name).show();
                            }
                            else {
                                Toast.makeText("There was an error while running the skill" + skill.name).show();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    //TODO here refresh only on refresh button press, navigation and on opening.. no intervals needed 
    SkillsComponent.prototype.refresh = function () {
        var _this = this;
        console.log("refreshing skills");
        this.skills = [];
        this.connectionError = false;
        this.loadMask = true;
        this.skillsService.getSkills().subscribe(function (r) {
            if (r == undefined) {
                _this.connectionError = true;
            }
            else {
                _this.skills = r;
                _this.connectionError = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbURBQWlEO0FBQ2pELDBDQUE0QztBQUM1QyxxREFBdUQ7QUFDdkQsc0RBQStEO0FBTy9EO0lBT0MseUJBQ1MsYUFBNEIsRUFDNUIsZ0JBQWtDO1FBRGxDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsS0FBSyxFQUFFLEtBQUs7UUFDMUIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0YsQ0FBQztJQUVLLDRDQUFrQixHQUF4QixVQUF5QixJQUFJLEVBQUUsT0FBTzs7Ozs7O3dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzhCQUNGLEVBQUosYUFBSTs7OzZCQUFKLENBQUEsa0JBQUksQ0FBQTt3QkFBWCxHQUFHOzZCQUNQLEdBQUcsQ0FBQyxLQUFLLEVBQVQsd0JBQVM7d0JBQ0kscUJBQU0sT0FBTyxDQUFD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LENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ2hDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM3QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzlCLENBQUM7WUFDRCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUEzRlcsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHdDQUF3QztTQUN4RCxDQUFDO3lDQVV1Qiw4QkFBYTtZQUNWLHlCQUFnQjtPQVQvQixlQUFlLENBNkYzQjtJQUFELHNCQUFDO0NBQUEsQUE3RkQsSUE2RkM7QUE3RlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTa2lsbHNTZXJ2aWNlIH0gZnJvbSBcIi4vc2tpbGxzLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInNraWxsc1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZW50L3NraWxscy9za2lsbHMuY29tcG9uZW50Lmh0bWxcIixcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTa2lsbHNDb21wb25lbnQgeyBcclxuXHJcblx0cHVibGljIGNvbm5lY3Rpb25FcnJvcjtcclxuXHJcblx0cHJpdmF0ZSBza2lsbHM7XHJcblx0cHJpdmF0ZSBsb2FkTWFzaztcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHNraWxsc1NlcnZpY2U6IFNraWxsc1NlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuXHQpIHtcclxuXHRcdHRoaXMuY29ubmVjdGlvbkVycm9yID0gZmFsc2U7XHJcblx0XHR0aGlzLnNraWxscyA9IFtdO1xyXG5cdFx0dGhpcy5yZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHRvblNraWxsRW5hYmxlZChldmVudCwgc2tpbGwpIHtcclxuXHRcdGlmKGV2ZW50LnZhbHVlKSB7XHJcblx0XHRcdHRoaXMuc2tpbGxzU2VydmljZS5lbmFibGVTa2lsbChza2lsbCkuc3Vic2NyaWJlKHI9Pnt9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuc2tpbGxzU2VydmljZS5kaXNhYmxlU2tpbGwoc2tpbGwpLnN1YnNjcmliZShyPT57fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBoYW5kbGVDb252ZXJzYXRpb24oY29ucywgYW5zd2Vycykge1xyXG5cdFx0Y29uc29sZS5sb2coXCJzdGFydFwiKTtcclxuXHRcdGZvcihsZXQgY29uIG9mIGNvbnMpIHtcclxuXHRcdFx0aWYoY29uLmlucHV0KSB7XHJcblx0XHRcdFx0Y29uc3QgYW5zd2VyID0gYXdhaXQgZGlhbG9ncy5wcm9tcHQoe1xyXG5cdFx0XHRcdCAgICBtZXNzYWdlOiBjb24ucHJvbXB0LFxyXG5cdFx0XHRcdCAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRhbnN3ZXJzW2Nvbi5rZXldID0ge307XHJcblx0XHRcdFx0YW5zd2Vyc1tjb24ua2V5XVtcInRleHRcIl0gPSBhbnN3ZXIudGV4dDtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhhbnN3ZXIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGF3YWl0IGRpYWxvZ3MuYWxlcnQoY29uLnByb21wdCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoY29uLnNlbGVjdGlvbikge1xyXG5cdFx0XHRcdGZvcihsZXQga2V5IGluIGNvbi5zZWxlY3Rpb24pIHtcclxuXHRcdFx0XHRcdGlmIChhbnN3ZXJzW2Nvbi5rZXldW1widGV4dFwiXS5pbmNsdWRlcyhrZXkpKXtcclxuXHRcdFx0XHRcdFx0bGV0IGNoaWxkQ29uID0gY29uW1wic2VsZWN0aW9uXCJdW2tleV07XHJcblx0XHRcdFx0XHRcdGFuc3dlcnNbY29uLmtleV1bXCJjaG9pY2VcIl0gPSBrZXk7XHJcblx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuaGFuZGxlQ29udmVyc2F0aW9uKGNoaWxkQ29uLCBhbnN3ZXJzKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IFxyXG5cdH1cclxuXHJcblx0Ly9UT0RPIGhhbmRsZSBpZiBzZXJ2ZXIgZXJyb3JcclxuXHRhc3luYyBydW5Ta2lsbChza2lsbCkge1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwicnVubmluZyBza2lsbCBcIiArIHNraWxsLm5hbWUgKyBcIiBcIiArIHNraWxsLmNvbnZlcnNhdGlvbi5sZW5ndGgpO1xyXG5cdFx0bGV0IGFuc3dlcnMgPSB7fTtcclxuXHRcdGlmKHNraWxsLmNvbnZlcnNhdGlvbi5sZW5ndGggPiAwKSB7XHJcblxyXG5cdFx0XHRsZXQgbmV3Q29udm8gPSBhd2FpdCB0aGlzLnNraWxsc1NlcnZpY2UucmVzb2x2ZVNraWxsKHNraWxsKS50b1Byb21pc2UoKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJyZXNvbHZlZCBjb252byBcIiwgbmV3Q29udm8pO1xyXG5cdFx0XHRza2lsbC5jb252ZXJzYXRpb24gPSBuZXdDb252bztcclxuXHRcdFx0YXdhaXQgdGhpcy5oYW5kbGVDb252ZXJzYXRpb24oc2tpbGwuY29udmVyc2F0aW9uLCBhbnN3ZXJzKTtcclxuXHRcdFx0Y29uc29sZS5sb2coYW5zd2Vycyk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc2tpbGxzU2VydmljZS5ydW5Ta2lsbChza2lsbCwgYW5zd2Vycykuc3Vic2NyaWJlKHI9PntcclxuXHRcdFx0Y29uc29sZS5sb2cocik7XHJcblx0XHRcdGlmKHIgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFRvYXN0Lm1ha2VUZXh0KFwiUmFuIFwiICsgc2tpbGwubmFtZSkuc2hvdygpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFRvYXN0Lm1ha2VUZXh0KFwiVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIHJ1bm5pbmcgdGhlIHNraWxsXCIgK3NraWxsLm5hbWUpLnNob3coKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvL1RPRE8gaGVyZSByZWZyZXNoIG9ubHkgb24gcmVmcmVzaCBidXR0b24gcHJlc3MsIG5hdmlnYXRpb24gYW5kIG9uIG9wZW5pbmcuLiBubyBpbnRlcnZhbHMgbmVlZGVkIFxyXG5cdHJlZnJlc2goKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcInJlZnJlc2hpbmcgc2tpbGxzXCIpO1xyXG5cdFx0dGhpcy5za2lsbHMgPSBbXTtcclxuXHRcdHRoaXMuY29ubmVjdGlvbkVycm9yID0gZmFsc2U7XHJcblx0XHR0aGlzLmxvYWRNYXNrID0gdHJ1ZTtcclxuXHRcdHRoaXMuc2tpbGxzU2VydmljZS5nZXRTa2lsbHMoKS5zdWJzY3JpYmUocj0+e1xyXG4gICAgICAgICAgICBpZihyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBcdHRoaXMuY29ubmVjdGlvbkVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHR0aGlzLnNraWxscyA9IHI7XHJcbiAgICAgICAgICAgIFx0dGhpcy5jb25uZWN0aW9uRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRNYXNrID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=