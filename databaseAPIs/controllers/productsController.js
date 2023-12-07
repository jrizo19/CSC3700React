const Products = require("../models/products");

exports.getAll = (req, res) => { //WORKING
    Products.fetchAll().then((results) => {
        res.json(results[0]);
    });
}

exports.getProduct = (req, res) => { //WORKING
    Products.fetchProduct(req.params.id).then((results) => {
        res.json(results[0]);
    })
}

exports.add = (req, res) => { //WORKING
    Products.add(req.body);
};

exports.edit = (req, res) => { //WORKING
    Products.edit(req.body);
}

exports.delete = (req, res) => { //WORKING
    Products.delete(req.body);
}