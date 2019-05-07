var superCategoryDA = require('../../category/superCategory/superCategoryDA');
var SuperCategory = require('../../model/superCategory.model');
const multer = require('multer');



exports.superCategoryInsert = function (req, res) {
    try {
        superCategoryDA.superCategoryInsert(req, res);
    } catch (error) {
        console.log(error);
    }
}




exports.superCategoryDelete = function (req, res) {
    try {
        superCategoryDA.superCategoryDelete(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.superCategoryShow = function (req, res) {
    try {
        superCategoryDA.superCategoryShow(req, res);
    } catch (error) {
        console.log(error);
    }
}
