const db = require("../util/database");

module.exports = class Products {

    constructor(i, p, ts) {
        this.item = i;
        this.price = p;
        this.totalSales = ts;
    }

    static fetchAll(){ //WORKING
        return db.execute("SELECT i.itemID, i.itemName, IFNULL((SUM(i.ItemPrice * s.Quantity)),0) AS TotalSales " +
        "FROM item i left JOIN sales s ON i.ItemID = s.ItemID " +
        "GROUP BY s.itemID " +
        "ORDER BY TotalSales DESC;")
    }

    saveProduct() { //not worked on
        return db.execute('insert into item (ItemName, ItemPrice)' +
            'values(?, ?)',
            [this.item, this.price]
        )
    }
}
