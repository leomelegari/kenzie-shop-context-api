import { createContext, useContext, useState } from "react";

const CartContext = createContext({});
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initialCart);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const removeFromCart = (product) => {
 console.log("product ", product);
        const list = JSON.parse(localStorage.getItem("cart")) || [];
        const newItens = list.filter(item => item.id !== product.id);
        setCart(newItens)
        localStorage.setItem("cart", JSON.stringify(newItens));
    }

    localStorage.setItem("cart", JSON.stringify(cart))

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCart = () => useContext(CartContext)