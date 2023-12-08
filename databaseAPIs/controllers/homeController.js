const Home = require("../models/home")

exports.getHomeData = async (req, res, next) => {
    try {
        let customers = await Home.fetchCustomer();
        let products = await Home.fetchProduct();
        let sales = await Home.fetchSales();
        customers = customers[0];
        products = products[0];
        sales = sales[0];
        const allData = {
            customers,
            products,
            sales
        };

        res.json(allData);
    } catch (error) {
        next(error);
    }
}


