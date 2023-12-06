const express = require("express");
const router =  express.Router();
const customerController = require("../controllers/customerController");
const productController = require("../controllers/productsController");
const salesController = require("../controllers/salesController");
const homeController = require("../controllers/homeController");
const ingredientsController = require("../controllers/ingredientsController");

router.get('/ingredients', ingredientsController.getIngredients);//first GET, just a test
router.get('/customers', customerController.getCustomer);
router.get('/sales', salesController.getSales);
router.get('/products', productController.getProducts);
router.get('/home', homeController.getHomeData)



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