"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import getAllProducts from "../../lib/getAllProducts"

const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    // console.log(selectedCategory)

    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts = await getAllProducts()
            setProducts(fetchedProducts)
        }
        fetchProducts()
    }, [])

    const filteredProducts = selectedCategory ? products.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase()) : products

  return (
    <CategoryContext.Provider
        value={{
            products,
            filteredProducts,
            selectedCategory,
            setSelectedCategory
        }}
    >
    {children}
    </CategoryContext.Provider>
  )
}

export const useCategoryContext = () => useContext(CategoryContext)
