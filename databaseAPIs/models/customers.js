const db = require("../util/database");

module.exports = class Customers {

    static fetchAll() {
        return db.execute("SELECT c.CustomerID, c.CustomerName, c.CustomerEmail, " +
            "COALESCE(SUM(i.ItemPrice * s.Quantity), 0) AS TotalSales " +
            "FROM customer c " +
            "LEFT JOIN sales s ON c.CustomerID = s.CustomerID " +
            "LEFT JOIN item i ON s.ItemID = i.ItemID " +
            "GROUP BY c.CustomerID, c.CustomerName, c.CustomerEmail " +
            "ORDER BY TotalSales DESC"
        );
    };

    static fetchCustomer(id) {
        return db.execute("select * from customer where CustomerID = ?", [id]);
    };

    static add(data) {
        return db.execute('insert into customer (CustomerName, CustomerEmail)' +
            'values(?, ?)', [data.CustomerName, data.CustomerEmail]).then(result => {
            return result[0].insertId;
        });
    };

    static edit(data) {
        return db.execute('update customer set CustomerName = ?, CustomerEmail = ? where customer.CustomerID = ?',
            [data.CustomerName, data.CustomerEmail, data.CustomerID]);
    };

    static delete(id) {
        return db.execute('DELETE FROM customer WHERE CustomerID = ?', [id]);
    }
};