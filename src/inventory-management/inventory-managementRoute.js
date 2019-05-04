var stockMgr = require('./stock/stockMgr');

module.exports = function(app) {
    app.route('/stock')
        .get(stockMgr.getProduct);
}