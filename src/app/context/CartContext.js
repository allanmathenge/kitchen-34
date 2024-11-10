"use client"

import React, { createContext, useState, useContext} from "react";
import { v4 as uuid } from "uuid"
import { useRouter } from "next/navigation";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    // add item to cart function
    const addItemTocart = (item) => {

        setCart((prevCart) => {
        //check if the item already exists in the cart

        const existingCartItem = prevCart.find((cartItem) => cartItem.id === item.id)
        // if the item already exists add quantity by 1
        if (existingCartItem) {
            return prevCart.map((cartItem) => 
                cartItem.id === item.id 
                    ? { ...cartItem, quantity: cartItem.quantity + 1}
                    : cartItem
            )
        } else {
            // if it doesnt exist add it with quantity 1
            return [...prevCart, {...item, quantity: 1}]
        }
        })
    }

    // function to remove item from cart
    const removeItemFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId))
    }

    const value = {
        cart,
        addItemTocart,
        removeItemFromCart,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}