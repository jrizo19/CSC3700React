import React from 'react';
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function HomeProducts ({products, title}) {
    products = products.product[0];
    if (!products || !Array.isArray(products)) {
        return <div>No product data available.</div>;
    }
    return (
        <div>
            <h3>{title}</h3>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Total Sales</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                        <tr key={product.itemid}>
                            <td> {product.itemname}</td>
                            <td> {product.Total_Sales}</td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default HomeProducts;