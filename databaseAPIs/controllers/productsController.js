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

exports.add = (req, res) => { //TINKERED WITH
    Products.add(req.body);
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