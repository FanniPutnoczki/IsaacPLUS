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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHJlYW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQyxxREFBbUQ7QUFPbkQ7SUFRSSwwQkFDWSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQUEsaUJBcUJDO1FBcEJHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO1lBQ3hDLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO2dCQUNoQiw0QkFBNEI7Z0JBQzVCLEdBQUcsQ0FBQSxDQUFlLFVBQVksRUFBWixLQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7b0JBQTFCLElBQUksTUFBTSxTQUFBO29CQUNWLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3hCO2dCQUNELEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQ2hDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsTUFBTTtRQUFkLGlCQVlDO1FBWEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztZQUNqRCxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUNoQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsQ0FBQztZQUNMLENBQUM7WUFDRCxzQkFBc0I7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUFBLGlCQVFDO1FBUEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO2dDQUV2QixNQUFNO1lBQ1YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFdBQVcsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUUsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBTEQsK0JBQStCO1FBQy9CLEdBQUcsQ0FBQSxDQUFlLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7WUFBMUIsSUFBSSxNQUFNLFNBQUE7b0JBQU4sTUFBTTtTQUliO0lBQ0wsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDbEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNOLEdBQUcsQ0FBQSxDQUFlLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVk7Z0JBQTFCLElBQUksTUFBTSxTQUFBO2dCQUNWLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNyQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBNUVRLGdCQUFnQjtRQUo1QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLDBDQUEwQztTQUMxRCxDQUFDO3lDQVU4QixnQ0FBYztPQVRqQyxnQkFBZ0IsQ0E4RTVCO0lBQUQsdUJBQUM7Q0FBQSxBQTlFRCxJQThFQztBQTlFWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBTdHJlYW1zU2VydmljZSB9IGZyb20gXCIuL3N0cmVhbXMuc2VydmljZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdHJlYW1zXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZW50L3N0cmVhbXMvc3RyZWFtcy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFN0cmVhbXNDb21wb25lbnQge1xuXG5cdC8vVE9ETyBhdXRvIHJlZnJlc2ggb24gZ2l2ZW4gaW50ZXJ2YWxzXG5cdHByaXZhdGUgc3RyZWFtcztcblx0cHJpdmF0ZSBjb25uZWN0aW9uRXJyb3I7XG5cdHByaXZhdGUgbG9hZE1hc2s7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbHNTdGFydGVkO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RyZWFtc1NlcnZpY2U6IFN0cmVhbXNTZXJ2aWNlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29uc3RcIik7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbkVycm9yID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RyZWFtcyA9IFtdO1xuICAgICAgICB0aGlzLmxvYWRNYXNrID0gZmFsc2U7XG4gICAgICAgIC8vdGhpcy5pbnRlcnZhbHNTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICAgIFxuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuc3RvcEludGVydmFscygpO1xuICAgIFx0Y29uc29sZS5pbmZvKFwicmVmcmVzaGluZyBzdHJlYW1zXCIpO1xuICAgICAgICB0aGlzLnN0cmVhbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRXJyb3IgPSBmYWxzZTtcbiAgICBcdHRoaXMubG9hZE1hc2sgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0cmVhbXNTZXJ2aWNlLmdldFN0cmVhbXMoKS5zdWJzY3JpYmUociA9PiB7XG4gICAgICAgICAgICBpZihyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZE1hc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmVhbXMgPSByXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmRpcih0aGlzLnN0cmVhbXMpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgc3RyZWFtIG9mIHRoaXMuc3RyZWFtcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoc3RyZWFtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEludGVydmFscygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRNYXNrID0gZmFsc2U7IFxuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbkVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0RGF0YShzdHJlYW0pIHtcbiAgICAgICAgdGhpcy5zdHJlYW1zU2VydmljZS5nZXRTdHJlYW1EYXRhKHN0cmVhbSkuc3Vic2NyaWJlKHI9PntcbiAgICAgICAgICAgIGlmKHIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wSW50ZXJ2YWxzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLnZpZXdbaV0uZGF0YSA9IHJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jb25zb2xlLmRpcihzdHJlYW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydEludGVydmFscygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhZGRpbmcgaW50ZXJ2YWxzXCIpXG4gICAgICAgIC8vdGhpcy5pbnRlcnZhbHNTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgZm9yKGxldCBzdHJlYW0gb2YgdGhpcy5zdHJlYW1zKSB7XG4gICAgICAgICAgICBzdHJlYW1bXCJpbnRlcnZhbFwiXSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoc3RyZWFtKTtcbiAgICAgICAgICAgIH0sIHN0cmVhbS5yZWZyZXNoUmF0ZSAqIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcEludGVydmFscygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdG9wcGluZyBpbnRlcnZhbHNcIik7XG4gICAgICAgIGlmKHRydWUpIHtcbiAgICAgICAgICAgIGZvcihsZXQgc3RyZWFtIG9mIHRoaXMuc3RyZWFtcykge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3RyZWFtW1wiaW50ZXJ2YWxcIl0pO1xuICAgICAgICAgICAgfSAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmxvYWQoKSB7XG4gICAgICAgIHRoaXMuc3RvcEludGVydmFscygpO1xuICAgIH1cblxufSJdfQ==