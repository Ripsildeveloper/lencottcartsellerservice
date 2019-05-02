var orderMgr = require('./orderDetail/orderMgr');

module.exports = function (app) {
    app.route('/orders')
        .get(orderMgr.viewOrders);
    app.route('/orders/:id')
        .get(orderMgr.uniqueOrderView);
    app.route('/orders/:id')
        .put(orderMgr.orderStatusUpdate);
}