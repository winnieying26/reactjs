import { createContext, ReactNode, useContext } from "react";
type ShoppingCartProviderProps ={
    children: ReactNode
}

type ShoppingCartContext ={
    getItemQuantity: (id: number) => number,
    increaseCartQuantity: (id:number) => void,
    decreaseCartQuantity: (id: number)=>void,
    removeFromCart: (id: number)=>void

}

type CartItem ={
    id: number;
    quantity: number
}
const ShoppingCartContext = createContext({} as ShoppingCartCentext);

export const useShoppingCart =()=>{
    return useContext(ShoppingCartContext)

}

export const ShoppingCartProvider=({children}: ShoppingCartProviderProps) =>{
    return (
        <ShoppingCartContext.Provider value ={}>
        {children}
        </ShoppingCartContext.Provider>
    )
}