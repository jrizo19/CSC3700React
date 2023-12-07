const Products = require("../models/products");

exports.getAll = (req, res) => {
    Products.fetchAll().then((results) => {
        res.json(results[0]);
    });
}

exports.getProduct = (req, res) => {
    Products.fetchProduct(req.params.id).then((results) => {
        res.json(results[0]);
    })
}

exports.add = (req, res) => {
    Products.add(req.body);
};

exports.edit = (req, res) => {
    Products.edit(req.body);
}

exports.delete = (req, res) => {
    Products.delete(req.body);
}