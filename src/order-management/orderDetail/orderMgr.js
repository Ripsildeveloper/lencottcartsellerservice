
var orderDA = require('./orderDA');

exports.viewOrders = function (req, res) {
    try {
        orderDA.viewOrders(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.uniqueOrderView = function (req, res) {
    try {
        orderDA.uniqueOrderView(req, res);
    } catch (error) {
        console.log(error);
    }
    
}

exports.orderStatusUpdate = function (req, res) {
    try {
        orderDA.orderStatusUpdate(req, res);
    } catch (error) {
        console.log(error);
    }
}
