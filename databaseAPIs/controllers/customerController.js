const Customers = require("../models/customers");

exports.getAll = (req, res) => { //WORKING
   Customers.fetchAll().then((results) => {
       res.json(results[0]);
   })
};

exports.getCustomer = (req, res) => { //WORKING
    Customers.fetchCustomer(req.params.id).then((results) => {
        res.json(results[0]);
    })
}

exports.add = (req, res) => { //WORKING
    Customers.add(req.body);
}

exports.edit = (req, res) => { //WORKING
    Customers.edit(req.body);
}

exports.delete = (req, res) => {
    Customers.delete(req.body);
}

