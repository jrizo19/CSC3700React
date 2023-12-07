const Product = require("../models/products");
const {parse} = require("body-parser/lib/types/json");

exports.getAll = (req, res) => { //WORKING
    Product.fetchAll().then((results) => {
        res.json(results[0]);
    });
}

exports.getProduct = (req, res) => { //WORKING
    Product.fetchProduct(req.params).then((results) => {
        res.json(results[0]);
    })
}

exports.post = (req, res) => { //TINKERED WITH
    Product.add(JSON.parse(req.body));
};


// exports.getAddProduct = (req, res) => { //not worked on
//     res.render('addProduct', {
//         from: 'products',
//         title: 'Add Product'
//     })
// }
//
// exports.postAddProduct =(req, res) => { //not worked on
//     let i = req.body.item;
//     let p = req.body.price;
//     const product = new Product(i, p);
//     product.saveProduct()
//     res.redirect('products')
// }