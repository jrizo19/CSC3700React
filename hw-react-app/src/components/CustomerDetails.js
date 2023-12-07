import React from 'react';
import {Link, useParams} from "react-router-dom";
import useFetch from "./useFetch"
import {Table} from "react-bootstrap";
import {Button} from "react-bootstrap";

function CustomerDetails(props) {
    const {id} = useParams();
    let url = `http://localhost:1000/customers/:${id}`;
    const {data : customer, error, isPending} = useFetch(url)
    const handleClick = () => {
        let URL = `http://localhost:1000/customers/${customer.id}`;
        fetch(URL , {
            method: 'DELETE',
        }).then(() => {
            // history.push('/');
        }).catch(e => {
            console.log('Delete Error: '); console.log("e");
        })
    }
    const handleClickUpdate = () => {
        // history.push(`/BookUpdate/${book.id}`);
    }

    return (
        <div>
            { isPending  && <div> Loading </div>}
            { error  && <div> {error} </div>}
            { customer  && (
                <div>
                    <h2> Customer Details for id={customer.CustomerID} </h2>

                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th> Title</th>
                            <th> Author</th>
                            <th> Price</th>
                            <th> Update</th>
                            <th> Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr key={customer.CustomerID}>
                            <td> {customer.CustomerName}</td>
                            <td> {customer.CustomerEmail}</td>
                            <td> {customer.TotalSales}</td>
                            <td> <Button onClick={handleClickUpdate}> Update {customer.CustomerID}  </Button></td>
                            <td> <Button onClick={handleClick}> Delete {customer.CustomerID}  </Button></td>
                        </tr>
                        </tbody>
                    </Table>
                    <Link to="/"> Back Home </Link>
                </div>
            )}
        </div>
    );
}

export default CustomerDetails;