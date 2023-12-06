const Product = require("../models/products");

exports.getProducts = (req, res) => { //WORKING
    Product.fetchAll().then((results) => {
            res.json(results[0]);
        })
}
//
// exports.postProducts = (req, res) => { //not worked on
//     res.render('products', {
//         from: 'products'
//     })
// }
//
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