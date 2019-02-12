"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this.DOMAIN_KEY = "DOMAIN";
        this.PASSWORD_KEY = "PASSWORD";
        //this.storage = new SecureStorage();
    }
    ConfigService.prototype.getDomain = function () {
        //TODO do not mock
        return application_settings_1.getString(this.DOMAIN_KEY);
        //return "http://192.168.0.161:5000";
        /*        return new Promise((resolve, reject) => {
                    this.storage.get({
                        key: this.DOMAIN_KEY
                    })
                    .then( value => {
                            if(value) {
                                //TODO not mocking data but return value
                                resolve("http://10.0.2.2:5000");
                            } else {
                                resolve('');
                            }
                        }, error => {
                            resolve('');
                        }
                    );
                });*/
    };
    ConfigService.prototype.setDomain = function (domain) {
        application_settings_1.setString(this.DOMAIN_KEY, domain ? domain : '');
        /*        return new Promise((resolve,reject) => {
                    this.storage.set({
                        key: this.DOMAIN_KEY,
                        value: domain
                    }).then(
                        function(success) {
                            if(success) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    );
        
                });*/
    };
    ConfigService.prototype.getPassword = function () {
        application_settings_1.getString(this.PASSWORD_KEY);
        /*        return new Promise((resolve, reject) => {
                    this.storage.get({
                        key: this.PASSWORD_KEY
                    }).then(
                        function(value) {
                            if(value) {
                                resolve(value);
                            } else {
                                reject();
                            }
                        }
                    );
                });*/
    };
    ConfigService.prototype.setPassword = function (password) {
        application_settings_1.setString(this.PASSWORD_KEY, password ? password : '');
        /*        return new Promise((resolve,reject) => {
                    this.storage.set({
                        key: this.PASSWORD_KEY,
                        value: password
                    }).then(
                        function(success) {
                            if(success) {
                                console.log("saved");
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    );
                });*/
    };
    ConfigService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2REFHOEI7QUFJOUI7SUFRSTtRQU5RLGVBQVUsR0FBVSxRQUFRLENBQUM7UUFDN0IsaUJBQVksR0FBVSxVQUFVLENBQUM7UUFNckMscUNBQXFDO0lBQ3pDLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxxQ0FBcUM7UUFDN0M7Ozs7Ozs7Ozs7Ozs7OztxQkFlYTtJQUNULENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsTUFBYztRQUNwQixnQ0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pEOzs7Ozs7Ozs7Ozs7OztxQkFjYTtJQUNULENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksZ0NBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckM7Ozs7Ozs7Ozs7OztxQkFZYTtJQUNULENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksUUFBZ0I7UUFDeEIsZ0NBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRDs7Ozs7Ozs7Ozs7Ozs7cUJBY2E7SUFDVCxDQUFDO0lBdkZRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTs7T0FDQSxhQUFhLENBeUZ6QjtJQUFELG9CQUFDO0NBQUEsQUF6RkQsSUF5RkM7QUF6Rlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtcclxuICAgIGdldFN0cmluZyxcclxuICAgIHNldFN0cmluZ1xyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBTZWN1cmVTdG9yYWdlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zZWN1cmUtc3RvcmFnZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBET01BSU5fS0VZOnN0cmluZyA9IFwiRE9NQUlOXCI7XHJcbiAgICBwcml2YXRlIFBBU1NXT1JEX0tFWTpzdHJpbmcgPSBcIlBBU1NXT1JEXCI7XHJcbiAgICBwcml2YXRlIHN0b3JhZ2U7XHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy90aGlzLnN0b3JhZ2UgPSBuZXcgU2VjdXJlU3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERvbWFpbigpIHtcclxuICAgICAgICAvL1RPRE8gZG8gbm90IG1vY2tcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKHRoaXMuRE9NQUlOX0tFWSk7XHJcbiAgICAgICAgLy9yZXR1cm4gXCJodHRwOi8vMTkyLjE2OC4wLjE2MTo1MDAwXCI7XHJcbi8qICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KHtcclxuICAgICAgICAgICAgICAgIGtleTogdGhpcy5ET01BSU5fS0VZXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCB2YWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPIG5vdCBtb2NraW5nIGRhdGEgYnV0IHJldHVybiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKFwiaHR0cDovLzEwLjAuMi4yOjUwMDBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RG9tYWluKGRvbWFpbjogc3RyaW5nKSB7XHJcbiAgICAgICAgc2V0U3RyaW5nKHRoaXMuRE9NQUlOX0tFWSwgZG9tYWluID8gZG9tYWluIDogJycpO1xyXG4vKiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KHtcclxuICAgICAgICAgICAgICAgIGtleTogdGhpcy5ET01BSU5fS0VZLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRvbWFpblxyXG4gICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgfSk7Ki9cclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXNzd29yZCgpIHtcclxuICAgICAgICBnZXRTdHJpbmcodGhpcy5QQVNTV09SRF9LRVkpO1xyXG4vKiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldCh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuUEFTU1dPUkRfS0VZXHJcbiAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICBzZXRTdHJpbmcodGhpcy5QQVNTV09SRF9LRVksIHBhc3N3b3JkID8gcGFzc3dvcmQgOiAnJyk7XHJcbi8qICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoe1xyXG4gICAgICAgICAgICAgICAga2V5OiB0aGlzLlBBU1NXT1JEX0tFWSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwYXNzd29yZFxyXG4gICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=