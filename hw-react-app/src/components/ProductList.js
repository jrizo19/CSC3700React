import React from 'react';
import {Button, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function ProductList({products, title, handleDelete}) {
    let navigate = useNavigate();
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
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                        <tr key={product.itemID}>
                            <td> {product.itemName}</td>
                            <td> {product.TotalSales}</td>
                            <td>
                                <Button onClick={() => navigate(`/products/${product.itemID}/edit`)}> Edit </Button>
                            </td>
                            <td>
                                <Button onClick={(e) => {
                                    if (window.confirm('Are you sure you wish to delete this item?')) console.log("DELETED")
                                }}> Delete </Button>
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