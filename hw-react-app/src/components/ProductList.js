import React from 'react';
import {Button, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function ProductList({products, title}) {
    let navigate = useNavigate()
    if (!products || !Array.isArray(products)) {
        return <div>No product data available.</div>;
    }

    async function handleDelete(id) {
        let url = `http://localhost:1000/products/${id}`;
        const data = {
            'ItemID': id,
        }
        let formBody = [];
        for (let property in data) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        const requestOptions = {
            method: 'DELETE',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: formBody
        };
        fetch(url, requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        setTimeout(() => {
            window.location.reload();
        }, 200);
    }

    return (
        <div>
            <h2> {title} </h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Product</th>
                    <th>Total Sales</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                        <tr key={product.itemID}>
                            <td> {product.itemName}</td>
                            <td> ${product.TotalSales}</td>
                            <td>
                                <Button onClick={() => navigate(`/products/${product.itemID}/edit`)}> Edit </Button>
                            </td>
                            <td>
                                <Button onClick={(e) => {
                                    if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(product.itemID)
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