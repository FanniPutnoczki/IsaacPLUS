"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var Toast = require("nativescript-toast");
var page_1 = require("tns-core-modules/ui/page");
var skills_component_1 = require("./skills/skills.component");
var streams_component_1 = require("./streams/streams.component");
var routines_component_1 = require("./routines/routines.component");
var ContentComponent = /** @class */ (function () {
    function ContentComponent(routerExtensions, page) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.page.on('unloaded ', function (data) {
            _this.streamsComponent.unload();
        });
    }
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
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_1.Page])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRDtBQUVyRCxzREFBK0Q7QUFDL0QsMENBQTRDO0FBQzVDLGlEQUFnRDtBQUVoRCw4REFBNEQ7QUFDNUQsaUVBQStEO0FBQy9ELG9FQUFrRTtBQU9sRTtJQU9JLDBCQUNTLGdCQUFrQyxFQUNsQyxJQUFVO1FBRm5CLGlCQU1DO1FBTFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLElBQUk7WUFDOUIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZDLFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsa0NBQU8sR0FBUDtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBOUIyQjtRQUEzQixnQkFBUyxDQUFDLGtDQUFlLENBQUM7a0NBQWtCLGtDQUFlOzZEQUFDO0lBQ2hDO1FBQTVCLGdCQUFTLENBQUMsb0NBQWdCLENBQUM7a0NBQW1CLG9DQUFnQjs4REFBQztJQUNsQztRQUE3QixnQkFBUyxDQUFDLHNDQUFpQixDQUFDO2tDQUFvQixzQ0FBaUI7K0RBQUM7SUFKdkQsZ0JBQWdCO1FBSjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsa0NBQWtDO1NBQ2xELENBQUM7eUNBUzZCLHlCQUFnQjtZQUM1QixXQUFJO09BVFYsZ0JBQWdCLENBa0M1QjtJQUFELHVCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UnO1xuXG5pbXBvcnQgeyBTa2lsbHNDb21wb25lbnQgfSBmcm9tIFwiLi9za2lsbHMvc2tpbGxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU3RyZWFtc0NvbXBvbmVudCB9IGZyb20gXCIuL3N0cmVhbXMvc3RyZWFtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJvdXRpbmVzQ29tcG9uZW50IH0gZnJvbSBcIi4vcm91dGluZXMvcm91dGluZXMuY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY29udGVudFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29udGVudC9jb250ZW50LmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudENvbXBvbmVudCB7XG5cblx0QFZpZXdDaGlsZChTa2lsbHNDb21wb25lbnQpIHNraWxsc0NvbXBvbmVudDogU2tpbGxzQ29tcG9uZW50O1xuXHRAVmlld0NoaWxkKFN0cmVhbXNDb21wb25lbnQpIHN0cmVhbXNDb21wb25lbnQ6IFN0cmVhbXNDb21wb25lbnQ7XG5cdEBWaWV3Q2hpbGQoUm91dGluZXNDb21wb25lbnQpIHJvdXRpbmVzQ29tcG9uZW50OiBSb3V0aW5lc0NvbXBvbmVudDtcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgXHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgXHRwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICBcdHRoaXMucGFnZS5vbigndW5sb2FkZWQgJywgKGRhdGEpID0+IHtcbiAgICBcdFx0dGhpcy5zdHJlYW1zQ29tcG9uZW50LnVubG9hZCgpO1xuXHQgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0dGluZ3MoKSB7XG4gICAgXHRjb25zb2xlLmxvZyhcInNldHRpbmdzIGJ1dHRvbiBwdXNoZWRcIik7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9zZXR0aW5nc1wiXSwge1xuXHQgICAgICAgIHRyYW5zaXRpb246IHtcblx0XHQgICAgICAgIG5hbWU6IFwic2xpZGVMZWZ0XCIsXG5cdFx0ICAgICAgICBkdXJhdGlvbjogNTAwLFxuXHRcdCAgICAgICAgY3VydmU6IFwibGluZWFyXCJcblx0XHQgICAgfVxuXHRcdH0pO1xuXHR9XG5cblx0cmVmcmVzaCgpIHtcblx0XHRjb25zb2xlLmxvZyhcInJlZnJlc2ggYnV0dG9uIHB1c2hlZFwiKTtcblx0XHRUb2FzdC5tYWtlVGV4dChcIlJlZnJlc2hpbmdcIikuc2hvdygpO1xuXHRcdHRoaXMuc2tpbGxzQ29tcG9uZW50LnJlZnJlc2goKTtcblx0XHR0aGlzLnN0cmVhbXNDb21wb25lbnQucmVmcmVzaCgpO1xuXHRcdHRoaXMucm91dGluZXNDb21wb25lbnQucmVmcmVzaCgpO1xuXHR9XG4gICAgXG59Il19