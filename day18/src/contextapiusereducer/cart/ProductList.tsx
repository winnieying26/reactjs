import React from "react";
import { useCartDispatch } from "./CartContext";

const ProductList: React.FC = () =>{
    const dispatch = useCartDispatch();

    const products = [
        { id: "1", name: "T-Short", price: 20 },
        { id: "2", name: "Pants", price: 35 },
        { id: "3", name: "Jacket", price: 50 },
      ];

      return (
        <div>
            <h2>Products</h2>  
            <ul>
               {products.map((product)=>(
                <li key={product.id}>
                 <p>Name: {product.name}</p>
                 <p>Price: {product.price}</p>
                 <button onClick={()=>
                     dispatch({type: "ADD_ITEM", payload: {...product, quantity : 1}})
                     }>
                        Add to Cart</button>
                </li>
               ))} 
            </ul>
        </div>
      
      )
}

export default ProductList;