import React from 'react';
import {useParams} from "react-router-dom";

function ProductDetails(props) {
    const {id} = useParams();
    return (
        <div>id:{id}</div>
    );
}

export default ProductDetails;