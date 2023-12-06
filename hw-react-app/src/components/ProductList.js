import React from 'react';
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function ProductList({products, title, handleDelete}) {
    if (!products || !Array.isArray(products)) {
        return <div>No product data available.</div>;
    }
    return (
        <div>
            <h2> {title} </h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Total Sales</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                        <tr key={product.itemID}>
                            <td> {product.itemName}</td>
                            <td> {product.TotalSales}</td>
                            <td>
                                <Link to={`/customers/${product.itemID}`}> Update ID:{product.itemID}</Link>
                            </td>
                            <td>
                                <Link to={`/customers/${product.itemID}`}> Delete ID:{product.itemID}</Link>
                            </td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default ProductList;