import React from "react";
import { useCartDispatch, useCartState } from "./CartContext";

 const Cart: React.FC = () =>{

    const {items, total} = useCartState();
    const dispatch = useCartDispatch();

    return (
        <div>
         <h2>Shopping Cart</h2>
        {items.length ===0?(<p>Cart is empty</p>): (
            <>
            <ul>
              {items.map((item) =>(
                <li key={item.id}>{item.name} - ${item.price}*{item.quantity}
                <button onClick={()=> dispatch({type: "REMOVE_ITEM", payload: item.id})}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total: ${total.toFixed(2)}</p>
            <button onClick={()=> dispatch({type: "CLEAR_CART"})}>Clear Cart</button>
            </>
        )}  

        </div>
        
    )

}

export default Cart;