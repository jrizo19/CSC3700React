import React from 'react';
import useFetch from "./useFetch";
import {Button, Col, Row} from "react-bootstrap";
import ProductList from "./ProductList";
import {useNavigate} from "react-router-dom";

function Products() {
    let navigate = useNavigate();
    let url = "http://localhost:1000/products";
    const {data: products, isPending, error, fetchData} = useFetch(url);
    const myTitle = "Products Management";
    return (
        <Row className={"justify-content-center"}>
            <Col sm={9}>
                {error && <div> Error: {error} </div>}
                {isPending && <div> Loading ...</div>}
                {products && <ProductList fetchData={fetchData} products={products} title={myTitle}/>}
                <Button style={{ marginBottom: '15px' }} onClick={() => navigate(`/products/add`)}> Insert New Product </Button>
            </Col>
        </Row>
    );
}

export default Products;