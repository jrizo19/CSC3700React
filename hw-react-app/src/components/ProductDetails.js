import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch"
import {Row, Col, Table} from "react-bootstrap";
import {Button} from "react-bootstrap";

function ProductDetails(props) {
    let navigate = useNavigate();
    const {id} = useParams();
    let url = `http://localhost:1000/products/${id}`;
    const {data: product, isPending, error} = useFetch(url)
    const handleClick = () => {
        // let URL = `http://localhost:1000/products/${id}`;
        // fetch(URL , {
        //     method: 'DELETE',
        // }).then(() => {
        //     // history.push('/');
        // }).catch(e => {
        //     console.log('Delete Error: '); console.log("e");
        // })
    }
    const handleClickUpdate = () => {
        // history.push(`/BookUpdate/${book.id}`);
    }
    return (
        <Row className={"justify-content-center"}>
            <Col sm={12}>
                {isPending && <div> Loading </div>}
                {error && <div> {error} </div>}
                {product && (
                    <div>
                        <h2> Product Details </h2>

                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr key={product[0].itemID}>
                                <td>{product[0].itemID}</td>
                                <td>{product[0].itemName}</td>
                                <td>{product[0].TotalSales}</td>
                            </tr>
                            </tbody>
                        </Table>
                        <Button onClick={() => navigate(`/products`)}> Back to All Products </Button>

                    </div>
                )}
            </Col>
        </Row>
    );
}

export default ProductDetails;