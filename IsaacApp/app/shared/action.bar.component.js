"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    ActionBarComponent.prototype.settings = function () {
        this.routerExtensions.navigate(["/settings"], {
            transition: {
                name: "slideLeft",
                duration: 500,
                curve: "linear"
            }
        });
    };
    ActionBarComponent = __decorate([
        core_1.Component({
            selector: "action-bar",
            moduleId: module.id,
            templateUrl: "./action.bar.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ActionBarComponent);
    return ActionBarComponent;
}());
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24uYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBK0Q7QUFPL0Q7SUFFQyw0QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRTFELHFDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkMsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsUUFBUTthQUNsQjtTQUNKLENBQUMsQ0FBQztJQUNKLENBQUM7SUFaVyxrQkFBa0I7UUFMOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7eUNBR3FDLHlCQUFnQjtPQUYxQyxrQkFBa0IsQ0FhOUI7SUFBRCx5QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImFjdGlvbi1iYXJcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FjdGlvbi5iYXIuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uQmFyQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxyXG5cclxuXHRzZXR0aW5ncygpIHtcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc2V0dGluZ3NcIl0sIHtcclxuXHQgICAgICAgIHRyYW5zaXRpb246IHtcclxuXHRcdCAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcclxuXHRcdCAgICAgICAgZHVyYXRpb246IDUwMCxcclxuXHRcdCAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuXHRcdCAgICB9XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXX0=