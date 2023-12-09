const Customers = require("../models/customers");

exports.getAll = (req, res) => {
    Customers.fetchAll().then((results) => {
        res.json(results[0]);
    })
};

exports.getCustomer = (req, res) => {
    Customers.fetchCustomer(req.params.id).then((results) => {
        res.json(results[0][0]);
    })
}

exports.add = (req, res) => {
    Customers.add(req.body).then((results) => {
       res.status(201).json({'CustomerID': results, 'CustomerName': req.body.CustomerName, 'CustomerEmail': req.body.CustomerEmail});
    });
}

exports.edit = (req, res) => {
    Customers.edit(req.body).then(() => {
        res.status(200);
    });
}

exports.delete = (req, res) => {
    Customers.delete(req.params.id).then(() => {
        res.status(204);
    });
}

