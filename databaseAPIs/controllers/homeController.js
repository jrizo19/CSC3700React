const Home = require("../models/home")

exports.getHomeData = async (req, res, next) => { //WORKING
    try {
        const customer = await Home.fetchCustomer();
        const product = await Home.fetchProduct();
        const sales = await Home.fetchSales();
        const allData = [
            {customer},
            {product},
            {sales}
        ];

        res.json(allData);
    } catch (error) {
        next(error);
    }
}


