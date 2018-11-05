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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbURBQWlEO0FBQ2pELDBDQUE0QztBQUM1QyxxREFBdUQ7QUFDdkQsc0RBQStEO0FBTy9EO0lBT0MseUJBQ1MsYUFBNEIsRUFDNUIsZ0JBQWtDO1FBRGxDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsS0FBSyxFQUFFLEtBQUs7UUFDMUIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0YsQ0FBQztJQUVLLDRDQUFrQixHQUF4QixVQUF5QixJQUFJLEVBQUUsT0FBTzs7Ozs7O3dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzhCQUNGLEVBQUosYUFBSTs7OzZCQUFKLENBQUEsa0JBQUksQ0FBQTt3QkFBWCxHQUFHOzZCQUNQLEdBQUcsQ0FBQyxLQUFLLEVBQVQsd0JBQVM7d0JBQ0kscUJBQU0sT0FBTyxDQUFD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LENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ2hDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM3QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzlCLENBQUM7WUFDRCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUEzRlcsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHdDQUF3QztTQUN4RCxDQUFDO3lDQVV1Qiw4QkFBYTtZQUNWLHlCQUFnQjtPQVQvQixlQUFlLENBNkYzQjtJQUFELHNCQUFDO0NBQUEsQUE3RkQsSUE2RkM7QUE3RlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gXCIuL3NraWxscy5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJza2lsbHNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbnRlbnQvc2tpbGxzL3NraWxscy5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIFNraWxsc0NvbXBvbmVudCB7IFxuXG5cdHB1YmxpYyBjb25uZWN0aW9uRXJyb3I7XG5cblx0cHJpdmF0ZSBza2lsbHM7XG5cdHByaXZhdGUgbG9hZE1hc2s7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBza2lsbHNTZXJ2aWNlOiBTa2lsbHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuXHQpIHtcblx0XHR0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xuXHRcdHRoaXMuc2tpbGxzID0gW107XG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cdH1cblxuXHRvblNraWxsRW5hYmxlZChldmVudCwgc2tpbGwpIHtcblx0XHRpZihldmVudC52YWx1ZSkge1xuXHRcdFx0dGhpcy5za2lsbHNTZXJ2aWNlLmVuYWJsZVNraWxsKHNraWxsKS5zdWJzY3JpYmUocj0+e30pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNraWxsc1NlcnZpY2UuZGlzYWJsZVNraWxsKHNraWxsKS5zdWJzY3JpYmUocj0+e30pO1xuXHRcdH1cblx0fVxuXG5cdGFzeW5jIGhhbmRsZUNvbnZlcnNhdGlvbihjb25zLCBhbnN3ZXJzKSB7XG5cdFx0Y29uc29sZS5sb2coXCJzdGFydFwiKTtcblx0XHRmb3IobGV0IGNvbiBvZiBjb25zKSB7XG5cdFx0XHRpZihjb24uaW5wdXQpIHtcblx0XHRcdFx0Y29uc3QgYW5zd2VyID0gYXdhaXQgZGlhbG9ncy5wcm9tcHQoe1xuXHRcdFx0XHQgICAgbWVzc2FnZTogY29uLnByb21wdCxcblx0XHRcdFx0ICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0YW5zd2Vyc1tjb24ua2V5XSA9IHt9O1xuXHRcdFx0XHRhbnN3ZXJzW2Nvbi5rZXldW1widGV4dFwiXSA9IGFuc3dlci50ZXh0O1xuXHRcdFx0XHRjb25zb2xlLmxvZyhhbnN3ZXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXdhaXQgZGlhbG9ncy5hbGVydChjb24ucHJvbXB0KTtcblx0XHRcdH1cblx0XHRcdGlmKGNvbi5zZWxlY3Rpb24pIHtcblx0XHRcdFx0Zm9yKGxldCBrZXkgaW4gY29uLnNlbGVjdGlvbikge1xuXHRcdFx0XHRcdGlmIChhbnN3ZXJzW2Nvbi5rZXldW1widGV4dFwiXS5pbmNsdWRlcyhrZXkpKXtcblx0XHRcdFx0XHRcdGxldCBjaGlsZENvbiA9IGNvbltcInNlbGVjdGlvblwiXVtrZXldO1xuXHRcdFx0XHRcdFx0YW5zd2Vyc1tjb24ua2V5XVtcImNob2ljZVwiXSA9IGtleTtcblx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuaGFuZGxlQ29udmVyc2F0aW9uKGNoaWxkQ29uLCBhbnN3ZXJzKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gXG5cdH1cblxuXHQvL1RPRE8gaGFuZGxlIGlmIHNlcnZlciBlcnJvclxuXHRhc3luYyBydW5Ta2lsbChza2lsbCkge1xuXG5cdFx0Y29uc29sZS5sb2coXCJydW5uaW5nIHNraWxsIFwiICsgc2tpbGwubmFtZSArIFwiIFwiICsgc2tpbGwuY29udmVyc2F0aW9uLmxlbmd0aCk7XG5cdFx0bGV0IGFuc3dlcnMgPSB7fTtcblx0XHRpZihza2lsbC5jb252ZXJzYXRpb24ubGVuZ3RoID4gMCkge1xuXG5cdFx0XHRsZXQgbmV3Q29udm8gPSBhd2FpdCB0aGlzLnNraWxsc1NlcnZpY2UucmVzb2x2ZVNraWxsKHNraWxsKS50b1Byb21pc2UoKTtcblx0XHRcdGNvbnNvbGUubG9nKFwicmVzb2x2ZWQgY29udm8gXCIsIG5ld0NvbnZvKTtcblx0XHRcdHNraWxsLmNvbnZlcnNhdGlvbiA9IG5ld0NvbnZvO1xuXHRcdFx0YXdhaXQgdGhpcy5oYW5kbGVDb252ZXJzYXRpb24oc2tpbGwuY29udmVyc2F0aW9uLCBhbnN3ZXJzKTtcblx0XHRcdGNvbnNvbGUubG9nKGFuc3dlcnMpO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy5za2lsbHNTZXJ2aWNlLnJ1blNraWxsKHNraWxsLCBhbnN3ZXJzKS5zdWJzY3JpYmUocj0+e1xuXHRcdFx0Y29uc29sZS5sb2cocik7XG5cdFx0XHRpZihyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0VG9hc3QubWFrZVRleHQoXCJSYW4gXCIgKyBza2lsbC5uYW1lKS5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRUb2FzdC5tYWtlVGV4dChcIlRoZXJlIHdhcyBhbiBlcnJvciB3aGlsZSBydW5uaW5nIHRoZSBza2lsbFwiICtza2lsbC5uYW1lKS5zaG93KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvL1RPRE8gaGVyZSByZWZyZXNoIG9ubHkgb24gcmVmcmVzaCBidXR0b24gcHJlc3MsIG5hdmlnYXRpb24gYW5kIG9uIG9wZW5pbmcuLiBubyBpbnRlcnZhbHMgbmVlZGVkIFxuXHRyZWZyZXNoKCkge1xuXHRcdGNvbnNvbGUubG9nKFwicmVmcmVzaGluZyBza2lsbHNcIik7XG5cdFx0dGhpcy5za2lsbHMgPSBbXTtcblx0XHR0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xuXHRcdHRoaXMubG9hZE1hc2sgPSB0cnVlO1xuXHRcdHRoaXMuc2tpbGxzU2VydmljZS5nZXRTa2lsbHMoKS5zdWJzY3JpYmUocj0+e1xuICAgICAgICAgICAgaWYociA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIFx0dGhpcy5jb25uZWN0aW9uRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFx0dGhpcy5za2lsbHMgPSByO1xuICAgICAgICAgICAgXHR0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkTWFzayA9IGZhbHNlO1xuICAgICAgICB9KTtcblx0fVxuXG59XG4iXX0=