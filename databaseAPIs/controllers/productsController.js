const Products = require("../models/products");

exports.getAll = (req, res) => {
    Products.fetchAll().then((results) => {
        res.json(results[0]);
    });
}

exports.getProduct = (req, res) => {
    Products.fetchProduct(req.params.id).then((results) => {
        res.json(results[0][0]);
    })
}

exports.add = (req, res) => {
    Products.add(req.body).then((results) => {
        res.status(201).json({'ItemID': results, 'ItemName': req.body.ItemName, 'ItemPrice': req.body.ItemPrice});
    });
};

exports.edit = (req, res) => {
    Products.edit(req.body).then(() => {
        res.status(200);
    });
}

exports.delete = (req, res) => {
    Products.delete(req.params.id).then(() => {
        res.status(204);
    });
}