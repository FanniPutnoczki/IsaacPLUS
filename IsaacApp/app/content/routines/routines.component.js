"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routines_service_1 = require("./routines.service");
var RoutinesComponent = /** @class */ (function () {
    function RoutinesComponent(routinesService, routerExtensions) {
        this.routinesService = routinesService;
        this.routerExtensions = routerExtensions;
        this.refresh();
    }
    RoutinesComponent.prototype.refresh = function () {
        var _this = this;
        console.info("refreshing routines");
        this.routines = [];
        this.connectionError = false;
        this.loadMask = false;
        this.routinesService.getRoutines().subscribe(function (r) {
            if (r == undefined) {
                _this.connectionError = true;
            }
            else {
                //console.log(r);
                _this.routines = r;
                _this.formatRoutines();
                _this.connectionError = false;
            }
            _this.loadMask = false;
        });
    };
    RoutinesComponent.prototype.formatRoutines = function () {
        for (var _i = 0, _a = this.routines; _i < _a.length; _i++) {
            var r = _a[_i];
            if (r.recurring) {
                var dis = "";
                var week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
                for (var i = 0; i < 7; i++) {
                    if (r.days[i]) {
                        dis += (week[i] + ", ");
                    }
                }
                dis = dis.slice(0, -2);
                r.displayDate = dis;
            }
            else {
                var options = { year: '2-digit', month: 'short', day: 'numeric' };
                r.displayDate = new Date(r.date.year, r.date.month - 1, r.date.day).toLocaleDateString('en-US', options);
            }
            var t = new Date(0, 0, 0, r.time.hour, r.time.minute, 0);
            var displayTime = t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).split(' ')[0];
            var split = displayTime.split(":");
            r.displayTime = split[0] + ":" + split[1];
        }
    };
    RoutinesComponent.prototype.deleteRoutine = function (routine) {
        this.routinesService.deleteRoutine(routine._id.$oid).subscribe(function (r) {
            console.log(r);
            //TODO in case of error refresh and show message
        });
        var index = 0;
        for (var i = 0; i < this.routines.length; i++) {
            if (this.routines[i]._id.$oid === routine._id.$oid) {
                index = i;
                break;
            }
        }
        this.routines.splice(index, 1);
    };
    RoutinesComponent.prototype.editRoutine = function (routine) {
        this.routerExtensions.navigate(["/routines", routine._id.$oid], {
            transition: {
                name: "fade",
                duration: 500,
                curve: "easeIn"
            }
        });
    };
    RoutinesComponent.prototype.addRoutine = function () {
        console.log("settings button pushed");
        this.routerExtensions.navigate(["/routines", ""], {
            transition: {
                name: "fade",
                duration: 500,
                curve: "easeIn"
            }
        });
    };
    RoutinesComponent = __decorate([
        core_1.Component({
            selector: "routines",
            templateUrl: "./content/routines/routines.component.html"
        }),
        __metadata("design:paramtypes", [routines_service_1.RoutinesService,
            router_1.RouterExtensions])
    ], RoutinesComponent);
    return RoutinesComponent;
}());
exports.RoutinesComponent = RoutinesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGluZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUMvRCx1REFBcUQ7QUFNckQ7SUFPSSwyQkFDWSxlQUFnQyxFQUNoQyxnQkFBa0M7UUFEbEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQUEsaUJBZ0JDO1FBZkEsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUMxQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7WUFDaEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLGlCQUFpQjtnQkFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDakMsQ0FBQztZQUNELEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDSSxHQUFHLENBQUEsQ0FBVSxVQUFhLEVBQWIsS0FB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QUcsQ0FBQyxDQUFDO2dCQUNWLEtBQUssQ0FBQztZQUNWLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBWTtRQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUQsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxHQUFHO2dCQUNiLEtBQUssRUFBRSxRQUFRO2FBQ2xCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUM5QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLFFBQVE7YUFDbEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0ZRLGlCQUFpQjtRQUo3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDRDQUE0QztTQUM1RCxDQUFDO3lDQVMrQixrQ0FBZTtZQUNkLHlCQUFnQjtPQVRyQyxpQkFBaUIsQ0E2RjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdGRCxJQTZGQztBQTdGWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0aW5lc1NlcnZpY2UgfSBmcm9tIFwiLi9yb3V0aW5lcy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcInJvdXRpbmVzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbnRlbnQvcm91dGluZXMvcm91dGluZXMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUm91dGluZXNDb21wb25lbnQge1xyXG5cclxuXHQvL1RPRE8gaGVyZSByZWZyZXNoIG9ubHkgb24gcmVmcmVzaCBidXR0b24gcHJlc3MsIG5hdmlnYXRpb24gYW5kIG9uIG9wZW5pbmcsIGFuZCBvbiBuZXcgYWRkLiBubyBpbnRlcnZhbHMgbmVlZGVkIFxyXG5cdHByaXZhdGUgY29ubmVjdGlvbkVycm9yO1xyXG5cdHByaXZhdGUgcm91dGluZXM7XHJcblx0cHJpdmF0ZSBsb2FkTWFzaztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRpbmVzU2VydmljZTogUm91dGluZXNTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICBcdGNvbnNvbGUuaW5mbyhcInJlZnJlc2hpbmcgcm91dGluZXNcIik7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkVycm9yID0gZmFsc2U7XHJcbiAgICBcdHRoaXMubG9hZE1hc2sgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJvdXRpbmVzU2VydmljZS5nZXRSb3V0aW5lcygpLnN1YnNjcmliZShyPT57XHJcbiAgICAgICAgICAgIGlmKHIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0aW5lcyA9IHI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdFJvdXRpbmVzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubG9hZE1hc2sgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRSb3V0aW5lcygpIHtcclxuICAgICAgICBmb3IobGV0IHIgb2YgdGhpcy5yb3V0aW5lcykge1xyXG4gICAgICAgICAgICBpZihyLnJlY3VycmluZykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2VlayA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXVxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpPTA7IGk8NzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoci5kYXlzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcyArPSAod2Vla1tpXStcIiwgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpcyA9IGRpcy5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgICAgICAgICByLmRpc3BsYXlEYXRlID0gZGlzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHllYXI6ICcyLWRpZ2l0JywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH07XHJcbiAgICAgICAgICAgICAgICByLmRpc3BsYXlEYXRlID0gbmV3IERhdGUoci5kYXRlLnllYXIsIHIuZGF0ZS5tb250aC0xLCByLmRhdGUuZGF5KS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCB0ID0gbmV3IERhdGUoMCwwLDAsIHIudGltZS5ob3VyLCByLnRpbWUubWludXRlLCAwKTtcclxuICAgICAgICAgICAgbGV0IGRpc3BsYXlUaW1lID0gdC50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTonMi1kaWdpdCd9KS5zcGxpdCgnICcpWzBdO1xyXG4gICAgICAgICAgICBsZXQgc3BsaXQgPSBkaXNwbGF5VGltZS5zcGxpdChcIjpcIik7XHJcbiAgICAgICAgICAgIHIuZGlzcGxheVRpbWUgPSBzcGxpdFswXStcIjpcIitzcGxpdFsxXTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVJvdXRpbmUocm91dGluZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lc1NlcnZpY2UuZGVsZXRlUm91dGluZShyb3V0aW5lLl9pZC4kb2lkKS5zdWJzY3JpYmUociA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xyXG4gICAgICAgICAgICAvL1RPRE8gaW4gY2FzZSBvZiBlcnJvciByZWZyZXNoIGFuZCBzaG93IG1lc3NhZ2VcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucm91dGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5yb3V0aW5lc1tpXS5faWQuJG9pZCA9PT0gcm91dGluZS5faWQuJG9pZCkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb3V0aW5lcy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdFJvdXRpbmUocm91dGluZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9yb3V0aW5lc1wiLCByb3V0aW5lLl9pZC4kb2lkXSwge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlSW5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIGFkZFJvdXRpbmUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXR0aW5ncyBidXR0b24gcHVzaGVkXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvcm91dGluZXNcIiwgXCJcIl0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICAgICAgY3VydmU6IFwiZWFzZUluXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==