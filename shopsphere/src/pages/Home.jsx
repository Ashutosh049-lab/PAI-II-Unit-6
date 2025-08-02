
import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {fetchProducts} from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

const Home=()=>{
    const dispatch=useDispatch();
    const {products,loading,error}=useSelector((state)=>state.product);

    useEffect(()=>{
        dispatch(fetchProducts());

    },[dispatch]);

    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>Error:{error}</h2>

    return (
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr",gap:"20px"}}>
            {products.map((product)=>(
                <ProductCard key={product.id} data={product}/>

            ))}
        </div>
    )
}

export default Home;


// Uncaught TypeError: Cannot destructure property 'products' of 'useSelector(...)' as it is undefined.