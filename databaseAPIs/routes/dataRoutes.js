const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const productController = require("../controllers/productsController");
const salesController = require("../controllers/salesController");
const homeController = require("../controllers/homeController");

router.get('/home', homeController.getHomeData);
router.get('/customers', customerController.getAll);
router.get('/customers/:id', customerController.getCustomer);
router.get('/products', productController.getAll);
router.get('/products/:id', productController.getProduct);
router.get('/sales', salesController.getSales);

router.post('/customers', customerController.add);
router.post('/products', productController.add);

router.put('/customers/:id', customerController.edit);
router.put('/products/:id', productController.edit);

router.delete('/customers/:id', customerController.delete);
router.delete('/products/:id', productController.delete);

exports.routes = router;