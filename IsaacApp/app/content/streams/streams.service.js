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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBEQUF3RDtBQUd4RDtJQUlJLHNEQUFzRDtJQUV0RCx3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKcEMsa0JBQWEsR0FBVyxTQUFTLENBQUM7UUFDbEMscUJBQWdCLEdBQVcsVUFBVSxDQUFDO0lBR0UsQ0FBQztJQUVqRCxtQ0FBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE1BQU07UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQWRRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FPd0IsMEJBQVc7T0FObkMsY0FBYyxDQWUxQjtJQUFELHFCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9odHRwLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cmVhbXNTZXJ2aWNlICB7XG5cbiAgICBwcml2YXRlIGdldFN0cmVhbXNVcmw6IHN0cmluZyA9IFwic3RyZWFtc1wiO1xuICAgIHByaXZhdGUgZ2V0U3RyZWFtRGF0YVVybDogc3RyaW5nID0gXCJzdHJlYW1zL1wiO1xuICAgIC8vcHJpdmF0ZSBkaXNhYmxlU2tpbGxVcmw6IHN0cmluZyA9IFwic2tpbGxzL2Rpc2FibGUvXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSkgeyB9XG5cbiAgICBnZXRTdHJlYW1zKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmdldFN0cmVhbXNVcmwpO1xuICAgIH1cbiAgICBcbiAgICBnZXRTdHJlYW1EYXRhKHN0cmVhbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5nZXQodGhpcy5nZXRTdHJlYW1EYXRhVXJsICsgc3RyZWFtLmlkKTtcbiAgICB9XG59XG4iXX0=