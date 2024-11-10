"use client"

import React from "react"
import { useCart } from "../../../context/CartContext"
import { useRouter } from "next/navigation"

export default function AddItemToCartButton({ item }) {

  const { addItemTocart } = useCart()
  const router = useRouter()

  const handleAddToCart = () => {
    addItemTocart(item)

    router.push('/products/cart') // Navigate to the cart page
  }

  return (
    <button className="w-full p-0 m-0 px-2 md:px-6 py-3"
      onClick={handleAddToCart}
    >
      Add To Cart
    </button>
  )
}
