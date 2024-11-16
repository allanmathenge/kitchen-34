import React from "react"
import groupItemsByCategory from "../../utils/groupItemsByCateory"
import { categoryImages }from "../../utils/categoryImages"
import Image from "next/image"

export default function CategoryList({ products }) {
    const groupedProducts = groupItemsByCategory(products)

  return (
    <section>
        <div className="flex flex-wrap justify-between w-full gap-3">
            {
                Object.entries(groupedProducts).map(([category, items]) => (
                    <div key={category} className="">
                        <div className="w-[240px] h-[240px] flex flex-col">
                            <Image 
                                src={categoryImages[category]} 
                                alt={category}
                                width={50}
                                height={50}
                                className="w-full h-full object-contain"
                            />
                            <h2 className="">{category}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
