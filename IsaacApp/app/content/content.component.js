"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var Toast = require("nativescript-toast");
var skills_component_1 = require("./skills/skills.component");
var streams_component_1 = require("./streams/streams.component");
var routines_component_1 = require("./routines/routines.component");
var ContentComponent = /** @class */ (function () {
    function ContentComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        console.log("content constructor");
    }
    /*    onConnectionError(event) {
            console.log("onConnectionError");
            this.connError = true;
        }*/
    ContentComponent.prototype.settings = function () {
        console.log("settings button pushed");
        this.routerExtensions.navigate(["/settings"], {
            transition: {
                name: "slideLeft",
                duration: 500,
                curve: "linear"
            }
        });
    };
    ContentComponent.prototype.refresh = function () {
        console.log("refresh button pushed");
        Toast.makeText("Refreshing").show();
        this.skillsComponent.refresh();
        this.streamsComponent.refresh();
        this.routinesComponent.refresh();
    };
    __decorate([
        core_1.ViewChild(skills_component_1.SkillsComponent),
        __metadata("design:type", skills_component_1.SkillsComponent)
    ], ContentComponent.prototype, "skillsComponent", void 0);
    __decorate([
        core_1.ViewChild(streams_component_1.StreamsComponent),
        __metadata("design:type", streams_component_1.StreamsComponent)
    ], ContentComponent.prototype, "streamsComponent", void 0);
    __decorate([
        core_1.ViewChild(routines_component_1.RoutinesComponent),
        __metadata("design:type", routines_component_1.RoutinesComponent)
    ], ContentComponent.prototype, "routinesComponent", void 0);
    ContentComponent = __decorate([
        core_1.Component({
            selector: "content",
            templateUrl: "./content/content.component.html"
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRDtBQUVyRCxzREFBK0Q7QUFDL0QsMENBQTRDO0FBRTVDLDhEQUE0RDtBQUM1RCxpRUFBK0Q7QUFDL0Qsb0VBQWtFO0FBT2xFO0lBT0ksMEJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUw7OztXQUdPO0lBRUgsbUNBQVEsR0FBUjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDdkMsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsUUFBUTthQUNsQjtTQUNKLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUEvQjJCO1FBQTNCLGdCQUFTLENBQUMsa0NBQWUsQ0FBQztrQ0FBa0Isa0NBQWU7NkRBQUM7SUFDaEM7UUFBNUIsZ0JBQVMsQ0FBQyxvQ0FBZ0IsQ0FBQztrQ0FBbUIsb0NBQWdCOzhEQUFDO0lBQ2xDO1FBQTdCLGdCQUFTLENBQUMsc0NBQWlCLENBQUM7a0NBQW9CLHNDQUFpQjsrREFBQztJQUp2RCxnQkFBZ0I7UUFKNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7U0FDbEQsQ0FBQzt5Q0FRd0MseUJBQWdCO09BUDdDLGdCQUFnQixDQW1DNUI7SUFBRCx1QkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIFRvYXN0IGZyb20gJ25hdGl2ZXNjcmlwdC10b2FzdCc7XG5cbmltcG9ydCB7IFNraWxsc0NvbXBvbmVudCB9IGZyb20gXCIuL3NraWxscy9za2lsbHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdHJlYW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vc3RyZWFtcy9zdHJlYW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUm91dGluZXNDb21wb25lbnQgfSBmcm9tIFwiLi9yb3V0aW5lcy9yb3V0aW5lcy5jb21wb25lbnRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjb250ZW50XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Q29tcG9uZW50IHtcblxuXHRAVmlld0NoaWxkKFNraWxsc0NvbXBvbmVudCkgc2tpbGxzQ29tcG9uZW50OiBTa2lsbHNDb21wb25lbnQ7XG5cdEBWaWV3Q2hpbGQoU3RyZWFtc0NvbXBvbmVudCkgc3RyZWFtc0NvbXBvbmVudDogU3RyZWFtc0NvbXBvbmVudDtcblx0QFZpZXdDaGlsZChSb3V0aW5lc0NvbXBvbmVudCkgcm91dGluZXNDb21wb25lbnQ6IFJvdXRpbmVzQ29tcG9uZW50O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICBcdGNvbnNvbGUubG9nKFwiY29udGVudCBjb25zdHJ1Y3RvclwiKTtcbiAgICB9XG5cbi8qICAgIG9uQ29ubmVjdGlvbkVycm9yKGV2ZW50KSB7XG4gICAgXHRjb25zb2xlLmxvZyhcIm9uQ29ubmVjdGlvbkVycm9yXCIpO1xuICAgIFx0dGhpcy5jb25uRXJyb3IgPSB0cnVlO1xuICAgIH0qL1xuXG4gICAgc2V0dGluZ3MoKSB7XG4gICAgXHRjb25zb2xlLmxvZyhcInNldHRpbmdzIGJ1dHRvbiBwdXNoZWRcIik7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zZXR0aW5nc1wiXSwge1xuXHQgICAgICAgIHRyYW5zaXRpb246IHtcblx0XHQgICAgICAgIG5hbWU6IFwic2xpZGVMZWZ0XCIsXG5cdFx0ICAgICAgICBkdXJhdGlvbjogNTAwLFxuXHRcdCAgICAgICAgY3VydmU6IFwibGluZWFyXCJcblx0XHQgICAgfVxuXHRcdH0pO1xuXHR9XG5cblx0cmVmcmVzaCgpIHtcblx0XHRjb25zb2xlLmxvZyhcInJlZnJlc2ggYnV0dG9uIHB1c2hlZFwiKTtcblx0XHRUb2FzdC5tYWtlVGV4dChcIlJlZnJlc2hpbmdcIikuc2hvdygpO1xuXHRcdHRoaXMuc2tpbGxzQ29tcG9uZW50LnJlZnJlc2goKTtcblx0XHR0aGlzLnN0cmVhbXNDb21wb25lbnQucmVmcmVzaCgpO1xuXHRcdHRoaXMucm91dGluZXNDb21wb25lbnQucmVmcmVzaCgpO1xuXHR9XG4gICAgXG59Il19