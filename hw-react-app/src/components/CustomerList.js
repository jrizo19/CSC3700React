import React from 'react';
import {Button, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function CustomerList({customers, title, fetchData}) {
    let navigate = useNavigate();
    if (!customers || !Array.isArray(customers)) {
        return <div> No customer data available. </div>;
    }

    async function handleDelete(id) {
        let url = `http://localhost:1000/customers/${id}`;
        fetch(url, {'method': 'DELETE'})
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                // check for error response
                if (response.statusCode !== 204) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        fetchData();
    }

    return (
        <div>
            <h2> {title} </h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th> Name</th>
                    <th> Email</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                        <tr key={customer.CustomerID}>
                            <td> {customer.CustomerName} </td>
                            <td> {customer.CustomerEmail} </td>
                            <td>
                                <Button onClick={() => navigate(`/customers/${customer.CustomerID}/edit`)}> Edit </Button>
                            </td>
                            <td>
                                <Button onClick={(e) => {
                                    if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(customer.CustomerID)
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

export default CustomerList;