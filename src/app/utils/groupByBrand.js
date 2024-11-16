import React from "react"

export default function groupByBrand(filteredItems) {
    const brandGroups = {}

    // group items by brand
    filteredItems.forEach((item) => {
        if (!brandGroups[item.brand]) {
            brandGroups[item.brand] = []
        }
        brandGroups[item.brand].push(item)
    })

    // sort brand alphabetically
    const sortedBrands = Object.keys(brandGroups).sort()

    // Return sorted brands
    return sortedBrands.map((brand) => (
        {
            brand,
            items:brandGroups[brand]
        }
    ))

}
