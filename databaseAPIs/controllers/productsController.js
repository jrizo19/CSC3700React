const Product = require("../models/products");
//
// exports.getProducts = (req, res) => {
//     Product.fetchAll()
//         .then((rows) =>{
//             res.render('products',{
//                 title: "All Products",
//                 from: 'products',
//                 item: rows[0]
//             })
//         })
// }
//
// exports.postProducts = (req, res) => {
//     res.render('products', {
//         from: 'products'
//     })
// }
//
// exports.getAddProduct = (req, res) => {
//     res.render('addProduct', {
//         from: 'products',
//         title: 'Add Product'
//     })
// }
//
// exports.postAddProduct =(req, res) => {
//     let i = req.body.item;
//     let p = req.body.price;
//     const product = new Product(i, p);
//     product.saveProduct()
//     res.redirect('products')
// }