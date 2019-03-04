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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBEQUF3RDtBQUd4RDtJQUlJLHNEQUFzRDtJQUV0RCx3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKcEMsa0JBQWEsR0FBVyxTQUFTLENBQUM7UUFDbEMscUJBQWdCLEdBQVcsVUFBVSxDQUFDO0lBR0UsQ0FBQztJQUVqRCxtQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE1BQU07UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQWRRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FPd0IsMEJBQVc7T0FObkMsY0FBYyxDQWUxQjtJQUFELHFCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2h0dHAuc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RyZWFtc1NlcnZpY2UgIHtcclxuXHJcbiAgICBwcml2YXRlIGdldFN0cmVhbXNVcmw6IHN0cmluZyA9IFwic3RyZWFtc1wiO1xyXG4gICAgcHJpdmF0ZSBnZXRTdHJlYW1EYXRhVXJsOiBzdHJpbmcgPSBcInN0cmVhbXMvXCI7XHJcbiAgICAvL3ByaXZhdGUgZGlzYWJsZVNraWxsVXJsOiBzdHJpbmcgPSBcInNraWxscy9kaXNhYmxlL1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBnZXRTdHJlYW1zKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuZ2V0U3RyZWFtc1VybCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFN0cmVhbURhdGEoc3RyZWFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0KHRoaXMuZ2V0U3RyZWFtRGF0YVVybCArIHN0cmVhbS5pZCk7XHJcbiAgICB9XHJcbn1cclxuIl19