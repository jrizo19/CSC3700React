import React from 'react';
import {Button, Table} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function CustomerList({customers, title, handleDelete}) {
    let navigate = useNavigate();
    if (!customers || !Array.isArray(customers)) {
        return <div> No customer data available. </div>;
    }
    return (
        <div>
            <h2> {title} </h2>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th> Name</th>
                    <th> Email</th>
                    <th> Total Sales</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                        <tr key={customer.CustomerID}>
                            <td> {customer.CustomerName} </td>
                            <td> {customer.CustomerEmail} </td>
                            <td> {customer.TotalSales} </td>
                            <td>
                                <Button onClick={() => navigate(`/customers/${customer.CustomerID}/edit`)}> Edit </Button>
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

export default CustomerList;