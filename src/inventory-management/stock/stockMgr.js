var stockDA = require('./stockDA');


exports.getProduct = function (req, res) {
    try {
        stockDA.getProduct(req, res);
    } catch (error) {
        console.log(error);
    }
}