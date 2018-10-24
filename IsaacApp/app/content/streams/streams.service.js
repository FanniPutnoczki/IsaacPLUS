"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../../shared/http.service");
var StreamsService = /** @class */ (function () {
    function StreamsService(httpService) {
        this.httpService = httpService;
        this.getSkillsUrl = "skills/get";
        this.enableSkillUrl = "skills/enable/";
        this.disableSkillUrl = "skills/disable/";
    }
    StreamsService.prototype.getStreams = function () {
        //return this.httpService.get(this.getSkillsUrl);
        /*        let skills: Skill[] = [
                    {
                        name: "Hello",
                        url: "...",
                        enabled: false
                    },
                    {
                        name: "Lamp",
                        url: "...",
                        enabled: true
                    }
                ]
                return skills;*/
    };
    StreamsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_service_1.HttpService])
    ], StreamsService);
    return StreamsService;
}());
exports.StreamsService = StreamsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyZWFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyZWFtcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBEQUF3RDtBQUd4RDtJQU1JLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpwQyxpQkFBWSxHQUFXLFlBQVksQ0FBQztRQUNwQyxtQkFBYyxHQUFXLGdCQUFnQixDQUFDO1FBQzFDLG9CQUFlLEdBQVcsaUJBQWlCLENBQUM7SUFFSixDQUFDO0lBRWpELG1DQUFVLEdBQVY7UUFFSSxpREFBaUQ7UUFFekQ7Ozs7Ozs7Ozs7OztnQ0FZd0I7SUFDcEIsQ0FBQztJQXpCUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBT3dCLDBCQUFXO09BTm5DLGNBQWMsQ0EyQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2h0dHAuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RyZWFtc1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBnZXRTa2lsbHNVcmw6IHN0cmluZyA9IFwic2tpbGxzL2dldFwiO1xuICAgIHByaXZhdGUgZW5hYmxlU2tpbGxVcmw6IHN0cmluZyA9IFwic2tpbGxzL2VuYWJsZS9cIjtcbiAgICBwcml2YXRlIGRpc2FibGVTa2lsbFVybDogc3RyaW5nID0gXCJza2lsbHMvZGlzYWJsZS9cIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7IH1cblxuICAgIGdldFN0cmVhbXMoKXtcblxuICAgICAgICAvL3JldHVybiB0aGlzLmh0dHBTZXJ2aWNlLmdldCh0aGlzLmdldFNraWxsc1VybCk7XG5cbi8qICAgICAgICBsZXQgc2tpbGxzOiBTa2lsbFtdID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiSGVsbG9cIixcbiAgICAgICAgICAgICAgICB1cmw6IFwiLi4uXCIsXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJMYW1wXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBcIi4uLlwiLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICByZXR1cm4gc2tpbGxzOyovXG4gICAgfVxuICAgIFxufVxuIl19