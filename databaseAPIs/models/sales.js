const db = require("../util/database");

module.exports = class Sales {
    static fetchAll() {
        return db.execute("SELECT DATE_FORMAT(s.SalesDate, '%Y-%m-%d') as FormattedSalesDate, " +
            "c.CustomerName, s.SalesID, i.ItemName as Product, s.Quantity, SUM(i.ItemPrice * s.Quantity) as TotalSales " +
            "FROM customer c JOIN sales s ON c.CustomerID = s.CustomerID JOIN item i ON s.ItemID = i.ItemID " +
            "WHERE MONTH(s.SalesDate) = MONTH(CURDATE()) " +
            "AND YEAR(s.SalesDate) = YEAR(CURDATE()) " +
            "GROUP BY i.ItemName " +
            "ORDER BY s.SalesDate;");
    }
}