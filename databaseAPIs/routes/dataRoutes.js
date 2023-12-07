const express = require("express");
const router =  express.Router();
const customerController = require("../controllers/customerController");
const productController = require("../controllers/productsController");
const salesController = require("../controllers/salesController");
const homeController = require("../controllers/homeController");
const ingredientsController = require("../controllers/ingredientsController");

router.get('/ingredients', ingredientsController.getIngredients);//first GET, just a test
router.get('/customers', customerController.getAll); //WORKING
router.get('/customers/:id', customerController.getCustomer); //WORKING
router.get('/sales', salesController.getSales); //WORKING
router.get('/products', productController.getAll); //WORKING
router.get('/products/:id', productController.getProduct); //WORKING
router.post('/products', productController.add); //?
router.get('/home', homeController.getHomeData) //WORKING *

// router.get('/updateCustomer/:id', customerController.getUpdateCustomer)
// router.post('/postUpdateCustomer', customerController.postUpdateCustomer);
// router.post('/customers', customerController.postAddCustomer)
// router.get('/addCustomer', customerController.getAddCustomer)


// router.post('/products', productController.postProducts);
// router.post('/postProducts', productController.postAddProduct);
// router.get('/addProduct', productController.getAddProduct);
//
//
// router.post('/sales', salesController.postSales);
//

exports.routes = router;