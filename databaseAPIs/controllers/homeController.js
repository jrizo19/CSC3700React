const Home = require("../models/home")

exports.getHomeData = async (request, response, next) => { //WORKING
    try {
        const customer = await Home.fetchCustomer();
        const product = await Home.fetchProduct();
        const sales = await Home.fetchSales();
        const allData = [
            {customer},
            {product},
            {sales}
        ];

        response.json(allData);
    } catch (error) {
        next(error);
    }
}


