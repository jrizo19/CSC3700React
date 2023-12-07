const db = require("../util/database");
module.exports = class Home {
    static fetchCustomer() {
        return db.execute("SELECT c.CustomerID, c.CustomerName, SUM(i.itemprice * s.quantity) AS Total_Sales " +
            "FROM customer c JOIN sales s ON c.customerid = s.customerid " +
            "JOIN item i ON s.itemid = i.itemid " +
            "GROUP BY c.customerid " +
            "ORDER BY Total_Sales DESC " +
            "LIMIT 5;")
    }

    static fetchProduct() {
        return db.execute("SELECT s.itemid, i.itemname, SUM(i.itemprice * s.quantity) AS Total_Sales " +
            "FROM item i JOIN sales s ON i.itemid = s.ItemID " +
            "GROUP BY s.ItemID " +
            "ORDER BY Total_Sales DESC " +
            "LIMIT 5;")
    }

    static fetchSales() {
        return db.execute("SELECT s.salesid, YEAR(s.SalesDate) AS Year, MONTHNAME(s.SalesDate) AS Month, SUM(i.ItemPrice * s.Quantity) AS Total_Sales " +
            "FROM customer c JOIN sales s ON c.CustomerID = s.CustomerID JOIN item i ON s.ItemID = i.ItemID " +
            "WHERE s.SalesDate >= DATE_FORMAT(CURRENT_DATE - INTERVAL 4 MONTH, '%Y-%m-01') " +
            "AND s.SalesDate <= LAST_DAY(CURRENT_DATE) " +
            "GROUP BY Year, Month " +
            "ORDER BY Year DESC, MONTH(s.SalesDate) DESC;")
    }
}