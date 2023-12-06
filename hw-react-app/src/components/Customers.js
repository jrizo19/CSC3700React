import React from 'react';
import useFetch from "./useFetch";
import {Col, Row} from "react-bootstrap";
import BookList from "./BookList";

function Customers(props) {
    let url = " http://localhost:8000/books";
    const {data : books, isPending, error} = useFetch(url)
    const myTitle = "Customers Management"
    return (
        <Row>
            <Col sm={3}>
                {error && <div> Error: {error} </div> }
                {isPending && <div> Loading ...</div>}
                {books && <BookList books={books} title={myTitle}/>}
            </Col>
        </Row>
    )
}

export default Customers;