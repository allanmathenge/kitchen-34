import React from "react"

export default function groupItemsByCateory(products) {
    const grouped = {}
    products.forEach((product) => {
        if (!grouped[product.category]) {
            grouped[product.category] = []
        }
        grouped[product.category].push(product)
    })
    return grouped
}
