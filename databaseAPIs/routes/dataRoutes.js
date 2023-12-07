const express = require("express");
const router =  express.Router();
const customerController = require("../controllers/customerController");
const productController = require("../controllers/productsController");
const salesController = require("../controllers/salesController");
const homeController = require("../controllers/homeController");

router.get('/home', homeController.getHomeData) //WORKING
router.get('/customers', customerController.getAll); //WORKING
router.get('/customers/:id', customerController.getCustomer); //WORKING
router.get('/products', productController.getAll); //WORKING
router.get('/products/:id', productController.getProduct); //WORKING
router.get('/sales', salesController.getSales); //WORKING

router.post('/customers', customerController.add); //WORKING
router.post('/products', productController.add); //WORKING

router.put('/customers/:id', customerController.edit); //WORKING
router.put('/products/:id', productController.edit); //WORKING

router.delete('/customers/:id', customerController.delete);
router.delete('/products/:id', productController.delete); //WORKING

exports.routes = router;