"use client"

import React, { useState, useEffect } from "react"
import { RiMenu3Fill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import CategoryList from "./components/CategoryList"
import CategoryNav from "./components/CategoryNav"
import { useCategoryContext } from "../context/CategoryContext";
import InputCategory from "./components/InpuCategory"
import getAllProducts from "../../lib/getAllProducts";

// Build brand context
export default function Product() {

  const { products, setSelectedCategory, selectedCategory, selectedBrand, setSelectedBrand } = useCategoryContext()

  const categoryArray = [...new Set(products.map(product => product.category))]

  const brandsArray = [...new Set(products.map(product => product.brand))]

  return (
    <section className="py-6 bg-white">
      <div className="border border-slate-400 w-full" />

      {/* Beginning of products nav section */}
      <CategoryNav />
      {/* End of products nav section */}

      <div className="border border-slate-300 w-full" />

      {/* Beginning of products sub navbar */}
      <div className="flex w-full justify-between gap-2 h-8 border-b border-slate-200 items-end">

        <p className="text-sm font-medium text-nowrap w-[180px]">1 - 40 of 1000+ products</p>

        <div className="flex flex-1 justify-between text-sm w-full items-center">

          <div className="flex gap-3">
            <h4 className="font-medium ">Refine By |</h4>
            <p className="cursor-pointer flex items-center">Price <MdOutlineKeyboardArrowDown className="text-xl"/></p>
            <p className="cursor-pointer flex items-center">Top Brands <MdOutlineKeyboardArrowDown className="text-xl" /></p>
            <p className="cursor-pointer flex items-center">Availability <MdOutlineKeyboardArrowDown className="text-xl"/></p>
          </div>

          <div className="flex gap-2">

            <h4 className="font-medium">Sort By |</h4>

            <div className="flex justify-between gap-3 items-center">

              <p className="flex">Best Seller <MdOutlineKeyboardArrowDown className="text-xl"/> </p>

              <p >
                <RiMenu3Fill className="text-[16px] cursor-pointer" />
              </p>

              <p >
                <CgMenuGridR className="text-[16px] cursor-pointer"/>
              </p>

            </div>
          </div>
        </div>
      </div>
      {/* End of products subnavbar */}

      {/* Beginning of products page */}
      <div className="flex">
      <div className="w-[180px] border-r min-h-full border-slate-200">
        <ol className="list-none flex flex-col">

          <div className="border-b border-slate-200 w-full">
            <p className="font-medium flex justify-between p-2 pb-0">
              <span >Category</span>
              <span >-</span>
            </p>
            <div className="text-[10px] capitalize font-medium flex flex-col gap-1 p-2">
              {
                categoryArray?.map((cat) => (
                  <button 
                    onClick={() => setSelectedCategory(cat)} 
                    key={cat} 
                    className={`border-none text-start capitalize text-black/80 ${ selectedCategory === cat ? "bg-slate-100 rounded py-1 text-black" : "" }`}
                  >
                    {cat}
                  </button>
                ))
              }
            </div>
          </div>

          <div className="border-b border-slate-200 w-full pb-2">
            <p className="font-medium flex justify-between p-2 pb-2">
              <span >Delivery & Pickup</span>
              <span >-</span>
            </p>

            <div className="flex flex-col gap-2">
              {/* Radio buttons for filtering items */}
              <div className="flex items-center gap-2 p-2 py-0">
                <input 
                  type="radio"
                />
                <label htmlFor="all" className="font-medium text-[10px]">Show All</label>
              </div>

              <div className="flex items-center gap-2 p-2 py-0">
                <input type="radio"  />
                <label htmlFor="all" className="font-medium text-[10px]">2-Day Delivery</label>
              </div>

              <div className="flex items-center gap-2 p-2 py-0">
                <input type="radio"  />
                <label htmlFor="all" className="font-medium text-[10px]">Ship Home</label>
              </div>

              <div className="flex items-center gap-2 p-2 py-0">
                <input type="radio"  />
                <label htmlFor="all" className="font-medium text-[10px]">Free Pickup + Discount</label>
              </div>

              <div className="flex items-center gap-2 p-2 py-0">
                <input type="radio"  />
                <label htmlFor="all" className="font-medium text-[10px]">Free Pickup Today</label>
              </div>

            </div>
          </div>

          <div className="flex flex-col border-b w-full border-slate-200 pb-2">

            <p className="font-medium flex justify-between p-2">
              <span >Special Offers</span>
              <span >-</span>
            </p>
              <InputCategory />
          </div>

          <div >

            <p className="font-medium flex justify-between p-2 pb-0">
              <span >Brand</span>
              <span >-</span>
            </p>

            <div className="px-2 flex flex-col gap-2">
              <input 
                type="text"
                className="w-full border-t-0 border-x-0 border-b focus:outline focus:outline-slate-200 px-2 py-1 text-[10px] bg-transparent rounded-none"
                placeholder="Find a brand"
              />

              <div className="flex gap-2 flex-col">
                {
                  brandsArray.map((brand) => (
                    <label
                      key={brand}
                      htmlFor=""
                      className="text-[10px] flex gap-2 items-center"
                    >
                      <input 
                        type="radio"
                        name="brand"
                        checked={selectedBrand === brand}
                        value={brand}
                        onChange={() => setSelectedBrand(brand)}
                      />
                      {/* <div className="w-4 h-4 border-2 border-gray-400 rounded-md peer-checked:bg-slate-500 peer-checked:border-slate-500"></div> */}
                      {brand}
                    </label>
                  ))
                }
              </div>
            </div>
          </div>
        </ol>
      </div>
      <CategoryList />
      </div>
    </section>
  )
}

