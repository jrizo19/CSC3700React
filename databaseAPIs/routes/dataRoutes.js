const express = require("express");
const router =  express.Router();
const customerController = require("../controllers/customerController");
const productController = require("../controllers/productsController");
const salesController = require("../controllers/salesController");
const homeController = require("../controllers/homeController");
const ingredientsController = require("../controllers/ingredientsController");

router.get('/customers', customerController.getCustomer);
router.get('/ingredients', ingredientsController.getIngredients);
// router.get('/updateCustomer/:id', customerController.getUpdateCustomer)
// router.post('/postUpdateCustomer', customerController.postUpdateCustomer);
// router.post('/customers', customerController.postAddCustomer)
// router.get('/addCustomer', customerController.getAddCustomer)


// router.get('/products', productController.getProducts);
// router.post('/products', productController.postProducts);
// router.post('/postProducts', productController.postAddProduct);
// router.get('/addProduct', productController.getAddProduct);
//
//
// router.get('/sales', salesController.getSales);
// router.post('/sales', salesController.postSales);
//
// router.get('/home', homeController.getHomeData)

exports.routes = router;