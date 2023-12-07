const db = require("../util/database");

module.exports = class Products {

    static fetchAll(){ //WORKING
        return db.execute("SELECT i.itemID, i.itemName, IFNULL((SUM(i.ItemPrice * s.Quantity)),0) AS TotalSales " +
        "FROM item i left JOIN sales s ON i.ItemID = s.ItemID " +
        "GROUP BY s.itemID " +
        "ORDER BY TotalSales DESC;"
        );
    };

    static fetchProduct(id){
        return db.execute('SELECT i.itemID, i.itemName, IFNULL((SUM(i.ItemPrice * s.Quantity)),0) AS TotalSales ' +
            'FROM item i left JOIN sales s ON i.ItemID = s.ItemID ' +
            'WHERE i.itemID=?',
            [id.id]
        );
    };

    static add(data) { //not worked on
        const item = data.item;
        const price = data.price;
        return db.execute('insert into item (ItemName, ItemPrice)' +
            'values(?, ?)',
            [item, price]
        );
    };

}
