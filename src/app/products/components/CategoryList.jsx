"use client"

import React from "react"
import groupItemsByCategory from "../../utils/groupItemsByCateory"
import { categoryImages } from "../../utils/categoryImages"
import Image from "next/image"
import StarRating from "../[id]/components/StarRating"
import DeliveryDate from "../[id]/components/DeliveryDate"
import Link from "next/link"
import { useCategoryContext } from "../../context/CategoryContext"

export default function CategoryList() {
    const { setSelectedCategory, filteredProducts, products } = useCategoryContext()
    const groupedProducts = groupItemsByCategory(products)

  return (
    <section className="w-full flex flex-col p-2">
        <div className="flex flex-wrap justify-between border-b w-full gap-3 pb-3">
            {
                Object.entries(groupedProducts).map(([category, items]) => (
                    <div onClick={() => setSelectedCategory(category)} key={category} className="cursor-pointer shadow-sm rounded hover:shadow p-1">
                        <div className="w-[160px] flex justify-between flex-col">
                            <Image
                                src={categoryImages[category]}
                                alt={category}
                                width={50}
                                height={50}
                                priority
                                className="w-full h-[160px] object-contain"
                            />
                            <h2 className="capitalize text-[12px]">{category}</h2>
                        </div>
                    </div>
                ))
            }
        </div>

        {/* Products display */}
        <ol className="flex flex-wrap justify-between w-full gap-y-5 py-8 border-b border-slate-400">
            {
                filteredProducts.slice(0, 16).map(({id, name, image, price, description, rate, color}) => (
                    <div key={id} className="w-[168px] h-[288px] shadow hover:shadow-md">
                        <Link href={`/products/${id}`} className="">

                            <div className="flex flex-col h-full gap-2 justify-between p-1">

                                <div className="flex w-full justify-center rounded-sm">
                                    <Image 
                                        src={image}
                                        alt={name}
                                        width={60}
                                        height={60}
                                        priority
                                        className="flex w-auto object-contain h-[160px]"
                                    />
                                </div>

                                <div className="flex gap-[2px] flex-col">
                                    {/* colors array */}
                                    <div className="flex gap-2">
                                    {
                                        color?.map((col) => (
                                            <div key={col} className="w-3 h-3 rounded-full bg-gray-400" ></div>
                                        ))
                                    }
                                    </div>
                                    
                                    <p className="capitalize text-[10px] font-medium">{name}</p>
                                    <p className="capitalize text-[10px]">{description.length > 100 ? description.slice(36, 80) + "..." : description}</p>
                                    <div className="text-[10px] flex items-center gap-2 h-4"><StarRating rating={rate} /><span className="">243</span></div>
                                    <div className="flex gap-2">
                                        <p className="text-[10px] font-medium text-nowrap">KSH {price}</p>
                                        <p className="font-thin text-[10px] text-slate-700 text-nowrap">List price: <span className="line-through">KSH {(price * 1.05).toFixed(2)}</span></p>
                                    </div>
                                    <div className="text-[10px]">
                                        <DeliveryDate />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="absolute left-0 top-0 w-auto h-4 rounded-full text-slate-400 text-[8px] border border-slate-500 flex items-center px-2 cursor-pointer">sponsored</div> */}
                        </Link>
                    </div>
                ))
            }
        </ol>

    </section>
  )
}
