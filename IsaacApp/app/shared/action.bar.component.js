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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24uYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBK0Q7QUFPL0Q7SUFFQyw0QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRTFELHFDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkMsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsUUFBUTthQUNsQjtTQUNKLENBQUMsQ0FBQztJQUNKLENBQUM7SUFaVyxrQkFBa0I7UUFMOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7eUNBR3FDLHlCQUFnQjtPQUYxQyxrQkFBa0IsQ0FhOUI7SUFBRCx5QkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhY3Rpb24tYmFyXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FjdGlvbi5iYXIuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CYXJDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge31cblxuXHRzZXR0aW5ncygpIHtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL3NldHRpbmdzXCJdLCB7XG5cdCAgICAgICAgdHJhbnNpdGlvbjoge1xuXHRcdCAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcblx0XHQgICAgICAgIGR1cmF0aW9uOiA1MDAsXG5cdFx0ICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxuXHRcdCAgICB9XG5cdFx0fSk7XG5cdH1cbn0iXX0=