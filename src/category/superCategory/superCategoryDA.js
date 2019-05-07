'use strict';
var SuperCategory = require('../../model/superCategory.model');
var appSetting = require('../../config/configure');
var rmdir = require('rmdir');
exports.superCategoryInsert = function (req, res) {

    var superCategoryData = new SuperCategory(req.body);
    superCategoryData.categoryName = req.body.categoryName;
    superCategoryData.categoryDescription = req.body.categoryDescription;

    superCategoryData.save(
        function (err, superCat) {
            if (err) { // if it contains error return 0
                res.status(500).send({
                    "result": 0
                });
            } else {
                SuperCategory.find({}).select('categoryName  categoryDescription').exec(function (err, superCat) {
                    if (err) {
                        res.status(500).send({
                            message: "Some error occurred while retrieving notes."
                        });
                    } else {
                        res.json(superCat);
                    }
                });
            }
        });

}


exports.superCategoryDelete = function (req, res) {
    SuperCategory.findByIdAndRemove(req.params.categoryId, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {  
            SuperCategory.find({}).select().exec(function (err, superCat) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    res.status(200).json(superCat);
                }
            });
        }
    });
}

exports.superCategoryShow = function (req, res) {
    SuperCategory.find({}).select().exec(function (err, superCat) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(superCat);
        }
    });
}