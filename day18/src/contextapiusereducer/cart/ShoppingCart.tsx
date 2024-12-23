import React from "react";
import { CartProvider } from "./CartContext";
import Cart from "./Cart";
import ProductList from "./ProductList";

const ShoppingCart: React.FC = () => {
  return (
    <CartProvider>
      <div>
        <h1>Shopping Cart Example</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default ShoppingCart;