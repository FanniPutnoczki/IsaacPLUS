"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var skills_service_1 = require("../skills/skills.service");
var list_dialog_1 = require("../../shared/dialogs/list.dialog");
var date_picker_dialog_1 = require("../../shared/dialogs/date.picker.dialog");
var routines_service_1 = require("./routines.service");
var router_2 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var RoutinesAddComponent = /** @class */ (function () {
    function RoutinesAddComponent(pageRoute, modalService, skillsService, routinesService, viewContainerRef, routerExtensions) {
        var _this = this;
        this.pageRoute = pageRoute;
        this.modalService = modalService;
        this.skillsService = skillsService;
        this.routinesService = routinesService;
        this.viewContainerRef = viewContainerRef;
        this.routerExtensions = routerExtensions;
        this.days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        this.getSkills();
        this.skillNameMap = {};
        this.pageRoute.activatedRoute.pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; })).forEach(function (params) { _this.id = params["id"]; console.log(_this.id); });
        var d = new Date();
        this.routine = {
            days: [false, false, false, false, false, false, false],
            skills: [],
            date: {
                day: d.getDate(),
                month: d.getMonth() + 1,
                year: d.getFullYear()
            },
            name: '',
            recurring: false,
            message: '',
            enabled: true
        };
        this.setFormattedDate();
        if (this.id) {
            this.routinesService.getRoutine(this.id).subscribe(function (r) {
                if (r) {
                    console.log(r);
                    _this.routine = r;
                    _this.setFormattedDate();
                    _this.setTime();
                }
                else {
                    //TODO handle error
                }
            });
        }
    }
    RoutinesAddComponent.prototype.setFormattedDate = function () {
        var options = { year: '2-digit', month: 'short', day: 'numeric' };
        this.dayDisplay = new Date(this.routine.date.year, this.routine.date.month - 1, this.routine.date.day).toLocaleDateString('en-US', options);
        console.log(this.dayDisplay);
    };
    RoutinesAddComponent.prototype.getSkills = function () {
        var _this = this;
        this.skillsService.getSkills().subscribe(function (r) {
            if (r) {
                _this.skills = r;
                for (var _i = 0, r_1 = r; _i < r_1.length; _i++) {
                    var skill = r_1[_i];
                    _this.skillNameMap[skill.name] = skill.full_name;
                }
            }
            else {
                _this.skills = [];
            }
        });
    };
    RoutinesAddComponent.prototype.removeSkill = function (s) {
        var newSkills = [];
        for (var _i = 0, _a = this.routine.skills; _i < _a.length; _i++) {
            var skill = _a[_i];
            if (skill !== s) {
                newSkills.push(skill);
            }
        }
        this.routine.skills = newSkills;
    };
    RoutinesAddComponent.prototype.pickDate = function () {
        var _this = this;
        this.modalService.showModal(date_picker_dialog_1.DatePickerDialog, {
            viewContainerRef: this.viewContainerRef,
            context: {
                date: this.routine.date
            }
        }).then(function (r) {
            if (r.result) {
                console.log(r.date);
                _this.routine.date = r.date;
                _this.setFormattedDate();
            }
        });
    };
    RoutinesAddComponent.prototype.pickSkill = function () {
        var _this = this;
        this.modalService.showModal(list_dialog_1.ListDialog, {
            viewContainerRef: this.viewContainerRef,
            context: {
                items: this.skills,
                key: "full_name",
                searchBar: true
            }
        }).then(function (r) {
            if (r.result) {
                _this.routine.skills.push(r.data.name);
            }
        });
    };
    RoutinesAddComponent.prototype.onPickerLoaded = function (args) {
        this.timePicker = args.object;
        this.setTime();
    };
    RoutinesAddComponent.prototype.cancel = function () {
        this.routerExtensions.navigate(["/content"], {
            transition: {
                name: "fade",
                duration: 500,
                curve: "linear"
            }
        });
    };
    RoutinesAddComponent.prototype.setTime = function () {
        if (this.timePicker) {
            this.timePicker.hour = this.routine.time.hour;
            this.timePicker.minute = this.routine.time.minute;
        }
    };
    RoutinesAddComponent.prototype.done = function () {
        var _this = this;
        this.routine.time = {
            hour: this.timePicker.hour,
            minute: this.timePicker.minute
        };
        //TODO validate
        var valid = true;
        if (valid) {
            console.log(this.routine);
            this.routinesService.addRoutine(this.routine).subscribe(function (r) {
                _this.routerExtensions.navigate(["/content"], {
                    transition: {
                        name: "fade",
                        duration: 500,
                        curve: "linear"
                    }
                });
            });
        }
    };
    RoutinesAddComponent = __decorate([
        core_1.Component({
            selector: "routines-add",
            templateUrl: "./content/routines/routines.add.component.html"
        }),
        __metadata("design:paramtypes", [router_2.PageRoute,
            modal_dialog_1.ModalDialogService,
            skills_service_1.SkillsService,
            routines_service_1.RoutinesService,
            core_1.ViewContainerRef,
            router_1.RouterExtensions])
    ], RoutinesAddComponent);
    return RoutinesAddComponent;
}());
exports.RoutinesAddComponent = RoutinesAddComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZXMuYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRpbmVzLmFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFFNUQsc0RBQStEO0FBQy9ELGtFQUF1RTtBQUN2RSwyREFBeUQ7QUFDekQsZ0VBQThEO0FBQzlELDhFQUEyRTtBQUUzRSx1REFBcUQ7QUFDckQsc0RBQXdEO0FBQ3hELDRDQUEyQztBQU0zQztJQVVJLDhCQUNZLFNBQW9CLEVBQ3ZCLFlBQWdDLEVBQ2hDLGFBQTRCLEVBQzVCLGVBQWdDLEVBQzdCLGdCQUFrQyxFQUNsQyxnQkFBa0M7UUFOOUMsaUJBNENDO1FBM0NXLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFaekMsU0FBSSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFjNUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDckQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLElBQU8sS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO1FBRTNFLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNYLElBQUksRUFBRSxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNLEVBQUUsRUFBRTtZQUNWLElBQUksRUFBRTtnQkFDTCxHQUFHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDO2dCQUNyQixJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRTthQUNyQjtZQUNELElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLEtBQUs7WUFDaEIsT0FBTyxFQUFFLEVBQUU7WUFDWCxPQUFPLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO2dCQUNoRCxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUN4QixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osbUJBQW1CO2dCQUN2QixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBRUwsQ0FBQztJQUVELCtDQUFnQixHQUFoQjtRQUNGLElBQUksT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMxSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsd0NBQVMsR0FBVDtRQUFBLGlCQWFDO1FBWEEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ3RDLEVBQUUsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ1YsR0FBRyxDQUFBLENBQWMsVUFBQyxFQUFELE9BQUMsRUFBRCxlQUFDLEVBQUQsSUFBQztvQkFBZCxJQUFJLEtBQUssVUFBQTtvQkFDVCxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO2lCQUNuRDtZQUNSLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxLQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsQixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLENBQVM7UUFDcEIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEdBQUcsQ0FBQSxDQUFjLFVBQW1CLEVBQW5CLEtBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQW5CLGNBQW1CLEVBQW5CLElBQW1CO1lBQWhDLElBQUksS0FBSyxTQUFBO1lBQ1osRUFBRSxDQUFBLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsQ0FBQztTQUNEO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQ2pDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxxQ0FBZ0IsRUFBRTtZQUM3QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLE9BQU8sRUFBRTtnQkFDUixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO2FBQ3ZCO1NBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDUixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDM0IsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDekIsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFBQSxpQkFlQztRQWRBLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHdCQUFVLEVBQUU7WUFDdkMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxPQUFPLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNsQixHQUFHLEVBQUUsV0FBVztnQkFDaEIsU0FBUyxFQUFFLElBQUk7YUFDZjtTQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBRVIsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsQ0FBQztRQUVGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELDZDQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBSSxDQUFDLFVBQVUsR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEQsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBSSxHQUFKO1FBQUEsaUJBc0JDO1FBcEJBLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTTtTQUM5QixDQUFDO1FBRUYsZUFBZTtRQUNmLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUVqQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDdEMsVUFBVSxFQUFFO3dCQUNSLElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSxHQUFHO3dCQUNiLEtBQUssRUFBRSxRQUFRO3FCQUNsQjtpQkFDSixDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7SUFDRixDQUFDO0lBbktRLG9CQUFvQjtRQUpoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLGdEQUFnRDtTQUNoRSxDQUFDO3lDQVl5QixrQkFBUztZQUNULGlDQUFrQjtZQUNqQiw4QkFBYTtZQUNYLGtDQUFlO1lBQ1gsdUJBQWdCO1lBQ2hCLHlCQUFnQjtPQWhCckMsb0JBQW9CLENBcUtoQztJQUFELDJCQUFDO0NBQUEsQUFyS0QsSUFxS0M7QUFyS1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2tpbGxzL3NraWxscy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMaXN0RGlhbG9nIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kaWFsb2dzL2xpc3QuZGlhbG9nXCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyRGlhbG9nIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kaWFsb2dzL2RhdGUucGlja2VyLmRpYWxvZ1wiO1xuaW1wb3J0IHsgVGltZVBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RpbWUtcGlja2VyXCI7XG5pbXBvcnQgeyBSb3V0aW5lc1NlcnZpY2UgfSBmcm9tIFwiLi9yb3V0aW5lcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicm91dGluZXMtYWRkXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZW50L3JvdXRpbmVzL3JvdXRpbmVzLmFkZC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmVzQWRkQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIHNraWxscztcblx0cHJpdmF0ZSByb3V0aW5lO1xuXHRwcml2YXRlIGRheXMgPSBbJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJywgJ1MnXTtcblx0cHJpdmF0ZSBkYXlEaXNwbGF5O1xuXHRwcml2YXRlIHRpbWVQaWNrZXI7XG4gICAgcHJpdmF0ZSBpZDtcbiAgICBwcml2YXRlIHNraWxsTmFtZU1hcDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgIFx0cHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBcdHByaXZhdGUgc2tpbGxzU2VydmljZTogU2tpbGxzU2VydmljZSxcbiAgICBcdHByaXZhdGUgcm91dGluZXNTZXJ2aWNlOiBSb3V0aW5lc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cbiAgICAgICAgdGhpcy5nZXRTa2lsbHMoKTtcbiAgICAgICAgdGhpcy5za2lsbE5hbWVNYXAgPSB7fTtcblxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHsgdGhpcy5pZCA9IHBhcmFtc1tcImlkXCJdOyBjb25zb2xlLmxvZyh0aGlzLmlkKTt9KTtcblxuICAgIFx0bGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIFx0dGhpcy5yb3V0aW5lID0ge1xuICAgICAgICBcdGRheXM6IFtmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV0sXG4gICAgICAgIFx0c2tpbGxzOiBbXSxcbiAgICAgICAgXHRkYXRlOiB7XG4gICAgICAgIFx0XHRkYXk6IGQuZ2V0RGF0ZSgpLFxuICAgICAgICBcdFx0bW9udGg6IGQuZ2V0TW9udGgoKSsxLFxuICAgICAgICBcdFx0eWVhcjogZC5nZXRGdWxsWWVhcigpXG4gICAgICAgIFx0fSxcbiAgICAgICAgXHRuYW1lOiAnJyxcbiAgICAgICAgXHRyZWN1cnJpbmc6IGZhbHNlLFxuICAgICAgICBcdG1lc3NhZ2U6ICcnLFxuICAgICAgICBcdGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRGb3JtYXR0ZWREYXRlKCk7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmlkKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRpbmVzU2VydmljZS5nZXRSb3V0aW5lKHRoaXMuaWQpLnN1YnNjcmliZShyID0+IHtcbiAgICAgICAgICAgICAgICBpZihyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmUgPSByO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZvcm1hdHRlZERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXRGb3JtYXR0ZWREYXRlKCkge1xuXHRcdHZhciBvcHRpb25zID0geyB5ZWFyOiAnMi1kaWdpdCcsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJyB9O1xuICAgICAgICB0aGlzLmRheURpc3BsYXkgPSBuZXcgRGF0ZSh0aGlzLnJvdXRpbmUuZGF0ZS55ZWFyLCB0aGlzLnJvdXRpbmUuZGF0ZS5tb250aC0xLCB0aGlzLnJvdXRpbmUuZGF0ZS5kYXkpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXlEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBnZXRTa2lsbHMoKSB7XG5cbiAgICBcdHRoaXMuc2tpbGxzU2VydmljZS5nZXRTa2lsbHMoKS5zdWJzY3JpYmUociA9PiB7XG4gICAgICAgIFx0aWYocikge1xuICAgICAgICBcdFx0dGhpcy5za2lsbHMgPSByO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgc2tpbGwgb2Ygcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNraWxsTmFtZU1hcFtza2lsbC5uYW1lXSA9IHNraWxsLmZ1bGxfbmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdHRoaXMuc2tpbGxzID0gW107XG4gICAgICAgIFx0fVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHJlbW92ZVNraWxsKHM6IHN0cmluZykge1xuICAgIFx0bGV0IG5ld1NraWxscyA9IFtdO1xuICAgIFx0Zm9yKGxldCBza2lsbCBvZiB0aGlzLnJvdXRpbmUuc2tpbGxzKSB7XG4gICAgXHRcdGlmKHNraWxsICE9PSBzKSB7XG4gICAgXHRcdFx0bmV3U2tpbGxzLnB1c2goc2tpbGwpO1xuICAgIFx0XHR9XG4gICAgXHR9XG4gICAgXHR0aGlzLnJvdXRpbmUuc2tpbGxzID0gbmV3U2tpbGxzO1xuICAgIH1cblxuICAgIHBpY2tEYXRlKCkge1xuICAgIFx0dGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKERhdGVQaWNrZXJEaWFsb2csIHtcbiAgICBcdFx0dmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmLFxuICAgIFx0XHRjb250ZXh0OiB7XG4gICAgXHRcdFx0ZGF0ZTogdGhpcy5yb3V0aW5lLmRhdGVcbiAgICBcdFx0fVxuICAgIFx0fSkudGhlbihyID0+IHtcbiAgICBcdFx0aWYoci5yZXN1bHQpIHtcbiAgICBcdFx0XHRjb25zb2xlLmxvZyhyLmRhdGUpO1xuICAgIFx0XHRcdHRoaXMucm91dGluZS5kYXRlID0gci5kYXRlO1xuICAgIFx0XHRcdHRoaXMuc2V0Rm9ybWF0dGVkRGF0ZSgpO1xuICAgIFx0XHR9XG4gICAgXHR9KTtcbiAgICB9XG5cbiAgICBwaWNrU2tpbGwoKSB7XG4gICAgXHR0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoTGlzdERpYWxvZywge1xuICAgIFx0XHR2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWYsXG4gICAgXHRcdGNvbnRleHQ6IHtcbiAgICBcdFx0XHRpdGVtczogdGhpcy5za2lsbHMsXG4gICAgXHRcdFx0a2V5OiBcImZ1bGxfbmFtZVwiLFxuICAgIFx0XHRcdHNlYXJjaEJhcjogdHJ1ZVxuICAgIFx0XHR9XG4gICAgXHR9KS50aGVuKHIgPT4ge1xuICAgIFx0XHRcbiAgICBcdFx0aWYoci5yZXN1bHQpIHtcbiAgICBcdFx0XHR0aGlzLnJvdXRpbmUuc2tpbGxzLnB1c2goci5kYXRhLm5hbWUpO1xuICAgIFx0XHR9XG5cbiAgICBcdH0pO1xuICAgIH0gICAgXG5cbiAgICBvblBpY2tlckxvYWRlZChhcmdzKSB7XG4gICAgICAgIHRoaXMudGltZVBpY2tlciA9IDxUaW1lUGlja2VyPmFyZ3Mub2JqZWN0O1xuICAgICAgICB0aGlzLnNldFRpbWUoKTtcbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY29udGVudFwiXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VGltZSgpIHtcbiAgICAgICAgaWYodGhpcy50aW1lUGlja2VyKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIuaG91ciA9IHRoaXMucm91dGluZS50aW1lLmhvdXI7XG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIubWludXRlID0gdGhpcy5yb3V0aW5lLnRpbWUubWludXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG9uZSgpIHtcblxuICAgIFx0dGhpcy5yb3V0aW5lLnRpbWUgPSB7XG4gICAgXHRcdGhvdXI6IHRoaXMudGltZVBpY2tlci5ob3VyLFxuICAgIFx0XHRtaW51dGU6IHRoaXMudGltZVBpY2tlci5taW51dGVcbiAgICBcdH07XG5cbiAgICBcdC8vVE9ETyB2YWxpZGF0ZVxuICAgIFx0bGV0IHZhbGlkID0gdHJ1ZTtcblxuICAgIFx0aWYodmFsaWQpIHtcbiAgICBcdFx0Y29uc29sZS5sb2codGhpcy5yb3V0aW5lKTtcbiAgICBcdFx0dGhpcy5yb3V0aW5lc1NlcnZpY2UuYWRkUm91dGluZSh0aGlzLnJvdXRpbmUpLnN1YnNjcmliZShyID0+IHtcbiAgICBcdFx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NvbnRlbnRcIl0sIHtcblx0XHQgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG5cdFx0ICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiLFxuXHRcdCAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuXHRcdCAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuXHRcdCAgICAgICAgICAgIH1cblx0XHQgICAgICAgIH0pO1xuICAgIFx0XHR9KTtcbiAgICBcdH1cbiAgICB9XG4gICAgXG59Il19