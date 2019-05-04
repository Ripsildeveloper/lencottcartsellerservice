var accountRoutes = require('./account/accountRoute');
var categoryRoutes = require('./category/categoryRoute');
var productRoutes = require('./product/productRoute');
var buyerRoutes = require('./buyer/buyerRoute');
var settingRoutes = require('./settings/settingsRoute');
var moqRoutes = require('./moq/moqRoute');
var customerRoutes = require('./customer-management/customerManagementRoute');
var orderManagementRoutes = require('./order-management/order-managementRoute');
var inventoryManagementRoutes = require('./inventory-management/inventory-managementRoute');

exports.loadRoutes = function (app) {
    moqRoutes(app);
    accountRoutes(app);
    categoryRoutes(app);
    productRoutes(app);
    buyerRoutes(app);
    settingRoutes(app);
    customerRoutes(app);
    orderManagementRoutes(app);
    inventoryManagementRoutes(app);
};

