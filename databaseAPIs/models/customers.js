const db = require("../util/database");

module.exports = class Customers {

    static fetchAll() { // WORKING
        return db.execute("SELECT c.CustomerID, c.CustomerName, c.CustomerEmail, " +
            "COALESCE(SUM(i.ItemPrice * s.Quantity), 0) AS TotalSales " +
            "FROM customer c " +
            "LEFT JOIN sales s ON c.CustomerID = s.CustomerID " +
            "LEFT JOIN item i ON s.ItemID = i.ItemID " +
            "GROUP BY c.CustomerID, c.CustomerName, c.CustomerEmail " +
            "ORDER BY TotalSales DESC"
        );
    };

    static fetchCustomer(id) { //TINKERED WITH
        return db.execute("select * from customer where CustomerID = ?", [id]);
    };

    static add(data) {
        return db.execute('insert into customer (CustomerName, CustomerEmail)' +
            'values(?, ?)', [data.CustomerName, data.CustomerEmail]);
    };

    // updateCustomer(id) { // not worked on
    //     return db.execute('update customer set CustomerName = ?, CustomerEmail = ? where customer.CustomerID = ?',
    //         [this.name, this.email, id])
    // };
};