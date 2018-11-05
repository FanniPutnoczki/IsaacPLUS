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
                key: "name",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZXMuYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRpbmVzLmFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFFNUQsc0RBQStEO0FBQy9ELGtFQUF1RTtBQUN2RSwyREFBeUQ7QUFDekQsZ0VBQThEO0FBQzlELDhFQUEyRTtBQUUzRSx1REFBcUQ7QUFDckQsc0RBQXdEO0FBQ3hELDRDQUEyQztBQU0zQztJQVNJLDhCQUNZLFNBQW9CLEVBQ3ZCLFlBQWdDLEVBQ2hDLGFBQTRCLEVBQzVCLGVBQWdDLEVBQzdCLGdCQUFrQyxFQUNsQyxnQkFBa0M7UUFOOUMsaUJBMkNDO1FBMUNXLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDdkIsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFYekMsU0FBSSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFhNUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDOUIscUJBQVMsQ0FBQyxVQUFBLGNBQWMsSUFBSSxPQUFBLGNBQWMsQ0FBQyxNQUFNLEVBQXJCLENBQXFCLENBQUMsQ0FDckQsQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLElBQU8sS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxD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QUN4RCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3RDLFVBQVUsRUFBRTt3QkFDUixJQUFJLEVBQUUsTUFBTTt3QkFDWixRQUFRLEVBQUUsR0FBRzt3QkFDYixLQUFLLEVBQUUsUUFBUTtxQkFDbEI7aUJBQ0osQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0YsQ0FBQztJQTlKUSxvQkFBb0I7UUFKaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxnREFBZ0Q7U0FDaEUsQ0FBQzt5Q0FXeUIsa0JBQVM7WUFDVCxpQ0FBa0I7WUFDakIsOEJBQWE7WUFDWCxrQ0FBZTtZQUNYLHVCQUFnQjtZQUNoQix5QkFBZ0I7T0FmckMsb0JBQW9CLENBZ0toQztJQUFELDJCQUFDO0NBQUEsQUFoS0QsSUFnS0M7QUFoS1ksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFNraWxsc1NlcnZpY2UgfSBmcm9tIFwiLi4vc2tpbGxzL3NraWxscy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMaXN0RGlhbG9nIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kaWFsb2dzL2xpc3QuZGlhbG9nXCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyRGlhbG9nIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9kaWFsb2dzL2RhdGUucGlja2VyLmRpYWxvZ1wiO1xuaW1wb3J0IHsgVGltZVBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RpbWUtcGlja2VyXCI7XG5pbXBvcnQgeyBSb3V0aW5lc1NlcnZpY2UgfSBmcm9tIFwiLi9yb3V0aW5lcy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicm91dGluZXMtYWRkXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZW50L3JvdXRpbmVzL3JvdXRpbmVzLmFkZC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmVzQWRkQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIHNraWxscztcblx0cHJpdmF0ZSByb3V0aW5lO1xuXHRwcml2YXRlIGRheXMgPSBbJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJywgJ1MnXTtcblx0cHJpdmF0ZSBkYXlEaXNwbGF5O1xuXHRwcml2YXRlIHRpbWVQaWNrZXI7XG4gICAgcHJpdmF0ZSBpZDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgIFx0cHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBcdHByaXZhdGUgc2tpbGxzU2VydmljZTogU2tpbGxzU2VydmljZSxcbiAgICBcdHByaXZhdGUgcm91dGluZXNTZXJ2aWNlOiBSb3V0aW5lc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cbiAgICAgICAgdGhpcy5nZXRTa2lsbHMoKTtcblxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcbiAgICAgICAgKS5mb3JFYWNoKChwYXJhbXMpID0+IHsgdGhpcy5pZCA9IHBhcmFtc1tcImlkXCJdOyBjb25zb2xlLmxvZyh0aGlzLmlkKTt9KTtcblxuICAgIFx0bGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIFx0dGhpcy5yb3V0aW5lID0ge1xuICAgICAgICBcdGRheXM6IFtmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV0sXG4gICAgICAgIFx0c2tpbGxzOiBbXSxcbiAgICAgICAgXHRkYXRlOiB7XG4gICAgICAgIFx0XHRkYXk6IGQuZ2V0RGF0ZSgpLFxuICAgICAgICBcdFx0bW9udGg6IGQuZ2V0TW9udGgoKSsxLFxuICAgICAgICBcdFx0eWVhcjogZC5nZXRGdWxsWWVhcigpXG4gICAgICAgIFx0fSxcbiAgICAgICAgXHRuYW1lOiAnJyxcbiAgICAgICAgXHRyZWN1cnJpbmc6IGZhbHNlLFxuICAgICAgICBcdG1lc3NhZ2U6ICcnLFxuICAgICAgICBcdGVuYWJsZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRGb3JtYXR0ZWREYXRlKCk7XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLmlkKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRpbmVzU2VydmljZS5nZXRSb3V0aW5lKHRoaXMuaWQpLnN1YnNjcmliZShyID0+IHtcbiAgICAgICAgICAgICAgICBpZihyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmUgPSByO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZvcm1hdHRlZERhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy9UT0RPIGhhbmRsZSBlcnJvclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXRGb3JtYXR0ZWREYXRlKCkge1xuXHRcdHZhciBvcHRpb25zID0geyB5ZWFyOiAnMi1kaWdpdCcsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJyB9O1xuICAgICAgICB0aGlzLmRheURpc3BsYXkgPSBuZXcgRGF0ZSh0aGlzLnJvdXRpbmUuZGF0ZS55ZWFyLCB0aGlzLnJvdXRpbmUuZGF0ZS5tb250aC0xLCB0aGlzLnJvdXRpbmUuZGF0ZS5kYXkpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXlEaXNwbGF5KTtcbiAgICB9XG5cbiAgICBnZXRTa2lsbHMoKSB7XG5cbiAgICBcdHRoaXMuc2tpbGxzU2VydmljZS5nZXRTa2lsbHMoKS5zdWJzY3JpYmUociA9PiB7XG4gICAgICAgIFx0aWYocikge1xuICAgICAgICBcdFx0dGhpcy5za2lsbHMgPSByO1xuICAgICAgICBcdH0gZWxzZSB7XG4gICAgICAgIFx0XHR0aGlzLnNraWxscyA9IFtdO1xuICAgICAgICBcdH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZW1vdmVTa2lsbChzOiBzdHJpbmcpIHtcbiAgICBcdGxldCBuZXdTa2lsbHMgPSBbXTtcbiAgICBcdGZvcihsZXQgc2tpbGwgb2YgdGhpcy5yb3V0aW5lLnNraWxscykge1xuICAgIFx0XHRpZihza2lsbCAhPT0gcykge1xuICAgIFx0XHRcdG5ld1NraWxscy5wdXNoKHNraWxsKTtcbiAgICBcdFx0fVxuICAgIFx0fVxuICAgIFx0dGhpcy5yb3V0aW5lLnNraWxscyA9IG5ld1NraWxscztcbiAgICB9XG5cbiAgICBwaWNrRGF0ZSgpIHtcbiAgICBcdHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChEYXRlUGlja2VyRGlhbG9nLCB7XG4gICAgXHRcdHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZixcbiAgICBcdFx0Y29udGV4dDoge1xuICAgIFx0XHRcdGRhdGU6IHRoaXMucm91dGluZS5kYXRlXG4gICAgXHRcdH1cbiAgICBcdH0pLnRoZW4ociA9PiB7XG4gICAgXHRcdGlmKHIucmVzdWx0KSB7XG4gICAgXHRcdFx0Y29uc29sZS5sb2coci5kYXRlKTtcbiAgICBcdFx0XHR0aGlzLnJvdXRpbmUuZGF0ZSA9IHIuZGF0ZTtcbiAgICBcdFx0XHR0aGlzLnNldEZvcm1hdHRlZERhdGUoKTtcbiAgICBcdFx0fVxuICAgIFx0fSk7XG4gICAgfVxuXG4gICAgcGlja1NraWxsKCkge1xuICAgIFx0dGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKExpc3REaWFsb2csIHtcbiAgICBcdFx0dmlld0NvbnRhaW5lclJlZjogdGhpcy52aWV3Q29udGFpbmVyUmVmLFxuICAgIFx0XHRjb250ZXh0OiB7XG4gICAgXHRcdFx0aXRlbXM6IHRoaXMuc2tpbGxzLFxuICAgIFx0XHRcdGtleTogXCJuYW1lXCIsXG4gICAgXHRcdFx0c2VhcmNoQmFyOiB0cnVlXG4gICAgXHRcdH1cbiAgICBcdH0pLnRoZW4ociA9PiB7XG4gICAgXHRcdFxuICAgIFx0XHRpZihyLnJlc3VsdCkge1xuICAgIFx0XHRcdHRoaXMucm91dGluZS5za2lsbHMucHVzaChyLmRhdGEubmFtZSk7XG4gICAgXHRcdH1cblxuICAgIFx0fSk7XG4gICAgfSAgICBcblxuICAgIG9uUGlja2VyTG9hZGVkKGFyZ3MpIHtcbiAgICAgICAgdGhpcy50aW1lUGlja2VyID0gPFRpbWVQaWNrZXI+YXJncy5vYmplY3Q7XG4gICAgICAgIHRoaXMuc2V0VGltZSgpO1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jb250ZW50XCJdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUaW1lKCkge1xuICAgICAgICBpZih0aGlzLnRpbWVQaWNrZXIpIHtcbiAgICAgICAgICAgIHRoaXMudGltZVBpY2tlci5ob3VyID0gdGhpcy5yb3V0aW5lLnRpbWUuaG91cjtcbiAgICAgICAgICAgIHRoaXMudGltZVBpY2tlci5taW51dGUgPSB0aGlzLnJvdXRpbmUudGltZS5taW51dGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkb25lKCkge1xuXG4gICAgXHR0aGlzLnJvdXRpbmUudGltZSA9IHtcbiAgICBcdFx0aG91cjogdGhpcy50aW1lUGlja2VyLmhvdXIsXG4gICAgXHRcdG1pbnV0ZTogdGhpcy50aW1lUGlja2VyLm1pbnV0ZVxuICAgIFx0fTtcblxuICAgIFx0Ly9UT0RPIHZhbGlkYXRlXG4gICAgXHRsZXQgdmFsaWQgPSB0cnVlO1xuXG4gICAgXHRpZih2YWxpZCkge1xuICAgIFx0XHRjb25zb2xlLmxvZyh0aGlzLnJvdXRpbmUpO1xuICAgIFx0XHR0aGlzLnJvdXRpbmVzU2VydmljZS5hZGRSb3V0aW5lKHRoaXMucm91dGluZSkuc3Vic2NyaWJlKHIgPT4ge1xuICAgIFx0XHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY29udGVudFwiXSwge1xuXHRcdCAgICAgICAgICAgIHRyYW5zaXRpb246IHtcblx0XHQgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG5cdFx0ICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG5cdFx0ICAgICAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXG5cdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgfSk7XG4gICAgXHRcdH0pO1xuICAgIFx0fVxuICAgIH1cbiAgICBcbn0iXX0=