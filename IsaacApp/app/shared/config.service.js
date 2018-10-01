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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2REFHOEI7QUFJOUI7SUFRSTtRQU5RLGVBQVUsR0FBVSxRQUFRLENBQUM7UUFDN0IsaUJBQVksR0FBVSxVQUFVLENBQUM7UUFNckMscUNBQXFDO0lBQ3pDLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxxQ0FBcUM7UUFDN0M7Ozs7Ozs7Ozs7Ozs7OztxQkFlYTtJQUNULENBQUM7SUFFRCxpQ0FBUyxHQUFULFVBQVUsTUFBYztRQUNwQixnQ0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pEOzs7Ozs7Ozs7Ozs7OztxQkFjYTtJQUNULENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksZ0NBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckM7Ozs7Ozs7Ozs7OztxQkFZYTtJQUNULENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksUUFBZ0I7UUFDeEIsZ0NBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRDs7Ozs7Ozs7Ozs7Ozs7cUJBY2E7SUFDVCxDQUFDO0lBdkZRLGFBQWE7UUFEekIsaUJBQVUsRUFBRTs7T0FDQSxhQUFhLENBeUZ6QjtJQUFELG9CQUFDO0NBQUEsQUF6RkQsSUF5RkM7QUF6Rlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gICAgZ2V0U3RyaW5nLFxuICAgIHNldFN0cmluZ1xufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFNlY3VyZVN0b3JhZ2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNlY3VyZS1zdG9yYWdlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maWdTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgRE9NQUlOX0tFWTpzdHJpbmcgPSBcIkRPTUFJTlwiO1xuICAgIHByaXZhdGUgUEFTU1dPUkRfS0VZOnN0cmluZyA9IFwiUEFTU1dPUkRcIjtcbiAgICBwcml2YXRlIHN0b3JhZ2U7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL3RoaXMuc3RvcmFnZSA9IG5ldyBTZWN1cmVTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgZ2V0RG9tYWluKCkge1xuICAgICAgICAvL1RPRE8gZG8gbm90IG1vY2tcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZyh0aGlzLkRPTUFJTl9LRVkpO1xuICAgICAgICAvL3JldHVybiBcImh0dHA6Ly8xOTIuMTY4LjAuMTYxOjUwMDBcIjtcbi8qICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlLmdldCh7XG4gICAgICAgICAgICAgICAga2V5OiB0aGlzLkRPTUFJTl9LRVlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbiggdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPIG5vdCBtb2NraW5nIGRhdGEgYnV0IHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcImh0dHA6Ly8xMC4wLjIuMjo1MDAwXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pOyovXG4gICAgfVxuXG4gICAgc2V0RG9tYWluKGRvbWFpbjogc3RyaW5nKSB7XG4gICAgICAgIHNldFN0cmluZyh0aGlzLkRPTUFJTl9LRVksIGRvbWFpbiA/IGRvbWFpbiA6ICcnKTtcbi8qICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0KHtcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuRE9NQUlOX0tFWSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZG9tYWluXG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH0pOyovXG4gICAgfVxuXG4gICAgZ2V0UGFzc3dvcmQoKSB7XG4gICAgICAgIGdldFN0cmluZyh0aGlzLlBBU1NXT1JEX0tFWSk7XG4vKiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5nZXQoe1xuICAgICAgICAgICAgICAgIGtleTogdGhpcy5QQVNTV09SRF9LRVlcbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTsqL1xuICAgIH1cblxuICAgIHNldFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgc2V0U3RyaW5nKHRoaXMuUEFTU1dPUkRfS0VZLCBwYXNzd29yZCA/IHBhc3N3b3JkIDogJycpO1xuLyogICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5zZXQoe1xuICAgICAgICAgICAgICAgIGtleTogdGhpcy5QQVNTV09SRF9LRVksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHBhc3N3b3JkXG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzYXZlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7Ki9cbiAgICB9XG5cbn1cbiJdfQ==