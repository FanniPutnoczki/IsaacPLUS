"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var streams_service_1 = require("./streams.service");
var StreamsComponent = /** @class */ (function () {
    function StreamsComponent(streamsService) {
        this.streamsService = streamsService;
        this.connectionError = false;
        this.streams = [];
        this.loadMask = false;
        this.intervalsStarted = false;
        this.refresh();
    }
    StreamsComponent.prototype.refresh = function () {
        var _this = this;
        console.info("refreshing streams");
        this.streams = [];
        this.connectionError = false;
        this.loadMask = true;
        this.streamsService.getStreams().subscribe(function (r) {
            if (r !== undefined) {
                _this.connectionError = false;
                _this.loadMask = false;
                _this.streams = r;
                console.dir(_this.streams);
                for (var _i = 0, _a = _this.streams; _i < _a.length; _i++) {
                    var stream = _a[_i];
                    _this.setData(stream);
                }
                _this.startIntervals();
            }
            else {
                _this.loadMask = false;
                _this.connectionError = true;
            }
        });
    };
    StreamsComponent.prototype.setData = function (stream) {
        var _this = this;
        this.streamsService.getStreamData(stream).subscribe(function (r) {
            if (r == undefined) {
                _this.stopIntervals();
                _this.connectionError = true;
            }
            else {
                for (var i = 0; i < r.length; i++) {
                    stream.view[i].data = r[i];
                }
            }
            console.dir(stream);
        });
    };
    StreamsComponent.prototype.startIntervals = function () {
        var _this = this;
        this.intervalsStarted = true;
        var _loop_1 = function (stream) {
            stream["interval"] = setInterval(function () {
                _this.setData(stream);
            }, stream.refreshRate * 1000);
        };
        for (var _i = 0, _a = this.streams; _i < _a.length; _i++) {
            var stream = _a[_i];
            _loop_1(stream);
        }
    };
    StreamsComponent.prototype.stopIntervals = function () {
        if (this.intervalsStarted) {
            for (var _i = 0, _a = this.streams; _i < _a.length; _i++) {
                var stream = _a[_i];
                clearInterval(stream["interval"]);
            }
        }
    };
    StreamsComponent = __decorate([
        core_1.Component({
            selector: "streams",
            templateUrl: "./content/streams/streams.component.html"
        }),
        __metadata("design:paramtypes", [streams_service_1.StreamsService])
    ], StreamsComponent);
    return StreamsComponent;
}());
exports.StreamsComponent = StreamsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHJlYW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyxxREFBbUQ7QUFPbkQ7SUFRSSwwQkFDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFBQSxpQkFvQkM7UUFuQkEsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUN4QyxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzFCLEdBQUcsQ0FBQSxDQUFlLFVBQVksRUFBWixLQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7b0JBQTFCLElBQUksTUFBTSxTQUFBO29CQUNWLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3hCO2dCQUNELEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsTUFBTTtRQUFkLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNqRCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUNoQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztZQUNMLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlDQUFjLEdBQWQ7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0NBQ3JCLE1BQU07WUFDVixNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsV0FBVyxDQUFDO2dCQUM3QixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLENBQUMsRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFKRCxHQUFHLENBQUEsQ0FBZSxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO1lBQTFCLElBQUksTUFBTSxTQUFBO29CQUFOLE1BQU07U0FJYjtJQUNMLENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUN2QixHQUFHLENBQUEsQ0FBZSxVQUFZLEVBQVosS0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLGNBQVksRUFBWixJQUFZO2dCQUExQixJQUFJLE1BQU0sU0FBQTtnQkFDVixhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDckM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQXJFUSxnQkFBZ0I7UUFKNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSwwQ0FBMEM7U0FDMUQsQ0FBQzt5Q0FVOEIsZ0NBQWM7T0FUakMsZ0JBQWdCLENBdUU1QjtJQUFELHVCQUFDO0NBQUEsQUF2RUQsSUF1RUM7QUF2RVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgU3RyZWFtc1NlcnZpY2UgfSBmcm9tIFwiLi9zdHJlYW1zLnNlcnZpY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwic3RyZWFtc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29udGVudC9zdHJlYW1zL3N0cmVhbXMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBTdHJlYW1zQ29tcG9uZW50IHtcblxuXHQvL1RPRE8gYXV0byByZWZyZXNoIG9uIGdpdmVuIGludGVydmFsc1xuXHRwcml2YXRlIHN0cmVhbXM7XG5cdHByaXZhdGUgY29ubmVjdGlvbkVycm9yO1xuXHRwcml2YXRlIGxvYWRNYXNrO1xuICAgIHByaXZhdGUgaW50ZXJ2YWxzU3RhcnRlZDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0cmVhbXNTZXJ2aWNlOiBTdHJlYW1zU2VydmljZSkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdHJlYW1zID0gW107XG4gICAgICAgIHRoaXMubG9hZE1hc2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbnRlcnZhbHNTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgICBcbiAgICByZWZyZXNoKCkge1xuICAgIFx0Y29uc29sZS5pbmZvKFwicmVmcmVzaGluZyBzdHJlYW1zXCIpO1xuICAgICAgICB0aGlzLnN0cmVhbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRXJyb3IgPSBmYWxzZTtcbiAgICBcdHRoaXMubG9hZE1hc2sgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0cmVhbXNTZXJ2aWNlLmdldFN0cmVhbXMoKS5zdWJzY3JpYmUociA9PiB7XG4gICAgICAgICAgICBpZihyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1hc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmVhbXMgPSByXG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIodGhpcy5zdHJlYW1zKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHN0cmVhbSBvZiB0aGlzLnN0cmVhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHN0cmVhbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbHMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWFzayA9IGZhbHNlOyBcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldERhdGEoc3RyZWFtKSB7XG4gICAgICAgIHRoaXMuc3RyZWFtc1NlcnZpY2UuZ2V0U3RyZWFtRGF0YShzdHJlYW0pLnN1YnNjcmliZShyPT57XG4gICAgICAgICAgICBpZihyID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEludGVydmFscygpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbkVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbS52aWV3W2ldLmRhdGEgPSByW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUuZGlyKHN0cmVhbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0SW50ZXJ2YWxzKCkge1xuICAgICAgICB0aGlzLmludGVydmFsc1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICBmb3IobGV0IHN0cmVhbSBvZiB0aGlzLnN0cmVhbXMpIHtcbiAgICAgICAgICAgIHN0cmVhbVtcImludGVydmFsXCJdID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShzdHJlYW0pO1xuICAgICAgICAgICAgfSwgc3RyZWFtLnJlZnJlc2hSYXRlICogMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdG9wSW50ZXJ2YWxzKCkge1xuICAgICAgICBpZih0aGlzLmludGVydmFsc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGZvcihsZXQgc3RyZWFtIG9mIHRoaXMuc3RyZWFtcykge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RyZWFtW1wiaW50ZXJ2YWxcIl0pO1xuICAgICAgICAgICAgfSAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=