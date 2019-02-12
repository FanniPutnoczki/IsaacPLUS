"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var streams_service_1 = require("./streams.service");
var StreamsComponent = /** @class */ (function () {
    function StreamsComponent(streamsService) {
        this.streamsService = streamsService;
        console.log("const");
        this.connectionError = false;
        this.streams = [];
        this.loadMask = false;
        //this.intervalsStarted = true;
        this.refresh();
    }
    StreamsComponent.prototype.refresh = function () {
        var _this = this;
        this.stopIntervals();
        console.info("refreshing streams");
        this.streams = [];
        this.connectionError = false;
        this.loadMask = true;
        this.streamsService.getStreams().subscribe(function (r) {
            if (r !== undefined) {
                _this.connectionError = false;
                _this.loadMask = false;
                _this.streams = r;
                //console.dir(this.streams);
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
            //console.dir(stream);
        });
    };
    StreamsComponent.prototype.startIntervals = function () {
        var _this = this;
        console.log("adding intervals");
        var _loop_1 = function (stream) {
            stream["interval"] = setInterval(function () {
                _this.setData(stream);
            }, stream.refreshRate * 1000);
        };
        //this.intervalsStarted = true;
        for (var _i = 0, _a = this.streams; _i < _a.length; _i++) {
            var stream = _a[_i];
            _loop_1(stream);
        }
    };
    StreamsComponent.prototype.stopIntervals = function () {
        console.log("stopping intervals");
        if (true) {
            for (var _i = 0, _a = this.streams; _i < _a.length; _i++) {
                var stream = _a[_i];
                clearInterval(stream["interval"]);
            }
        }
    };
    StreamsComponent.prototype.unload = function () {
        this.stopIntervals();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHJlYW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyxxREFBbUQ7QUFPbkQ7SUFRSSwwQkFDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQUEsaUJBcUJDO1FBcEJHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ3hDLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO2dCQUNoQiw0QkFBNEI7Z0JBQzVCLEdBQUcsQ0FBQSxDQUFlLFVBQVksRUFBWixLQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7b0JBQTFCLElBQUksTUFBTSxTQUFBO29CQUNWLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3hCO2dCQUNELEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsTUFBTTtRQUFkLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNqRCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUNoQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztZQUNMLENBQUM7WUFDRCxzQkFBc0I7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUFBLGlCQVFDO1FBUEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO2dDQUV2QixNQUFNO1lBQ1YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFdBQVcsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBTEQsK0JBQStCO1FBQy9CLEdBQUcsQ0FBQSxDQUFlLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7WUFBMUIsSUFBSSxNQUFNLFNBQUE7b0JBQU4sTUFBTTtTQUliO0lBQ0wsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNOLEdBQUcsQ0FBQSxDQUFlLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7Z0JBQTFCLElBQUksTUFBTSxTQUFBO2dCQUNWLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNyQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBNUVRLGdCQUFnQjtRQUo1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDBDQUEwQztTQUMxRCxDQUFDO3lDQVU4QixnQ0FBYztPQVRqQyxnQkFBZ0IsQ0E4RTVCO0lBQUQsdUJBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcclxuaW1wb3J0IHsgU3RyZWFtc1NlcnZpY2UgfSBmcm9tIFwiLi9zdHJlYW1zLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJzdHJlYW1zXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbnRlbnQvc3RyZWFtcy9zdHJlYW1zLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0cmVhbXNDb21wb25lbnQge1xyXG5cclxuXHQvL1RPRE8gYXV0byByZWZyZXNoIG9uIGdpdmVuIGludGVydmFsc1xyXG5cdHByaXZhdGUgc3RyZWFtcztcclxuXHRwcml2YXRlIGNvbm5lY3Rpb25FcnJvcjtcclxuXHRwcml2YXRlIGxvYWRNYXNrO1xyXG4gICAgcHJpdmF0ZSBpbnRlcnZhbHNTdGFydGVkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc3RyZWFtc1NlcnZpY2U6IFN0cmVhbXNTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zdFwiKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RyZWFtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubG9hZE1hc2sgPSBmYWxzZTtcclxuICAgICAgICAvL3RoaXMuaW50ZXJ2YWxzU3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlZnJlc2goKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wSW50ZXJ2YWxzKCk7XHJcbiAgICBcdGNvbnNvbGUuaW5mbyhcInJlZnJlc2hpbmcgc3RyZWFtc1wiKTtcclxuICAgICAgICB0aGlzLnN0cmVhbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xyXG4gICAgXHR0aGlzLmxvYWRNYXNrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0cmVhbXNTZXJ2aWNlLmdldFN0cmVhbXMoKS5zdWJzY3JpYmUociA9PiB7XHJcbiAgICAgICAgICAgIGlmKHIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1hc2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtcyA9IHJcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5kaXIodGhpcy5zdHJlYW1zKTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgc3RyZWFtIG9mIHRoaXMuc3RyZWFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YShzdHJlYW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEludGVydmFscygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWFzayA9IGZhbHNlOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbkVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGEoc3RyZWFtKSB7XHJcbiAgICAgICAgdGhpcy5zdHJlYW1zU2VydmljZS5nZXRTdHJlYW1EYXRhKHN0cmVhbSkuc3Vic2NyaWJlKHI9PntcclxuICAgICAgICAgICAgaWYociA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEludGVydmFscygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLnZpZXdbaV0uZGF0YSA9IHJbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmRpcihzdHJlYW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0SW50ZXJ2YWxzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWRkaW5nIGludGVydmFsc1wiKVxyXG4gICAgICAgIC8vdGhpcy5pbnRlcnZhbHNTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICBmb3IobGV0IHN0cmVhbSBvZiB0aGlzLnN0cmVhbXMpIHtcclxuICAgICAgICAgICAgc3RyZWFtW1wiaW50ZXJ2YWxcIl0gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoc3RyZWFtKTtcclxuICAgICAgICAgICAgfSwgc3RyZWFtLnJlZnJlc2hSYXRlICogMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BJbnRlcnZhbHMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdG9wcGluZyBpbnRlcnZhbHNcIik7XHJcbiAgICAgICAgaWYodHJ1ZSkge1xyXG4gICAgICAgICAgICBmb3IobGV0IHN0cmVhbSBvZiB0aGlzLnN0cmVhbXMpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RyZWFtW1wiaW50ZXJ2YWxcIl0pO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdW5sb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc3RvcEludGVydmFscygpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==