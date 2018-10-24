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
            var answers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("running skill " + skill.name + " " + skill.conversation.length);
                        if (!(skill.conversation.length > 0)) return [3 /*break*/, 2];
                        answers = {};
                        return [4 /*yield*/, this.handleConversation(skill.conversation, answers)];
                    case 1:
                        _a.sent();
                        console.log(answers);
                        return [2 /*return*/];
                    case 2:
                        this.skillsService.runSkill(skill).subscribe(function (r) {
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
            if (r === null) {
                _this.connectionError = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbURBQWlEO0FBQ2pELDBDQUE0QztBQUM1QyxxREFBdUQ7QUFDdkQsc0RBQStEO0FBTy9EO0lBT0MseUJBQ1MsYUFBNEIsRUFDNUIsZ0JBQWtDO1FBRGxDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLEtBQUssRUFBRSxLQUFLO1FBQzVCOzs7OzttQkFLSztJQUVKLENBQUM7SUFFSyw0Q0FBa0IsR0FBeEIsVUFBeUIsSUFBSSxFQUFFLE9BQU87Ozs7Ozt3QkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs4QkFDRixFQUFKLGFBQUk7Ozs2QkFBSixDQUFBLGtCQUFJLENBQUE7d0JBQVgsR0FBRzs2QkFDUCxHQUFHLENBQUMsS0FBSyxFQUFULHdCQUFTO3dCQUNJLHFCQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0NBQ2hDLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTTtnQ0FDbkIsWUFBWSxFQUFFLElBQUk7NkJBQ3JCLENBQUMsRUFBQTs7d0JBSEksTUFBTSxHQUFHLFNBR2I7d0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFB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QztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUF4RlcsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHdDQUF3QztTQUN4RCxDQUFDO3lDQVV1Qiw4QkFBYTtZQUNWLHlCQUFnQjtPQVQvQixlQUFlLENBMEYzQjtJQUFELHNCQUFDO0NBQUEsQUExRkQsSUEwRkM7QUExRlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gXCIuL3NraWxscy5zZXJ2aWNlXCI7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJza2lsbHNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbnRlbnQvc2tpbGxzL3NraWxscy5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIFNraWxsc0NvbXBvbmVudCB7IFxuXG5cdHB1YmxpYyBjb25uZWN0aW9uRXJyb3I7XG5cblx0cHJpdmF0ZSBza2lsbHM7XG5cdHByaXZhdGUgbG9hZE1hc2s7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBza2lsbHNTZXJ2aWNlOiBTa2lsbHNTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuXHQpIHtcblx0XHRjb25zb2xlLmxvZyhcInNraWxscyBjb25zdHJ1Y3RvclwiKTtcblx0XHR0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xuXHRcdHRoaXMuc2tpbGxzID0gW107XG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cdH1cblxuXHRvblNraWxsRW5hYmxlZChldmVudCwgc2tpbGwpIHtcbi8qXHRcdGNvbnNvbGUuZGlyKGV2ZW50KTtcblx0XHRpZihldmVudC52YWx1ZSkge1xuXHRcdFx0dGhpcy5za2lsbHNTZXJ2aWNlLmVuYWJsZVNraWxsKHNraWxsKS5zdWJzY3JpYmUocj0+e30pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNraWxsc1NlcnZpY2UuZGlzYWJsZVNraWxsKHNraWxsKS5zdWJzY3JpYmUocj0+e30pO1xuXHRcdH0qL1xuXHRcdFxuXHR9XG5cblx0YXN5bmMgaGFuZGxlQ29udmVyc2F0aW9uKGNvbnMsIGFuc3dlcnMpIHtcblx0XHRjb25zb2xlLmxvZyhcInN0YXJ0XCIpO1xuXHRcdGZvcihsZXQgY29uIG9mIGNvbnMpIHtcblx0XHRcdGlmKGNvbi5pbnB1dCkge1xuXHRcdFx0XHRjb25zdCBhbnN3ZXIgPSBhd2FpdCBkaWFsb2dzLnByb21wdCh7XG5cdFx0XHRcdCAgICBtZXNzYWdlOiBjb24ucHJvbXB0LFxuXHRcdFx0XHQgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRhbnN3ZXJzW2Nvbi5rZXldID0ge307XG5cdFx0XHRcdGFuc3dlcnNbY29uLmtleV1bXCJ0ZXh0XCJdID0gYW5zd2VyLnRleHQ7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGFuc3dlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhd2FpdCBkaWFsb2dzLmFsZXJ0KGNvbi5wcm9tcHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYoY29uLnNlbGVjdGlvbikge1xuXHRcdFx0XHRmb3IobGV0IGtleSBpbiBjb24uc2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0aWYgKGFuc3dlcnNbY29uLmtleV1bXCJ0ZXh0XCJdLmluY2x1ZGVzKGtleSkpe1xuXHRcdFx0XHRcdFx0bGV0IGNoaWxkQ29uID0gY29uW1wic2VsZWN0aW9uXCJdW2tleV07XG5cdFx0XHRcdFx0XHRhbnN3ZXJzW2Nvbi5rZXldW1wiY2hvaWNlXCJdID0ga2V5O1xuXHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5oYW5kbGVDb252ZXJzYXRpb24oY2hpbGRDb24sIGFuc3dlcnMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBcblx0fVxuXG5cdGFzeW5jIHJ1blNraWxsKHNraWxsKSB7XG5cdFx0Y29uc29sZS5sb2coXCJydW5uaW5nIHNraWxsIFwiICsgc2tpbGwubmFtZSArIFwiIFwiICsgc2tpbGwuY29udmVyc2F0aW9uLmxlbmd0aCk7XG5cdFx0aWYoc2tpbGwuY29udmVyc2F0aW9uLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vdG9kbyByZXNvbHZlIGNvbnZvXG5cdFx0XHRsZXQgYW5zd2VycyA9IHt9O1xuXHRcdFx0YXdhaXQgdGhpcy5oYW5kbGVDb252ZXJzYXRpb24oc2tpbGwuY29udmVyc2F0aW9uLCBhbnN3ZXJzKTtcblx0XHRcdGNvbnNvbGUubG9nKGFuc3dlcnMpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnNraWxsc1NlcnZpY2UucnVuU2tpbGwoc2tpbGwpLnN1YnNjcmliZShyPT57XG5cdFx0XHRjb25zb2xlLmxvZyhyKTtcblx0XHRcdGlmKHIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRUb2FzdC5tYWtlVGV4dChcIlJhbiBcIiArIHNraWxsLm5hbWUpLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFRvYXN0Lm1ha2VUZXh0KFwiVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIHJ1bm5pbmcgdGhlIHNraWxsXCIgK3NraWxsLm5hbWUpLnNob3coKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8vVE9ETyBoZXJlIHJlZnJlc2ggb25seSBvbiByZWZyZXNoIGJ1dHRvbiBwcmVzcywgbmF2aWdhdGlvbiBhbmQgb24gb3BlbmluZy4uIG5vIGludGVydmFscyBuZWVkZWQgXG5cdHJlZnJlc2goKSB7XG5cdFx0Y29uc29sZS5sb2coXCJyZWZyZXNoaW5nIHNraWxsc1wiKTtcblx0XHR0aGlzLnNraWxscyA9IFtdO1xuXHRcdHRoaXMuY29ubmVjdGlvbkVycm9yID0gZmFsc2U7XG5cdFx0dGhpcy5sb2FkTWFzayA9IHRydWU7XG5cdFx0dGhpcy5za2lsbHNTZXJ2aWNlLmdldFNraWxscygpLnN1YnNjcmliZShyPT57XG4gICAgICAgICAgICBpZihyID09PSBudWxsKSB7XG4gICAgICAgICAgICBcdHRoaXMuY29ubmVjdGlvbkVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcdGNvbnNvbGUubG9nKHIpO1xuICAgICAgICAgICAgXHR0aGlzLnNraWxscyA9IHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvYWRNYXNrID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXHR9XG5cbn1cbiJdfQ==