"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import getAllProducts from "../../lib/getAllProducts"

const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedBrand, setSelectedBrand] = useState("")
    useEffect(() => {
        async function fetchProducts() {
            const fetchedProducts = await getAllProducts()
            setProducts(fetchedProducts)
        }
        fetchProducts()
    }, [])

    const filteredProducts = products.filter((product) => {
        const categoryMatch = selectedCategory ? product.category === selectedCategory : true
        const brandMatch = selectedBrand ? product.brand === selectedBrand : true

        return categoryMatch && brandMatch
    })
    
  return (
    <CategoryContext.Provider
        value={{
            products,
            filteredProducts,
            selectedCategory,
            setSelectedCategory,
            selectedBrand,
            setSelectedBrand
        }}
    >
    {children}
    </CategoryContext.Provider>
  )
}

export const useCategoryContext = () => useContext(CategoryContext)
