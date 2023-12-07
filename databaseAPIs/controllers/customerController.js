const Customers = require("../models/customers");

exports.getAll = (req, res) => {
    Customers.fetchAll().then((results) => {
        res.json(results[0]);
    })
};

exports.getCustomer = (req, res) => {
    Customers.fetchCustomer(req.params.id).then((results) => {
        res.json(results[0]);
    })
}

exports.add = (req, res) => {
    Customers.add(req.body);
}

exports.edit = (req, res) => {
    Customers.edit(req.body);
}

exports.delete = (req, res) => {
    Customers.delete(req.body);
}

