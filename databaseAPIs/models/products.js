const db = require("../util/database");

module.exports = class Products {

    static fetchAll(){ //WORKING
        return db.execute("SELECT i.itemID, i.itemName, COALESCE(SUM(i.ItemPrice * s.Quantity), 0) AS TotalSales " +
        "FROM item i LEFT JOIN sales s ON i.ItemID = s.ItemID " +
        "GROUP BY i.itemID, i.itemName ORDER BY TotalSales DESC "
        );
    };

    static fetchProduct(id){ //WORKING
        return db.execute('SELECT i.itemID, i.itemName, i.itemPrice ' +
            'FROM item i ' +
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

    static edit(data) { //WORKING
        return db.execute('update item set ItemName = ?, ItemPrice = ? where item.ItemID = ?',
            [data.ItemName, data.ItemPrice, data.ItemID]);
    };

    static delete(data) { //WORKING
        return db.execute('DELETE FROM item WHERE ItemID = ?', [data.ItemID]);
    }
}
