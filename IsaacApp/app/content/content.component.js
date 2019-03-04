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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRDtBQUVyRCxzREFBK0Q7QUFDL0QsMENBQTRDO0FBQzVDLGlEQUFnRDtBQUVoRCw4REFBNEQ7QUFDNUQsaUVBQStEO0FBQy9ELG9FQUFrRTtBQU9sRTtJQU9JLDBCQUNTLGdCQUFrQyxFQUNsQyxJQUFVO1FBRm5CLGlCQU1DO1FBTFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLElBQUk7WUFDOUIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3ZDLFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsV0FBVztnQkFDakIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsa0NBQU8sR0FBUDtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBOUIyQjtRQUEzQixnQkFBUyxDQUFDLGtDQUFlLENBQUM7a0NBQWtCLGtDQUFlOzZEQUFDO0lBQ2hDO1FBQTVCLGdCQUFTLENBQUMsb0NBQWdCLENBQUM7a0NBQW1CLG9DQUFnQjs4REFBQztJQUNsQztRQUE3QixnQkFBUyxDQUFDLHNDQUFpQixDQUFDO2tDQUFvQixzQ0FBaUI7K0RBQUM7SUFKdkQsZ0JBQWdCO1FBSjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsa0NBQWtDO1NBQ2xELENBQUM7eUNBUzZCLHlCQUFnQjtZQUM1QixXQUFJO09BVFYsZ0JBQWdCLENBa0M1QjtJQUFELHVCQUFDO0NBQUEsQUFsQ0QsSUFrQ0M7QUFsQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZSc7XHJcblxyXG5pbXBvcnQgeyBTa2lsbHNDb21wb25lbnQgfSBmcm9tIFwiLi9za2lsbHMvc2tpbGxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTdHJlYW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vc3RyZWFtcy9zdHJlYW1zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSb3V0aW5lc0NvbXBvbmVudCB9IGZyb20gXCIuL3JvdXRpbmVzL3JvdXRpbmVzLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiY29udGVudFwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGVudENvbXBvbmVudCB7XHJcblxyXG5cdEBWaWV3Q2hpbGQoU2tpbGxzQ29tcG9uZW50KSBza2lsbHNDb21wb25lbnQ6IFNraWxsc0NvbXBvbmVudDtcclxuXHRAVmlld0NoaWxkKFN0cmVhbXNDb21wb25lbnQpIHN0cmVhbXNDb21wb25lbnQ6IFN0cmVhbXNDb21wb25lbnQ7XHJcblx0QFZpZXdDaGlsZChSb3V0aW5lc0NvbXBvbmVudCkgcm91dGluZXNDb21wb25lbnQ6IFJvdXRpbmVzQ29tcG9uZW50O1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgIFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgXHRwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIFx0dGhpcy5wYWdlLm9uKCd1bmxvYWRlZCAnLCAoZGF0YSkgPT4ge1xyXG4gICAgXHRcdHRoaXMuc3RyZWFtc0NvbXBvbmVudC51bmxvYWQoKTtcclxuXHQgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dGluZ3MoKSB7XHJcbiAgICBcdGNvbnNvbGUubG9nKFwic2V0dGluZ3MgYnV0dG9uIHB1c2hlZFwiKTtcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvc2V0dGluZ3NcIl0sIHtcclxuXHQgICAgICAgIHRyYW5zaXRpb246IHtcclxuXHRcdCAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcclxuXHRcdCAgICAgICAgZHVyYXRpb246IDUwMCxcclxuXHRcdCAgICAgICAgY3VydmU6IFwibGluZWFyXCJcclxuXHRcdCAgICB9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlZnJlc2goKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcInJlZnJlc2ggYnV0dG9uIHB1c2hlZFwiKTtcclxuXHRcdFRvYXN0Lm1ha2VUZXh0KFwiUmVmcmVzaGluZ1wiKS5zaG93KCk7XHJcblx0XHR0aGlzLnNraWxsc0NvbXBvbmVudC5yZWZyZXNoKCk7XHJcblx0XHR0aGlzLnN0cmVhbXNDb21wb25lbnQucmVmcmVzaCgpO1xyXG5cdFx0dGhpcy5yb3V0aW5lc0NvbXBvbmVudC5yZWZyZXNoKCk7XHJcblx0fVxyXG4gICAgXHJcbn0iXX0=