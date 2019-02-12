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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZXMuYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRpbmVzLmFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFFNUQsc0RBQStEO0FBQy9ELGtFQUF1RTtBQUN2RSwyREFBeUQ7QUFDekQsZ0VBQThEO0FBQzlELDhFQUEyRTtBQUUzRSx1REFBcUQ7QUFDckQsc0RBQXdEO0FBQ3hELDRDQUEyQztBQU0zQztJQVVJLDhCQUNZLFNBQW9CLEVBQ3ZCLFlBQWdDLEVBQ2hDLGFBQTRCLEVBQzVCLGVBQWdDLEVBQzdCLGdCQUFrQyxFQUNsQyxnQkFBa0M7UUFOOUMsaUJBNENDO1FBM0NXLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFaekMsU0FBSSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFjNUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRXZCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDckQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLElBQU8sS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUks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SyxHQUFHLElBQUksQ0FBQztRQUVqQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDdEMsVUFBVSxFQUFFO3dCQUNSLElBQUksRUFBRSxNQUFNO3dCQUNaLFFBQVEsRUFBRSxHQUFHO3dCQUNiLEtBQUssRUFBRSxRQUFRO3FCQUNsQjtpQkFDSixDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7SUFDRixDQUFDO0lBbktRLG9CQUFvQjtRQUpoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLGdEQUFnRDtTQUNoRSxDQUFDO3lDQVl5QixrQkFBUztZQUNULGlDQUFrQjtZQUNqQiw4QkFBYTtZQUNYLGtDQUFlO1lBQ1gsdUJBQWdCO1lBQ2hCLHlCQUFnQjtPQWhCckMsb0JBQW9CLENBcUtoQztJQUFELDJCQUFDO0NBQUEsQUFyS0QsSUFxS0M7QUFyS1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gXCIuLi9za2lsbHMvc2tpbGxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTGlzdERpYWxvZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZGlhbG9ncy9saXN0LmRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyRGlhbG9nIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kaWFsb2dzL2RhdGUucGlja2VyLmRpYWxvZ1wiO1xyXG5pbXBvcnQgeyBUaW1lUGlja2VyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGltZS1waWNrZXJcIjtcclxuaW1wb3J0IHsgUm91dGluZXNTZXJ2aWNlIH0gZnJvbSBcIi4vcm91dGluZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJyb3V0aW5lcy1hZGRcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29udGVudC9yb3V0aW5lcy9yb3V0aW5lcy5hZGQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm91dGluZXNBZGRDb21wb25lbnQge1xyXG5cclxuXHRwcml2YXRlIHNraWxscztcclxuXHRwcml2YXRlIHJvdXRpbmU7XHJcblx0cHJpdmF0ZSBkYXlzID0gWydNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUycsICdTJ107XHJcblx0cHJpdmF0ZSBkYXlEaXNwbGF5O1xyXG5cdHByaXZhdGUgdGltZVBpY2tlcjtcclxuICAgIHByaXZhdGUgaWQ7XHJcbiAgICBwcml2YXRlIHNraWxsTmFtZU1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxyXG4gICAgXHRwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlLFxyXG4gICAgXHRwcml2YXRlIHNraWxsc1NlcnZpY2U6IFNraWxsc1NlcnZpY2UsXHJcbiAgICBcdHByaXZhdGUgcm91dGluZXNTZXJ2aWNlOiBSb3V0aW5lc1NlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG5cclxuICAgICAgICB0aGlzLmdldFNraWxscygpO1xyXG4gICAgICAgIHRoaXMuc2tpbGxOYW1lTWFwID0ge307XHJcblxyXG4gICAgICAgIHRoaXMucGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlLnBpcGUoXHJcbiAgICAgICAgICAgIHN3aXRjaE1hcChhY3RpdmF0ZWRSb3V0ZSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHsgdGhpcy5pZCA9IHBhcmFtc1tcImlkXCJdOyBjb25zb2xlLmxvZyh0aGlzLmlkKTt9KTtcclxuXHJcbiAgICBcdGxldCBkID0gbmV3IERhdGUoKTtcclxuICAgIFx0dGhpcy5yb3V0aW5lID0ge1xyXG4gICAgICAgIFx0ZGF5czogW2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXSxcclxuICAgICAgICBcdHNraWxsczogW10sXHJcbiAgICAgICAgXHRkYXRlOiB7XHJcbiAgICAgICAgXHRcdGRheTogZC5nZXREYXRlKCksXHJcbiAgICAgICAgXHRcdG1vbnRoOiBkLmdldE1vbnRoKCkrMSxcclxuICAgICAgICBcdFx0eWVhcjogZC5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgXHR9LFxyXG4gICAgICAgIFx0bmFtZTogJycsXHJcbiAgICAgICAgXHRyZWN1cnJpbmc6IGZhbHNlLFxyXG4gICAgICAgIFx0bWVzc2FnZTogJycsXHJcbiAgICAgICAgXHRlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNldEZvcm1hdHRlZERhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGluZXNTZXJ2aWNlLmdldFJvdXRpbmUodGhpcy5pZCkuc3Vic2NyaWJlKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGluZSA9IHI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGb3JtYXR0ZWREYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETyBoYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRGb3JtYXR0ZWREYXRlKCkge1xyXG5cdFx0dmFyIG9wdGlvbnMgPSB7IHllYXI6ICcyLWRpZ2l0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH07XHJcbiAgICAgICAgdGhpcy5kYXlEaXNwbGF5ID0gbmV3IERhdGUodGhpcy5yb3V0aW5lLmRhdGUueWVhciwgdGhpcy5yb3V0aW5lLmRhdGUubW9udGgtMSwgdGhpcy5yb3V0aW5lLmRhdGUuZGF5KS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXlEaXNwbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTa2lsbHMoKSB7XHJcblxyXG4gICAgXHR0aGlzLnNraWxsc1NlcnZpY2UuZ2V0U2tpbGxzKCkuc3Vic2NyaWJlKHIgPT4ge1xyXG4gICAgICAgIFx0aWYocikge1xyXG4gICAgICAgIFx0XHR0aGlzLnNraWxscyA9IHI7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHNraWxsIG9mIHIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNraWxsTmFtZU1hcFtza2lsbC5uYW1lXSA9IHNraWxsLmZ1bGxfbmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcdH0gZWxzZSB7XHJcbiAgICAgICAgXHRcdHRoaXMuc2tpbGxzID0gW107XHJcbiAgICAgICAgXHR9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVNraWxsKHM6IHN0cmluZykge1xyXG4gICAgXHRsZXQgbmV3U2tpbGxzID0gW107XHJcbiAgICBcdGZvcihsZXQgc2tpbGwgb2YgdGhpcy5yb3V0aW5lLnNraWxscykge1xyXG4gICAgXHRcdGlmKHNraWxsICE9PSBzKSB7XHJcbiAgICBcdFx0XHRuZXdTa2lsbHMucHVzaChza2lsbCk7XHJcbiAgICBcdFx0fVxyXG4gICAgXHR9XHJcbiAgICBcdHRoaXMucm91dGluZS5za2lsbHMgPSBuZXdTa2lsbHM7XHJcbiAgICB9XHJcblxyXG4gICAgcGlja0RhdGUoKSB7XHJcbiAgICBcdHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChEYXRlUGlja2VyRGlhbG9nLCB7XHJcbiAgICBcdFx0dmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgXHRcdGNvbnRleHQ6IHtcclxuICAgIFx0XHRcdGRhdGU6IHRoaXMucm91dGluZS5kYXRlXHJcbiAgICBcdFx0fVxyXG4gICAgXHR9KS50aGVuKHIgPT4ge1xyXG4gICAgXHRcdGlmKHIucmVzdWx0KSB7XHJcbiAgICBcdFx0XHRjb25zb2xlLmxvZyhyLmRhdGUpO1xyXG4gICAgXHRcdFx0dGhpcy5yb3V0aW5lLmRhdGUgPSByLmRhdGU7XHJcbiAgICBcdFx0XHR0aGlzLnNldEZvcm1hdHRlZERhdGUoKTtcclxuICAgIFx0XHR9XHJcbiAgICBcdH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBpY2tTa2lsbCgpIHtcclxuICAgIFx0dGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKExpc3REaWFsb2csIHtcclxuICAgIFx0XHR2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWYsXHJcbiAgICBcdFx0Y29udGV4dDoge1xyXG4gICAgXHRcdFx0aXRlbXM6IHRoaXMuc2tpbGxzLFxyXG4gICAgXHRcdFx0a2V5OiBcImZ1bGxfbmFtZVwiLFxyXG4gICAgXHRcdFx0c2VhcmNoQmFyOiB0cnVlXHJcbiAgICBcdFx0fVxyXG4gICAgXHR9KS50aGVuKHIgPT4ge1xyXG4gICAgXHRcdFxyXG4gICAgXHRcdGlmKHIucmVzdWx0KSB7XHJcbiAgICBcdFx0XHR0aGlzLnJvdXRpbmUuc2tpbGxzLnB1c2goci5kYXRhLm5hbWUpO1xyXG4gICAgXHRcdH1cclxuXHJcbiAgICBcdH0pO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBvblBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy50aW1lUGlja2VyID0gPFRpbWVQaWNrZXI+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgdGhpcy5zZXRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY29udGVudFwiXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZSgpIHtcclxuICAgICAgICBpZih0aGlzLnRpbWVQaWNrZXIpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lUGlja2VyLmhvdXIgPSB0aGlzLnJvdXRpbmUudGltZS5ob3VyO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVQaWNrZXIubWludXRlID0gdGhpcy5yb3V0aW5lLnRpbWUubWludXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkb25lKCkge1xyXG5cclxuICAgIFx0dGhpcy5yb3V0aW5lLnRpbWUgPSB7XHJcbiAgICBcdFx0aG91cjogdGhpcy50aW1lUGlja2VyLmhvdXIsXHJcbiAgICBcdFx0bWludXRlOiB0aGlzLnRpbWVQaWNrZXIubWludXRlXHJcbiAgICBcdH07XHJcblxyXG4gICAgXHQvL1RPRE8gdmFsaWRhdGVcclxuICAgIFx0bGV0IHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBcdGlmKHZhbGlkKSB7XHJcbiAgICBcdFx0Y29uc29sZS5sb2codGhpcy5yb3V0aW5lKTtcclxuICAgIFx0XHR0aGlzLnJvdXRpbmVzU2VydmljZS5hZGRSb3V0aW5lKHRoaXMucm91dGluZSkuc3Vic2NyaWJlKHIgPT4ge1xyXG4gICAgXHRcdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jb250ZW50XCJdLCB7XHJcblx0XHQgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcblx0XHQgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcblx0XHQgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcclxuXHRcdCAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG5cdFx0ICAgICAgICAgICAgfVxyXG5cdFx0ICAgICAgICB9KTtcclxuICAgIFx0XHR9KTtcclxuICAgIFx0fVxyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0=