import React from 'react';
import {Table} from "react-bootstrap";

function SalesList({sales, title}) {
    if (!sales || !Array.isArray(sales)) {
        return <div>No sales data available.</div>;
    }
    return (
        <div>
            <h2> {title} </h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Order Amount</th>
                </tr>
                </thead>
                <tbody>
                {sales.map((sale) => (
                        <tr key={sale.SalesID}>
                            <td> {sale.FormattedSalesDate}</td>
                            <td> {sale.CustomerName}</td>
                            <td> {sale.Product}</td>
                            <td> {sale.Quantity}</td>
                            <td> ${sale.TotalSales}</td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default SalesList;