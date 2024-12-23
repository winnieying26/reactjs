import React, { createContext, ReactNode, useContext, useReducer } from "react";
import {
  CartState,
  CartAction,
  cartReducer,
  initialCartState,
} from "./cartReducer";

export const CartStateContext = createContext<CartState | undefined>(undefined);
export const CartDispatchContext = createContext< React.Dispatch<CartAction> | undefined>(undefined);

export const CartProvider: React.FC <{ children: ReactNode }> = ({children}) =>{

    const [state, dispatch] = useReducer(cartReducer, initialCartState);

    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value= {dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    )

}

export const useCartState = () =>{
    const context = useContext(CartStateContext);
    if(!context) throw new Error("useCartState must be used within a cartProvider");
    return context;

}

export const useCartDispatch = () =>{
    const context = useContext(CartDispatchContext);
    if(!context) throw new Error("useCartDispatch must be used within a CartProvider");
    return context;
}