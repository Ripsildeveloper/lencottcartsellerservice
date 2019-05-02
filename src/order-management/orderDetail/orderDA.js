var Order = require('../../model/order.model');



  exports.viewOrders = function (req, res) {
    Order.find({}).sort({
      orderId: -1
    }).exec(function (err, details) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        Order.aggregate([
          {
            $lookup:
            {
              from: "products",
              localField: "items.productId",
              foreignField: "_id",
              as: "cart_product"
            }
          }
        ], function (err, orderData) {
          if (err) {
            res.status(500).send({
              message: "no cart product"
            });
          } else {
            res.status(200).json(orderData);
          }
        });
      }
    });
  }


  exports.uniqueOrderView = function (req, res) {
    Order.find({
      'customerId': req.params.id
    }).sort({
      orderId: -1
    }).exec(function (err, details) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        Order.aggregate([
          { $match: { customerId: req.params.id } },
          {
            $lookup:
            {
              from: "products",
              localField: "items.productId",
              foreignField: "_id",
              as: "cart_product"
            }
          }
        ], function (err, orderData) {
          if (err) {
            res.status(500).send({
              message: "no cart product"
            });
          } else {
            console.log(orderData);
            res.status(200).json(orderData);
          }
        });
      }
    });
  }

  /* exports.orderStatusUpdate = function (req, res) {
    Order.findOne({
      'customerId': req.params.id
    }).sort({
      orderId: -1
    }).exec(function (err, statusUpdate) {
      if (err) {
        res.status(500).send({
          message: "Some error occurred while retrieving notes."
        });
      } else {
        statusUpdate.orderStatus = req.body.status;
        Order.aggregate([
          { $match: { customerId: req.params.id } },
          {
            $lookup:
            {
              from: "products",
              localField: "items.productId",
              foreignField: "_id",
              as: "cart_product"
            }
          }
        ], function (err, orderData) {
          if (err) {
            res.status(500).send({
              message: "no cart product"
            });
          } else {
            console.log(orderData);
            res.status(200).json(orderData);
          }
        });
      }
    });
  } */

  exports.orderStatusUpdate = function (req, res) {
    Order.findOne({_id: req.params.id}).select().exec(function (err, orderData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving all orders."
            });
        } else {
            orderData.orderStatus = req.body.orderStatus;
            orderData.save(function(err, orders) {
               if(err) {
                   console.log(err);
               } else {
                Order.aggregate([
                    {
                      $lookup:
                      {
                        from: "products",
                        localField: "items.productId",
                        foreignField: "_id",
                        as: "cart_product"
                      }
                    }
                  ], function (err, orderData) {
                    if (err) {
                      res.status(500).send({
                        message: "no cart product"
                      });
                    } else {
                      res.status(200).json(orderData);
                    }
                  });
               }
           })
            
        }
    });
}