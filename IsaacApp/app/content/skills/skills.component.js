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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbGxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbURBQWlEO0FBQ2pELDBDQUE0QztBQUM1QyxxREFBdUQ7QUFDdkQsc0RBQStEO0FBTy9EO0lBT0MseUJBQ1MsYUFBNEIsRUFDNUIsZ0JBQWtDO1FBRGxDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsS0FBSyxFQUFFLEtBQUs7UUFDMUIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO0lBQ0YsQ0FBQztJQUVLLDRDQUFrQixHQUF4QixVQUF5QixJQUFJLEVBQUUsT0FBTzs7Ozs7O3dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzhCQUNGLEVBQUosYUFBSTs7OzZCQUFKLENBQUEsa0JBQUksQ0FBQTt3QkFBWCxHQUFHOzZCQUNQLEdBQUcsQ0FBQyxLQUFLLEVBQVQsd0JBQVM7d0JBQ0kscUJBQU0sT0FBTyxDQUFD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LENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ2hDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM3QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZixLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDOUIsQ0FBQztZQUNELEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQTVGVyxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsd0NBQXdDO1NBQ3hELENBQUM7eUNBVXVCLDhCQUFhO1lBQ1YseUJBQWdCO09BVC9CLGVBQWUsQ0E4RjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTlGRCxJQThGQztBQTlGWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTa2lsbHNTZXJ2aWNlIH0gZnJvbSBcIi4vc2tpbGxzLnNlcnZpY2VcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInNraWxsc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29udGVudC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgU2tpbGxzQ29tcG9uZW50IHsgXG5cblx0cHVibGljIGNvbm5lY3Rpb25FcnJvcjtcblxuXHRwcml2YXRlIHNraWxscztcblx0cHJpdmF0ZSBsb2FkTWFzaztcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHNraWxsc1NlcnZpY2U6IFNraWxsc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zXG5cdCkge1xuXHRcdHRoaXMuY29ubmVjdGlvbkVycm9yID0gZmFsc2U7XG5cdFx0dGhpcy5za2lsbHMgPSBbXTtcblx0XHR0aGlzLnJlZnJlc2goKTtcblx0fVxuXG5cdG9uU2tpbGxFbmFibGVkKGV2ZW50LCBza2lsbCkge1xuXHRcdGlmKGV2ZW50LnZhbHVlKSB7XG5cdFx0XHR0aGlzLnNraWxsc1NlcnZpY2UuZW5hYmxlU2tpbGwoc2tpbGwpLnN1YnNjcmliZShyPT57fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2tpbGxzU2VydmljZS5kaXNhYmxlU2tpbGwoc2tpbGwpLnN1YnNjcmliZShyPT57fSk7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgaGFuZGxlQ29udmVyc2F0aW9uKGNvbnMsIGFuc3dlcnMpIHtcblx0XHRjb25zb2xlLmxvZyhcInN0YXJ0XCIpO1xuXHRcdGZvcihsZXQgY29uIG9mIGNvbnMpIHtcblx0XHRcdGlmKGNvbi5pbnB1dCkge1xuXHRcdFx0XHRjb25zdCBhbnN3ZXIgPSBhd2FpdCBkaWFsb2dzLnByb21wdCh7XG5cdFx0XHRcdCAgICBtZXNzYWdlOiBjb24ucHJvbXB0LFxuXHRcdFx0XHQgICAgb2tCdXR0b25UZXh0OiBcIk9rXCIsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRhbnN3ZXJzW2Nvbi5rZXldID0ge307XG5cdFx0XHRcdGFuc3dlcnNbY29uLmtleV1bXCJ0ZXh0XCJdID0gYW5zd2VyLnRleHQ7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGFuc3dlcik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhd2FpdCBkaWFsb2dzLmFsZXJ0KGNvbi5wcm9tcHQpO1xuXHRcdFx0fVxuXHRcdFx0aWYoY29uLnNlbGVjdGlvbikge1xuXHRcdFx0XHRmb3IobGV0IGtleSBpbiBjb24uc2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0aWYgKGFuc3dlcnNbY29uLmtleV1bXCJ0ZXh0XCJdLmluY2x1ZGVzKGtleSkpe1xuXHRcdFx0XHRcdFx0bGV0IGNoaWxkQ29uID0gY29uW1wic2VsZWN0aW9uXCJdW2tleV07XG5cdFx0XHRcdFx0XHRhbnN3ZXJzW2Nvbi5rZXldW1wiY2hvaWNlXCJdID0ga2V5O1xuXHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5oYW5kbGVDb252ZXJzYXRpb24oY2hpbGRDb24sIGFuc3dlcnMpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBcblx0fVxuXG5cdC8vVE9ETyBoYW5kbGUgaWYgc2VydmVyIGVycm9yXG5cdGFzeW5jIHJ1blNraWxsKHNraWxsKSB7XG5cblx0XHRjb25zb2xlLmxvZyhcInJ1bm5pbmcgc2tpbGwgXCIgKyBza2lsbC5uYW1lICsgXCIgXCIgKyBza2lsbC5jb252ZXJzYXRpb24ubGVuZ3RoKTtcblx0XHRsZXQgYW5zd2VycyA9IHt9O1xuXHRcdGlmKHNraWxsLmNvbnZlcnNhdGlvbi5sZW5ndGggPiAwKSB7XG5cblx0XHRcdGxldCBuZXdDb252byA9IGF3YWl0IHRoaXMuc2tpbGxzU2VydmljZS5yZXNvbHZlU2tpbGwoc2tpbGwpLnRvUHJvbWlzZSgpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJyZXNvbHZlZCBjb252byBcIiwgbmV3Q29udm8pO1xuXHRcdFx0c2tpbGwuY29udmVyc2F0aW9uID0gbmV3Q29udm87XG5cdFx0XHRhd2FpdCB0aGlzLmhhbmRsZUNvbnZlcnNhdGlvbihza2lsbC5jb252ZXJzYXRpb24sIGFuc3dlcnMpO1xuXHRcdFx0Y29uc29sZS5sb2coYW5zd2Vycyk7XG5cblx0XHR9XG5cblx0XHR0aGlzLnNraWxsc1NlcnZpY2UucnVuU2tpbGwoc2tpbGwsIGFuc3dlcnMpLnN1YnNjcmliZShyPT57XG5cdFx0XHRjb25zb2xlLmxvZyhyKTtcblx0XHRcdGlmKHIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRUb2FzdC5tYWtlVGV4dChcIlJhbiBcIiArIHNraWxsLm5hbWUpLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFRvYXN0Lm1ha2VUZXh0KFwiVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIHJ1bm5pbmcgdGhlIHNraWxsXCIgK3NraWxsLm5hbWUpLnNob3coKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8vVE9ETyBoZXJlIHJlZnJlc2ggb25seSBvbiByZWZyZXNoIGJ1dHRvbiBwcmVzcywgbmF2aWdhdGlvbiBhbmQgb24gb3BlbmluZy4uIG5vIGludGVydmFscyBuZWVkZWQgXG5cdHJlZnJlc2goKSB7XG5cdFx0Y29uc29sZS5sb2coXCJyZWZyZXNoaW5nIHNraWxsc1wiKTtcblx0XHR0aGlzLnNraWxscyA9IFtdO1xuXHRcdHRoaXMuY29ubmVjdGlvbkVycm9yID0gdHJ1ZTtcblx0XHR0aGlzLmxvYWRNYXNrID0gdHJ1ZTtcblx0XHR0aGlzLnNraWxsc1NlcnZpY2UuZ2V0U2tpbGxzKCkuc3Vic2NyaWJlKHI9PntcbiAgICAgICAgICAgIGlmKHIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBcdHRoaXMuY29ubmVjdGlvbkVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBcdGNvbnNvbGUubG9nKHIpO1xuICAgICAgICAgICAgXHR0aGlzLnNraWxscyA9IHI7XG4gICAgICAgICAgICBcdHRoaXMuY29ubmVjdGlvbkVycm9yID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvYWRNYXNrID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXHR9XG5cbn1cbiJdfQ==