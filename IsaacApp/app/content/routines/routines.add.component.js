"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var RoutinesAddComponent = /** @class */ (function () {
    function RoutinesAddComponent(modalService, viewContainerRef, routerExtensions) {
        this.modalService = modalService;
        this.viewContainerRef = viewContainerRef;
        this.routerExtensions = routerExtensions;
        this.days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        this.routine = {
            days: [false, false, false, false, false, false, false]
        };
        this.isNew = true;
    }
    RoutinesAddComponent.prototype.getSkills = function () {
    };
    RoutinesAddComponent.prototype.done = function () {
    };
    RoutinesAddComponent.prototype.pickDate = function () {
    };
    RoutinesAddComponent.prototype.pickSkill = function () {
    };
    RoutinesAddComponent.prototype.removeSkill = function () {
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
            core_1.ViewContainerRef,
            router_1.RouterExtensions])
    ], RoutinesAddComponent);
    return RoutinesAddComponent;
}());
exports.RoutinesAddComponent = RoutinesAddComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZXMuYWRkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRpbmVzLmFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEQ7QUFFNUQsc0RBQStEO0FBQy9ELGtFQUF1RTtBQU12RTtJQU9JLDhCQUNTLFlBQWdDLEVBQzdCLGdCQUFrQyxFQUNsQyxnQkFBa0M7UUFGckMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQzdCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUx6QyxTQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQU81QyxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2QsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDO1NBQ2pELENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsd0NBQVMsR0FBVDtJQUVBLENBQUM7SUFFRCxtQ0FBSSxHQUFKO0lBRUEsQ0FBQztJQUVELHVDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsd0NBQVMsR0FBVDtJQUVBLENBQUM7SUFFRCwwQ0FBVyxHQUFYO0lBRUEsQ0FBQztJQUVELDRDQUFhLEdBQWIsVUFBYyxLQUFLO0lBRW5CLENBQUM7SUFFRCxxQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBbERRLG9CQUFvQjtRQUpoQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLGdEQUFnRDtTQUNoRSxDQUFDO3lDQVN5QixpQ0FBa0I7WUFDWCx1QkFBZ0I7WUFDaEIseUJBQWdCO09BVnJDLG9CQUFvQixDQW9EaEM7SUFBRCwyQkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInJvdXRpbmVzLWFkZFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29udGVudC9yb3V0aW5lcy9yb3V0aW5lcy5hZGQuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5lc0FkZENvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSBpc05ld1xuXHRwcml2YXRlIHNraWxscztcblx0cHJpdmF0ZSByb3V0aW5lO1xuXHRwcml2YXRlIGRheXMgPSBbJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJywgJ1MnXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgIFx0cHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICBcdFxuICAgICAgICB0aGlzLnJvdXRpbmUgPSB7XG4gICAgICAgIFx0ZGF5czogW2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzTmV3ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRTa2lsbHMoKSB7XG5cbiAgICB9XG5cbiAgICBkb25lKCkge1xuXG4gICAgfVxuXG4gICAgcGlja0RhdGUoKSB7XG5cbiAgICB9XG5cbiAgICBwaWNrU2tpbGwoKSB7XG5cbiAgICB9XG5cbiAgICByZW1vdmVTa2lsbCgpIHtcblxuICAgIH1cblxuICAgIG9uVGltZUNoYW5nZWQoZXZlbnQpIHtcblxuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jb250ZW50XCJdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBcImxpbmVhclwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbn0iXX0=