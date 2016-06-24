"use strict";
var home_component_1 = require('../components/home.component');
var admin_component_1 = require('../components/admin.component');
var dashboard_component_1 = require('../components/dashboard.component');
exports.HomeRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: '',
                component: dashboard_component_1.DashboardComponent
            }
        ]
    },
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
    },
];
//# sourceMappingURL=home.routes.js.map