const Sales = require("../models/sales");

exports.getSales = (req, res) => { //WORKING
    Sales.fetchAll().then((results) => {
        res.json(results[0]);
    });
};
//
// exports.postSales = (req, res) => {
//     res.render('sales', {
//         from: 'sales'
//     })
// }
