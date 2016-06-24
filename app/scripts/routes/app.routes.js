"use strict";
var router_1 = require('@angular/router');
var home_routes_1 = require('../routes/home.routes');
var can_deactivate_guard_1 = require('../class/can.deactivate.guard');
var auth_1 = require('../providers/auth');
exports.routes = home_routes_1.HomeRoutes.slice();
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    can_deactivate_guard_1.CanDeactivateGuard,
    auth_1.AUTH_PROVIDERS
];
//# sourceMappingURL=app.routes.js.map