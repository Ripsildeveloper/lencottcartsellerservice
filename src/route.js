var accountRoutes = require('./account/accountRoute');
var categoryRoutes = require('./category/categoryRoute');
var productRoutes = require('./product/productRoute');
var buyerRoutes = require('./buyer/buyerRoute');
var settingRoutes = require('./settings/settingsRoute');
var moqRoutes = require('./moq/moqRoute');
var customerRoutes = require('./customer-management/customerManagementRoute');

exports.loadRoutes = function (app) {
    moqRoutes(app);
    accountRoutes(app);
    categoryRoutes(app);
    productRoutes(app);
    buyerRoutes(app);
    settingRoutes(app);
    customerRoutes(app)
};

