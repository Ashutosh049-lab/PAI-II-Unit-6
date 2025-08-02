
import React  from "react";
import {Link} from "react-router-dom";

const ProductCard=({data})=>{
    const {id,title,image,price}=data;

    return (
        <div style={{border:"1px solid #ccc",padding:"15px",borderRadius:"8px"}}>
            <img src="{image}" alt="title" style={{width:"150px",height:"100px", objectFit:"contain"}} />

            <h4>{title}</h4>
            <p>{price}</p>

            <Link to={`/product/${id}`}>View Details</Link>

        </div>
    )
}

export default ProductCard;
