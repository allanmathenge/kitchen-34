"use client"

import React, { useState } from "react"
import groupByBrand from "../../../../utils/groupByBrand"

export default function BrandItems({ items }) {

    const [selectedItems, setSelectedItems] = useState(null)
    const groupedItems = groupByBrand(items)
    const handleSelection = (item) => (
        setSelectedItems(item)
    )

  return (
    <div className="">
        {
            groupedItems.map((group) => (
                <div key={group.brand} className="flex gap-2 justify-start items-center">
                    <input 
                        type="radio"
                        id={group.brand}
                        name={group.brand}
                        value={""}
                        checked={""}
                        onChange={() => handleSelection(group.brand)}
                        className="w-4 h-4 border border-gray-400 rounded-sm peer-checked:bg-blue-500 peer-checked:border-blue-500"
                    />
                    <label htmlFor={group.brand}>{group.brand}</label>
                </div>
            ))
        }
    </div>
  )
}
