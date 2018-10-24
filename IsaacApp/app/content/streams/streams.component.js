"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StreamsComponent = /** @class */ (function () {
    function StreamsComponent() {
        this.connectionError = false;
        this.streams = [];
        this.loadMask = false;
        this.refresh();
    }
    StreamsComponent.prototype.refresh = function () {
        console.info("refreshing streams");
        this.streams = [];
        this.connectionError = false;
        this.loadMask = true;
    };
    StreamsComponent = __decorate([
        core_1.Component({
            selector: "streams",
            templateUrl: "./content/streams/streams.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], StreamsComponent);
    return StreamsComponent;
}());
exports.StreamsComponent = StreamsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdHJlYW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQU8xQztJQU9JO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQ0MsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7SUFuQlEsZ0JBQWdCO1FBSjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsMENBQTBDO1NBQzFELENBQUM7O09BQ1csZ0JBQWdCLENBcUI1QjtJQUFELHVCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJzdHJlYW1zXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb250ZW50L3N0cmVhbXMvc3RyZWFtcy5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIFN0cmVhbXNDb21wb25lbnQge1xuXG5cdC8vVE9ETyBhdXRvIHJlZnJlc2ggb24gZ2l2ZW4gaW50ZXJ2YWxzXG5cdHByaXZhdGUgc3RyZWFtcztcblx0cHJpdmF0ZSBjb25uZWN0aW9uRXJyb3I7XG5cdHByaXZhdGUgbG9hZE1hc2s7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdHJlYW1zID0gW107XG4gICAgICAgIHRoaXMubG9hZE1hc2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICAgIFxuICAgIHJlZnJlc2goKSB7XG4gICAgXHRjb25zb2xlLmluZm8oXCJyZWZyZXNoaW5nIHN0cmVhbXNcIik7XG4gICAgICAgIHRoaXMuc3RyZWFtcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25FcnJvciA9IGZhbHNlO1xuICAgIFx0dGhpcy5sb2FkTWFzayA9IHRydWU7XG4gICAgfVxuXG59Il19