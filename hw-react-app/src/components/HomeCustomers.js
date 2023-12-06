import React from 'react';
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function HomeCustomers({customers, title}) {
    customers = customers.customer[0];
    if (!customers) {
        return <div>No customer data available.</div>;
    }
    if (!Array.isArray(customers)){
        return <div>customers not an array</div>
    }
    return (
        <div>
            <h3>{title}</h3>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Total Sales</th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer) => (
                        <tr key={customer.CustomerID}>
                            <td> {customer.CustomerName}</td>
                            <td> {customer.Total_Sales}</td>
                        </tr>
                    )
                )}
                </tbody>
            </Table>
        </div>
    );
}

export default HomeCustomers;