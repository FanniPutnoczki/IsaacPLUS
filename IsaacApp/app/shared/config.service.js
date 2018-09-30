"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_secure_storage_1 = require("nativescript-secure-storage");
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.DOMAIN_KEY = "DOMAIN";
        this.PASSWORD_KEY = "PASSWORD";
        this.storage = new nativescript_secure_storage_1.SecureStorage();
    }
    ConfigService.prototype.getDomain = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get({
                key: _this.DOMAIN_KEY
            }).then(function (value) {
                if (value) {
                    //TODO not mocking data but return value
                    resolve("http://10.0.2.2:5000");
                }
                else {
                    reject();
                }
            });
        });
    };
    ConfigService.prototype.setDomain = function (domain) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.set({
                key: _this.DOMAIN_KEY,
                value: domain
            }).then(function (success) {
                if (success) {
                    resolve();
                }
                else {
                    reject();
                }
            });
        });
    };
    ConfigService.prototype.getPassword = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get({
                key: _this.PASSWORD_KEY
            }).then(function (value) {
                if (value) {
                    resolve(value);
                }
                else {
                    reject();
                }
            });
        });
    };
    ConfigService.prototype.setPassword = function (password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.set({
                key: _this.PASSWORD_KEY,
                value: password
            }).then(function (success) {
                if (success) {
                    console.log("saved");
                    resolve();
                }
                else {
                    reject();
                }
            });
        });
    };
    ConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUszQywyRUFBNEQ7QUFHNUQ7SUFRSTtRQU5RLGVBQVUsR0FBVSxRQUFRLENBQUM7UUFDN0IsaUJBQVksR0FBVSxVQUFVLENBQUM7UUFNckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDJDQUFhLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUFBLGlCQWVDO1FBYkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ2IsR0FBRyxFQUFFLEtBQUksQ0FBQyxVQUFVO2FBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUUsVUFBQSxLQUFLO2dCQUNOLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQ1Asd0NBQXdDO29CQUN4QyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixNQUFNLEVBQUUsQ0FBQztnQkFDYixDQUFDO1lBQ0wsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsTUFBYztRQUF4QixpQkFnQkM7UUFmRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUMsTUFBTTtZQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDYixHQUFHLEVBQUUsS0FBSSxDQUFDLFVBQVU7Z0JBQ3BCLEtBQUssRUFBRSxNQUFNO2FBQ2hCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBUyxPQUFPO2dCQUNaLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ1QsT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixNQUFNLEVBQUUsQ0FBQztnQkFDYixDQUFDO1lBQ0wsQ0FBQyxDQUNKLENBQUM7UUFFTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQUEsaUJBY0M7UUFiRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztnQkFDYixHQUFHLEVBQUUsS0FBSSxDQUFDLFlBQVk7YUFDekIsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFTLEtBQUs7Z0JBQ1YsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osTUFBTSxFQUFFLENBQUM7Z0JBQ2IsQ0FBQztZQUNMLENBQUMsQ0FDSixDQUFDO1FBQ04sQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLFFBQWdCO1FBQTVCLGlCQWdCQztRQWZHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBQyxNQUFNO1lBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNiLEdBQUcsRUFBRSxLQUFJLENBQUMsWUFBWTtnQkFDdEIsS0FBSyxFQUFFLFFBQVE7YUFDbEIsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFTLE9BQU87Z0JBQ1osRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQixPQUFPLEVBQUUsQ0FBQztnQkFDZCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE1BQU0sRUFBRSxDQUFDO2dCQUNiLENBQUM7WUFDTCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9FUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQWlGekI7SUFBRCxvQkFBQztDQUFBLEFBakZELElBaUZDO0FBakZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICAgIGdldFN0cmluZyxcbiAgICBzZXRTdHJpbmdcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBTZWN1cmVTdG9yYWdlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zZWN1cmUtc3RvcmFnZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XG5cbiAgICBwcml2YXRlIERPTUFJTl9LRVk6c3RyaW5nID0gXCJET01BSU5cIjtcbiAgICBwcml2YXRlIFBBU1NXT1JEX0tFWTpzdHJpbmcgPSBcIlBBU1NXT1JEXCI7XG4gICAgcHJpdmF0ZSBzdG9yYWdlO1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IFNlY3VyZVN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBnZXREb21haW4oKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoe1xuICAgICAgICAgICAgICAgIGtleTogdGhpcy5ET01BSU5fS0VZXG4gICAgICAgICAgICB9KS50aGVuKCB2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE8gbm90IG1vY2tpbmcgZGF0YSBidXQgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFwiaHR0cDovLzEwLjAuMi4yOjUwMDBcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldERvbWFpbihkb21haW46IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuRE9NQUlOX0tFWSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZG9tYWluXG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldFBhc3N3b3JkKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldCh7XG4gICAgICAgICAgICAgICAga2V5OiB0aGlzLlBBU1NXT1JEX0tFWVxuICAgICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldCh7XG4gICAgICAgICAgICAgICAga2V5OiB0aGlzLlBBU1NXT1JEX0tFWSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcGFzc3dvcmRcbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBpZihzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNhdmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==