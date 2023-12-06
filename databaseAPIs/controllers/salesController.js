const Sales = require("../models/sales");

exports.getSales = (request, response) => { //WORKING
    Sales.fetchAll().then((results) => {
        response.json(results[0]);
    });
};
//
// exports.postSales = (req, res) => {
//     res.render('sales', {
//         from: 'sales'
//     })
// }
