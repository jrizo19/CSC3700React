const db = require("../util/database");

module.exports = class Products {

    static fetchAll(){ //WORKING
        return db.execute("SELECT i.itemID, i.itemName, COALESCE(SUM(i.ItemPrice * s.Quantity), 0) AS TotalSales " +
        "FROM item i LEFT JOIN sales s ON i.ItemID = s.ItemID " +
        "GROUP BY i.itemID, i.itemName ORDER BY TotalSales DESC "
        );
    };

    static fetchProduct(id){
        return db.execute('SELECT i.itemID, i.itemName, IFNULL((SUM(i.ItemPrice * s.Quantity)),0) AS TotalSales ' +
            'FROM item i left JOIN sales s ON i.ItemID = s.ItemID ' +
            'WHERE i.itemID=?',
            [id]
        );
    };

    static add(data) { //WORKING
        return db.execute('insert into item (ItemName, ItemPrice)' +
            'values(?, ?)',
            [data.ItemName, data.ItemPrice]
        );
    };

}
