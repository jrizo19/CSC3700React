import React from 'react';
import {Button, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function HomeProducts({products, title}) {
    let navigate = useNavigate();
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
                            <td> {product.itemname} </td>
                            <td> ${product.Total_Sales} </td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
            <Button style={{ marginBottom: '15px' }} onClick={() => navigate(`/products`)}> Show All </Button>
        </div>
    );
}

export default HomeProducts;