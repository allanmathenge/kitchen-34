"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import StarRating from "../../../[id]/components/StarRating"
import AddItemToCartButton from "../../../[id]/components/AddItemToCartButton"
import DeliveryDate from "../../../[id]/components/DeliveryDate"
import groupByBrand from "../../../../utils/groupByBrand"

export default function CategoryPage({ decodedUrlCategory, filteredItems }) {
    const [ selectedBrand, setSelectedBrand ] = useState("All")

    const groupedItems = groupByBrand(filteredItems)
    
    const filteredBrand = selectedBrand === "All" ? filteredItems : filteredItems.filter((product) => product.brand === selectedBrand)
    
  return (
    <>
        <div className="flex gap-2 bg-white/90 py-8 px-2">

            <div className="w-[240px] h-auto border flex flex-col gap-2 border-slate-200 p-1">

            <div className="">
                <h2 className="font-medium">Brands</h2>
                
                {/* react suspense */}
                <div>
                    <label htmlFor="All" className="flex gap-2 items-center">
                        <input 
                            type="radio"
                            value="All"
                            className="w-4 h-4 border border-gray-400 rounded-sm peer-checked:bg-blue-500 peer-checked:border-blue-500"
                            checked={selectedBrand === "All"}
                            onChange={() => setSelectedBrand("All")}
                        />
                        All
                    </label>
                    {
                        groupedItems.map((group) => (
                            <div
                                key={group.brand}
                                className="flex gap-2 justify-start items-center"
                            >
                                <input
                                    type="radio"
                                    id={group.brand}
                                    name={group.brand}
                                    value={group.brand}
                                    checked={group.brand === selectedBrand}
                                    onChange={(e) => setSelectedBrand(e.target.value)}
                                    className="w-4 h-4 border border-gray-400 rounded-sm peer-checked:bg-blue-500 peer-checked:border-blue-500"
                                />
                                <label htmlFor={group.brand}>{group.brand}</label>
                            </div>
                        ))
                    }
            </div>
            </div>

            <div>
                <h2 className="font-medium">Condition</h2>
                <p>New</p>
                <p>Renewed</p>
                <p>Used</p>
            </div>
        </div>

        <div className="w-full ">
            <h1 className="capitalize font-medium">Results for: <span className="capitalize text-[16px]">{decodedUrlCategory}</span></h1>
            <p className="font-thin text-[12px] text-black/80">Price and details vary depending on products size, color and brand</p>

            <div className="flex flex-wrap gap-4 justify-between">
                {
                    filteredBrand.length > 0 
                    ? filteredBrand.map((item) => (
                        <div key={item.id} className="capitalize w-[240px] text-sm flex flex-col font-medium gap-2 border border-slate-200 p-1 rounded-md">
                            <Image src={item.image} width={360} height={360} alt={item.name} className="h-[240px] object-contain w-full bg-white rounded-sm" />
                            <Link 
                                href={``}
                                className="hover:text-[#7e7129]"
                            >
                                {item.description.length > 100 ? item.description.slice(0, 100) + (" ...") : item.description}
                            </Link>
                            <div className="flex justify-start items-center gap-3">
                                <StarRating rating={item.rate} /> <p className="">Customer rating</p>
                            </div>
                            <div className="flex gap-3">
                                <p className="">KSH {item.price}</p>
                                <p className="font-thin text-[12px] text-slate-700">Price List : <span className="line-through">KSH {(item.price * 1.05).toFixed(2)}</span></p>
                            </div>
                            <div className="flex gap-1 justify-start items-center">
                            <span className="">Latest Delivery</span> <DeliveryDate />
                            </div>
                            <div className="border bg-[#FFD700] rounded-full text-sm font-bold w-full text-nowrap">
                                <AddItemToCartButton item={item}/>
                            </div>
                        </div>
                    ))
                    : <p className="w-full flex justify-center items-center font-bold text-xl text-black/80">{`No ${decodedUrlCategory} of this brand brand`}</p>
                }
            </div>
        </div>
    </div>
    </>
  )
}
