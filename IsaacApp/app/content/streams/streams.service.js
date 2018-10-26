"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../../shared/http.service");
var StreamsService = /** @class */ (function () {
    //private disableSkillUrl: string = "skills/disable/";
    function StreamsService(httpService) {
        this.httpService = httpService;
        this.getStreamsUrl = "streams";
        this.getStreamDataUrl = "streams/";
    }
    StreamsService.prototype.getStreams = function () {
        return this.httpService.get(this.getStreamsUrl);
    };
    StreamsService.prototype.getStreamData = function (stream) {
        return this.httpService.get(this.getStreamDataUrl + stream.id);
    };
    StreamsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], StreamsService);
    return StreamsService;
}());
exports.StreamsService = StreamsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBEQUF3RDtBQUd4RDtJQUlJLHNEQUFzRDtJQUV0RCx3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKcEMsa0JBQWEsR0FBVyxTQUFTLENBQUM7UUFDbEMscUJBQWdCLEdBQVcsVUFBVSxDQUFDO0lBR0UsQ0FBQztJQUVqRCxtQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE1BQU07UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQWRRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FPd0IsMEJBQVc7T0FObkMsY0FBYyxDQWUxQjtJQUFELHFCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9odHRwLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cmVhbXNTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgZ2V0U3RyZWFtc1VybDogc3RyaW5nID0gXCJzdHJlYW1zXCI7XG4gICAgcHJpdmF0ZSBnZXRTdHJlYW1EYXRhVXJsOiBzdHJpbmcgPSBcInN0cmVhbXMvXCI7XG4gICAgLy9wcml2YXRlIGRpc2FibGVTa2lsbFVybDogc3RyaW5nID0gXCJza2lsbHMvZGlzYWJsZS9cIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7IH1cblxuICAgIGdldFN0cmVhbXMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuZ2V0U3RyZWFtc1VybCk7XG4gICAgfVxuICAgIFxuICAgIGdldFN0cmVhbURhdGEoc3RyZWFtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmdldFN0cmVhbURhdGFVcmwgKyBzdHJlYW0uaWQpO1xuICAgIH1cbn1cbiJdfQ==