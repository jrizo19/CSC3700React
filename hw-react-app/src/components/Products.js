import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import ProductList from "./ProductList";

function Products() {
    let url = " http://localhost:1000/products";
    const {data : products, isPending, error} = useFetch(url);
    const myTitle = "Products Management";3
    console.log(products);
    return (
        <Row>
            <Col className={"justify-content-center"} sm={10}>
                {error && <div> Error: {error} </div>}
                {isPending && <div> Loading ...</div>}
                {products && <ProductList products={products} title={myTitle}/>}
            </Col>
        </Row>
    );
}

export default Products;