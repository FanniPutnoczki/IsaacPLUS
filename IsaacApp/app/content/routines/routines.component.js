"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var RoutinesComponent = /** @class */ (function () {
    function RoutinesComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.refresh();
    }
    RoutinesComponent.prototype.refresh = function () {
        console.info("refreshing routines");
        this.routines = [];
        this.connectionError = false;
        this.loadMask = false;
    };
    RoutinesComponent.prototype.addRoutine = function () {
        console.log("settings button pushed");
        this.routerExtensions.navigate(["/routines", ""], {
            transition: {
                name: "slideLeft",
                duration: 500,
                curve: "linear"
            }
        });
    };
    RoutinesComponent = __decorate([
        core_1.Component({
            selector: "routines",
            templateUrl: "./content/routines/routines.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], RoutinesComponent);
    return RoutinesComponent;
}());
exports.RoutinesComponent = RoutinesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGluZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQU0vRDtJQU9JLDJCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUM5QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTNCUSxpQkFBaUI7UUFKN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSw0Q0FBNEM7U0FDNUQsQ0FBQzt5Q0FRd0MseUJBQWdCO09BUDdDLGlCQUFpQixDQTZCN0I7SUFBRCx3QkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJyb3V0aW5lc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29udGVudC9yb3V0aW5lcy9yb3V0aW5lcy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmVzQ29tcG9uZW50IHtcblxuXHQvL1RPRE8gaGVyZSByZWZyZXNoIG9ubHkgb24gcmVmcmVzaCBidXR0b24gcHJlc3MsIG5hdmlnYXRpb24gYW5kIG9uIG9wZW5pbmcsIGFuZCBvbiBuZXcgYWRkLiBubyBpbnRlcnZhbHMgbmVlZGVkIFxuXHRwcml2YXRlIGNvbm5lY3Rpb25FcnJvcjtcblx0cHJpdmF0ZSByb3V0aW5lcztcblx0cHJpdmF0ZSBsb2FkTWFzaztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICByZWZyZXNoKCkge1xuICAgIFx0Y29uc29sZS5pbmZvKFwicmVmcmVzaGluZyByb3V0aW5lc1wiKTtcbiAgICAgICAgdGhpcy5yb3V0aW5lcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xuICAgIFx0dGhpcy5sb2FkTWFzayA9IGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBhZGRSb3V0aW5lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmdzIGJ1dHRvbiBwdXNoZWRcIik7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcm91dGluZXNcIiwgXCJcIl0sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19