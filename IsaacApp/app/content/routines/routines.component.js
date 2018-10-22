"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoutinesComponent = /** @class */ (function () {
    function RoutinesComponent() {
        this.connectionError = false;
        this.loadMask = false;
        this.routines = [];
        this.refresh();
    }
    RoutinesComponent.prototype.refresh = function () {
        console.info("refreshing routines");
        this.loadMask = true;
    };
    RoutinesComponent = __decorate([
        core_1.Component({
            selector: "routines",
            templateUrl: "./content/routines/routines.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], RoutinesComponent);
    return RoutinesComponent;
}());
exports.RoutinesComponent = RoutinesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGluZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBTzFDO0lBT0k7UUFDQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQWpCUSxpQkFBaUI7UUFKN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSw0Q0FBNEM7U0FDNUQsQ0FBQzs7T0FDVyxpQkFBaUIsQ0FtQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInJvdXRpbmVzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZW50L3JvdXRpbmVzL3JvdXRpbmVzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgUm91dGluZXNDb21wb25lbnQge1xuXG5cdC8vVE9ETyBoZXJlIHJlZnJlc2ggb25seSBvbiByZWZyZXNoIGJ1dHRvbiBwcmVzcywgbmF2aWdhdGlvbiBhbmQgb24gb3BlbmluZywgYW5kIG9uIG5ldyBhZGQuIG5vIGludGVydmFscyBuZWVkZWQgXG5cdHByaXZhdGUgY29ubmVjdGlvbkVycm9yO1xuXHRwcml2YXRlIHJvdXRpbmVzO1xuXHRwcml2YXRlIGxvYWRNYXNrO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgXHR0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xuICAgIFx0dGhpcy5sb2FkTWFzayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvdXRpbmVzID0gW107XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIHJlZnJlc2goKSB7XG4gICAgXHRjb25zb2xlLmluZm8oXCJyZWZyZXNoaW5nIHJvdXRpbmVzXCIpO1xuICAgIFx0dGhpcy5sb2FkTWFzayA9IHRydWU7XG4gICAgfVxuICAgIFxufSJdfQ==