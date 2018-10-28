"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var skills_service_1 = require("../skills/skills.service");
var list_dialog_1 = require("../../shared/dialogs/list.dialog");
var date_picker_dialog_1 = require("../../shared/dialogs/date.picker.dialog");
var RoutinesAddComponent = /** @class */ (function () {
    function RoutinesAddComponent(modalService, skillsService, viewContainerRef, routerExtensions) {
        this.modalService = modalService;
        this.skillsService = skillsService;
        this.viewContainerRef = viewContainerRef;
        this.routerExtensions = routerExtensions;
        this.days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        this.getSkills();
        this.isNew = true;
        if (this.isNew) {
            var d = new Date();
            this.routine = {
                days: [false, false, false, false, false, false, false],
                skills: [],
                date: {
                    day: d.getDate(),
                    month: d.getMonth() + 1,
                    year: d.getFullYear()
                }
            };
        }
        else {
            //TODO get routine data based on id from route parameter
        }
        this.setFormattedDate();
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
    RoutinesAddComponent.prototype.done = function () {
        //TODO validate
        var valid = true;
        if (valid) {
            this.routerExtensions.navigate(["/content"], {
                transition: {
                    name: "slideLeft",
                    duration: 500,
                    curve: "linear"
                }
            });
        }
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
                key: "name"
            }
        }).then(function (r) {
            if (r.result) {
                _this.routine.skills.push(r.name);
            }
        });
    };
    RoutinesAddComponent.prototype.onTimeChanged = function (event) {
    };
    RoutinesAddComponent.prototype.cancel = function () {
        this.routerExtensions.navigate(["/content"], {
            transition: {
                name: "slideLeft",
                duration: 500,
                curve: "linear"
            }
        });
    };
    RoutinesAddComponent = __decorate([
        core_1.Component({
            selector: "routines-add",
            templateUrl: "./content/routines/routines.add.component.html"
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            skills_service_1.SkillsService,
            core_1.ViewContainerRef,
            router_1.RouterExtensions])
    ], RoutinesAddComponent);
    return RoutinesAddComponent;
}());
exports.RoutinesAddComponent = RoutinesAddComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZXMuYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRpbmVzLmFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFFNUQsc0RBQStEO0FBQy9ELGtFQUF1RTtBQUN2RSwyREFBeUQ7QUFDekQsZ0VBQThEO0FBQzlELDhFQUEyRTtBQU8zRTtJQVFJLDhCQUNTLFlBQWdDLEVBQ2hDLGFBQTRCLEVBQ3pCLGdCQUFrQyxFQUNsQyxnQkFBa0M7UUFIckMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3pCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVB6QyxTQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQVM1QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFbEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUc7Z0JBQ2QsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDO2dCQUNqRCxNQUFNLEVBQUUsRUFBRTtnQkFDVixJQUFJLEVBQUU7b0JBQ0wsR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUMsQ0FBQztvQkFDckIsSUFBSSxFQUFFLENBQUMs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QUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFBQSxpQkFjQztRQWJBLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLHdCQUFVLEVBQUU7WUFDdkMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxPQUFPLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNsQixHQUFHLEVBQUUsTUFBTTthQUNYO1NBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFFUixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDYixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFFRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCw0Q0FBYSxHQUFiLFVBQWMsS0FBSztJQUVuQixDQUFDO0lBRUQscUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTFIUSxvQkFBb0I7UUFKaEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSxnREFBZ0Q7U0FDaEUsQ0FBQzt5Q0FVeUIsaUNBQWtCO1lBQ2pCLDhCQUFhO1lBQ1AsdUJBQWdCO1lBQ2hCLHlCQUFnQjtPQVpyQyxvQkFBb0IsQ0E0SGhDO0lBQUQsMkJBQUM7Q0FBQSxBQTVIRCxJQTRIQztBQTVIWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgU2tpbGxzU2VydmljZSB9IGZyb20gXCIuLi9za2lsbHMvc2tpbGxzLnNlcnZpY2VcIjtcbmltcG9ydCB7IExpc3REaWFsb2cgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RpYWxvZ3MvbGlzdC5kaWFsb2dcIjtcbmltcG9ydCB7IERhdGVQaWNrZXJEaWFsb2cgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2RpYWxvZ3MvZGF0ZS5waWNrZXIuZGlhbG9nXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwicm91dGluZXMtYWRkXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZW50L3JvdXRpbmVzL3JvdXRpbmVzLmFkZC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmVzQWRkQ29tcG9uZW50IHtcblxuXHRwcml2YXRlIGlzTmV3XG5cdHByaXZhdGUgc2tpbGxzO1xuXHRwcml2YXRlIHJvdXRpbmU7XG5cdHByaXZhdGUgZGF5cyA9IFsnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnLCAnUyddO1xuXHRwcml2YXRlIGRheURpc3BsYXk7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICBcdHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgXHRwcml2YXRlIHNraWxsc1NlcnZpY2U6IFNraWxsc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cbiAgICAgICAgdGhpcy5nZXRTa2lsbHMoKTtcblxuICAgICAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcblxuICAgICAgICBpZih0aGlzLmlzTmV3KSB7XG4gICAgICAgIFx0bGV0IGQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBcdHRoaXMucm91dGluZSA9IHtcblx0ICAgICAgICBcdGRheXM6IFtmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV0sXG5cdCAgICAgICAgXHRza2lsbHM6IFtdLFxuXHQgICAgICAgIFx0ZGF0ZToge1xuXHQgICAgICAgIFx0XHRkYXk6IGQuZ2V0RGF0ZSgpLFxuXHQgICAgICAgIFx0XHRtb250aDogZC5nZXRNb250aCgpKzEsXG5cdCAgICAgICAgXHRcdHllYXI6IGQuZ2V0RnVsbFllYXIoKVxuXHQgICAgICAgIFx0fVxuXHQgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIFx0Ly9UT0RPIGdldCByb3V0aW5lIGRhdGEgYmFzZWQgb24gaWQgZnJvbSByb3V0ZSBwYXJhbWV0ZXJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0Rm9ybWF0dGVkRGF0ZSgpO1xuICAgIFxuICAgIH1cblxuICAgIHNldEZvcm1hdHRlZERhdGUoKSB7XG5cdFx0dmFyIG9wdGlvbnMgPSB7IHllYXI6ICcyLWRpZ2l0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH07XG4gICAgICAgIHRoaXMuZGF5RGlzcGxheSA9IG5ldyBEYXRlKHRoaXMucm91dGluZS5kYXRlLnllYXIsIHRoaXMucm91dGluZS5kYXRlLm1vbnRoLTEsIHRoaXMucm91dGluZS5kYXRlLmRheSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRheURpc3BsYXkpO1xuICAgIH1cblxuICAgIGdldFNraWxscygpIHtcblxuICAgIFx0dGhpcy5za2lsbHNTZXJ2aWNlLmdldFNraWxscygpLnN1YnNjcmliZShyID0+IHtcbiAgICAgICAgXHRpZihyKSB7XG4gICAgICAgIFx0XHR0aGlzLnNraWxscyA9IHI7XG4gICAgICAgIFx0fSBlbHNlIHtcbiAgICAgICAgXHRcdHRoaXMuc2tpbGxzID0gW107XG4gICAgICAgIFx0fVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHJlbW92ZVNraWxsKHM6IHN0cmluZykge1xuICAgIFx0bGV0IG5ld1NraWxscyA9IFtdO1xuICAgIFx0Zm9yKGxldCBza2lsbCBvZiB0aGlzLnJvdXRpbmUuc2tpbGxzKSB7XG4gICAgXHRcdGlmKHNraWxsICE9PSBzKSB7XG4gICAgXHRcdFx0bmV3U2tpbGxzLnB1c2goc2tpbGwpO1xuICAgIFx0XHR9XG4gICAgXHR9XG4gICAgXHR0aGlzLnJvdXRpbmUuc2tpbGxzID0gbmV3U2tpbGxzO1xuICAgIH1cblxuICAgIGRvbmUoKSB7XG4gICAgXHQvL1RPRE8gdmFsaWRhdGVcbiAgICBcdGxldCB2YWxpZCA9IHRydWU7XG4gICAgXHRpZih2YWxpZCkge1xuICAgIFx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NvbnRlbnRcIl0sIHtcblx0ICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuXHQgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcblx0ICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG5cdCAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG4gICAgXHR9XG4gICAgfVxuXG4gICAgcGlja0RhdGUoKSB7XG4gICAgXHR0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoRGF0ZVBpY2tlckRpYWxvZywge1xuICAgIFx0XHR2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZpZXdDb250YWluZXJSZWYsXG4gICAgXHRcdGNvbnRleHQ6IHtcbiAgICBcdFx0XHRkYXRlOiB0aGlzLnJvdXRpbmUuZGF0ZVxuICAgIFx0XHR9XG4gICAgXHR9KS50aGVuKHIgPT4ge1xuICAgIFx0XHRpZihyLnJlc3VsdCkge1xuICAgIFx0XHRcdGNvbnNvbGUubG9nKHIuZGF0ZSk7XG4gICAgXHRcdFx0dGhpcy5yb3V0aW5lLmRhdGUgPSByLmRhdGU7XG4gICAgXHRcdFx0dGhpcy5zZXRGb3JtYXR0ZWREYXRlKCk7XG4gICAgXHRcdH1cbiAgICBcdH0pO1xuICAgIH1cblxuICAgIHBpY2tTa2lsbCgpIHtcbiAgICBcdHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChMaXN0RGlhbG9nLCB7XG4gICAgXHRcdHZpZXdDb250YWluZXJSZWY6IHRoaXMudmlld0NvbnRhaW5lclJlZixcbiAgICBcdFx0Y29udGV4dDoge1xuICAgIFx0XHRcdGl0ZW1zOiB0aGlzLnNraWxscyxcbiAgICBcdFx0XHRrZXk6IFwibmFtZVwiXG4gICAgXHRcdH1cbiAgICBcdH0pLnRoZW4ociA9PiB7XG4gICAgXHRcdFxuICAgIFx0XHRpZihyLnJlc3VsdCkge1xuICAgIFx0XHRcdHRoaXMucm91dGluZS5za2lsbHMucHVzaChyLm5hbWUpO1xuICAgIFx0XHR9XG5cbiAgICBcdH0pO1xuICAgIH0gICAgXG5cbiAgICBvblRpbWVDaGFuZ2VkKGV2ZW50KSB7XG5cbiAgICB9XG5cbiAgICBjYW5jZWwoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY29udGVudFwiXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVMZWZ0XCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG59Il19