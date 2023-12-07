const Sales = require("../models/sales");

exports.getSales = (req, res) => {
    Sales.fetchAll().then((results) => {
        res.json(results[0]);
    });
};