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
        this.connectionError = true;
        this.loadMask = true;
        this.skillsService.getSkills().subscribe(function (r) {
            if (r == undefined) {
                _this.connectionError = true;
            }
            else {
                console.log(r);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbURBQWlEO0FBQ2pELDBDQUE0QztBQUM1QyxxREFBdUQ7QUFDdkQsc0RBQStEO0FBTy9EO0lBT0MseUJBQ1MsYUFBNEIsRUFDNUIsZ0JBQWtDO1FBRGxDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsS0FBSyxFQUFFLEtBQUs7UUFDMUIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0YsQ0FBQztJQUVLLDRDQUFrQixHQUF4QixVQUF5QixJQUFJLEVBQUUsT0FBTzs7Ozs7O3dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzhCQUNGLEVBQUosYUFBSTs7OzZCQUFKLENBQUEsa0JBQUksQ0FBQTt3QkFBWCxHQUFHOzZCQUNQLEdBQUcsQ0FBQyxLQUFLLEVBQVQsd0JBQVM7d0JBQ0kscUJBQU0sT0FBTyxDQUFD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QUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDaEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUM5QixDQUFDO1lBQ0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBNUZXLGVBQWU7UUFMM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSx3Q0FBd0M7U0FDeEQsQ0FBQzt5Q0FVdUIsOEJBQWE7WUFDVix5QkFBZ0I7T0FUL0IsZUFBZSxDQThGM0I7SUFBRCxzQkFBQztDQUFBLEFBOUZELElBOEZDO0FBOUZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tIFwiLi9za2lsbHMuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic2tpbGxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZW50L3NraWxscy9za2lsbHMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBTa2lsbHNDb21wb25lbnQgeyBcblxuXHRwdWJsaWMgY29ubmVjdGlvbkVycm9yO1xuXG5cdHByaXZhdGUgc2tpbGxzO1xuXHRwcml2YXRlIGxvYWRNYXNrO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgc2tpbGxzU2VydmljZTogU2tpbGxzU2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcblx0KSB7XG5cdFx0dGhpcy5jb25uZWN0aW9uRXJyb3IgPSBmYWxzZTtcblx0XHR0aGlzLnNraWxscyA9IFtdO1xuXHRcdHRoaXMucmVmcmVzaCgpO1xuXHR9XG5cblx0b25Ta2lsbEVuYWJsZWQoZXZlbnQsIHNraWxsKSB7XG5cdFx0aWYoZXZlbnQudmFsdWUpIHtcblx0XHRcdHRoaXMuc2tpbGxzU2VydmljZS5lbmFibGVTa2lsbChza2lsbCkuc3Vic2NyaWJlKHI9Pnt9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5za2lsbHNTZXJ2aWNlLmRpc2FibGVTa2lsbChza2lsbCkuc3Vic2NyaWJlKHI9Pnt9KTtcblx0XHR9XG5cdH1cblxuXHRhc3luYyBoYW5kbGVDb252ZXJzYXRpb24oY29ucywgYW5zd2Vycykge1xuXHRcdGNvbnNvbGUubG9nKFwic3RhcnRcIik7XG5cdFx0Zm9yKGxldCBjb24gb2YgY29ucykge1xuXHRcdFx0aWYoY29uLmlucHV0KSB7XG5cdFx0XHRcdGNvbnN0IGFuc3dlciA9IGF3YWl0IGRpYWxvZ3MucHJvbXB0KHtcblx0XHRcdFx0ICAgIG1lc3NhZ2U6IGNvbi5wcm9tcHQsXG5cdFx0XHRcdCAgICBva0J1dHRvblRleHQ6IFwiT2tcIixcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGFuc3dlcnNbY29uLmtleV0gPSB7fTtcblx0XHRcdFx0YW5zd2Vyc1tjb24ua2V5XVtcInRleHRcIl0gPSBhbnN3ZXIudGV4dDtcblx0XHRcdFx0Y29uc29sZS5sb2coYW5zd2VyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF3YWl0IGRpYWxvZ3MuYWxlcnQoY29uLnByb21wdCk7XG5cdFx0XHR9XG5cdFx0XHRpZihjb24uc2VsZWN0aW9uKSB7XG5cdFx0XHRcdGZvcihsZXQga2V5IGluIGNvbi5zZWxlY3Rpb24pIHtcblx0XHRcdFx0XHRpZiAoYW5zd2Vyc1tjb24ua2V5XVtcInRleHRcIl0uaW5jbHVkZXMoa2V5KSl7XG5cdFx0XHRcdFx0XHRsZXQgY2hpbGRDb24gPSBjb25bXCJzZWxlY3Rpb25cIl1ba2V5XTtcblx0XHRcdFx0XHRcdGFuc3dlcnNbY29uLmtleV1bXCJjaG9pY2VcIl0gPSBrZXk7XG5cdFx0XHRcdFx0XHRhd2FpdCB0aGlzLmhhbmRsZUNvbnZlcnNhdGlvbihjaGlsZENvbiwgYW5zd2Vycyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IFxuXHR9XG5cblxuXHRhc3luYyBydW5Ta2lsbChza2lsbCkge1xuXG5cdFx0Y29uc29sZS5sb2coXCJydW5uaW5nIHNraWxsIFwiICsgc2tpbGwubmFtZSArIFwiIFwiICsgc2tpbGwuY29udmVyc2F0aW9uLmxlbmd0aCk7XG5cdFx0bGV0IGFuc3dlcnMgPSB7fTtcblx0XHRpZihza2lsbC5jb252ZXJzYXRpb24ubGVuZ3RoID4gMCkge1xuXG5cdFx0XHRsZXQgbmV3Q29udm8gPSBhd2FpdCB0aGlzLnNraWxsc1NlcnZpY2UucmVzb2x2ZVNraWxsKHNraWxsKS50b1Byb21pc2UoKTtcblx0XHRcdGNvbnNvbGUubG9nKFwicmVzb2x2ZWQgY29udm8gXCIsIG5ld0NvbnZvKTtcblx0XHRcdHNraWxsLmNvbnZlcnNhdGlvbiA9IG5ld0NvbnZvO1xuXHRcdFx0YXdhaXQgdGhpcy5oYW5kbGVDb252ZXJzYXRpb24oc2tpbGwuY29udmVyc2F0aW9uLCBhbnN3ZXJzKTtcblx0XHRcdGNvbnNvbGUubG9nKGFuc3dlcnMpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5za2lsbHNTZXJ2aWNlLnJ1blNraWxsKHNraWxsLCBhbnN3ZXJzKS5zdWJzY3JpYmUocj0+e1xuXHRcdFx0Y29uc29sZS5sb2cocik7XG5cdFx0XHRpZihyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0VG9hc3QubWFrZVRleHQoXCJSYW4gXCIgKyBza2lsbC5uYW1lKS5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRUb2FzdC5tYWtlVGV4dChcIlRoZXJlIHdhcyBhbiBlcnJvciB3aGlsZSBydW5uaW5nIHRoZSBza2lsbFwiICtza2lsbC5uYW1lKS5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvL1RPRE8gaGVyZSByZWZyZXNoIG9ubHkgb24gcmVmcmVzaCBidXR0b24gcHJlc3MsIG5hdmlnYXRpb24gYW5kIG9uIG9wZW5pbmcuLiBubyBpbnRlcnZhbHMgbmVlZGVkIFxuXHRyZWZyZXNoKCkge1xuXHRcdGNvbnNvbGUubG9nKFwicmVmcmVzaGluZyBza2lsbHNcIik7XG5cdFx0dGhpcy5za2lsbHMgPSBbXTtcblx0XHR0aGlzLmNvbm5lY3Rpb25FcnJvciA9IHRydWU7XG5cdFx0dGhpcy5sb2FkTWFzayA9IHRydWU7XG5cdFx0dGhpcy5za2lsbHNTZXJ2aWNlLmdldFNraWxscygpLnN1YnNjcmliZShyPT57XG4gICAgICAgICAgICBpZihyID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXHR0aGlzLmNvbm5lY3Rpb25FcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXHRjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgICAgIFx0dGhpcy5za2lsbHMgPSByO1xuICAgICAgICAgICAgXHR0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkTWFzayA9IGZhbHNlO1xuICAgICAgICB9KTtcblx0fVxuXG59XG4iXX0=