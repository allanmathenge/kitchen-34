import React from "react"
import { RiMenu3Fill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import getAllProducts from "../../lib/getAllProducts";
import groupByBrand from "../utils/groupByBrand";
import CategoryList from "./components/CategoryList"

export default async function Product() {
  const products = await getAllProducts()

  const categoryArray = [...new Set(products.map(product => product.category))]

  const groupedItems = groupByBrand(products)

  return (
    <section className="min-h-screen py-6 bg-white/80">
      <div className="border border-slate-400 w-full" />
      <div className="flex gap-2 md:gap-6 text-sm font-semibold py-3">
        <h1 className="">All Items Home |</h1>
        <h1 className="">Kitchen & Dining</h1>
        <h1 className="">Appliances</h1>
        <h1 className="">Funiture</h1>
        <h1 className="">Shop By Style</h1>
        <h1 className="">Home Savings</h1>
        <h1 className="">Bed & Bath</h1>
        <h1 className="">Health and Household</h1>
        <h1 className="">Home and Kitchen</h1>
        <h1 className="">Movies and Television</h1>
      </div>
      <div className="border border-slate-300 w-full" />

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

              <p className="">
                <RiMenu3Fill className="text-[16px] cursor-pointer" />
              </p>

              <p className="">
                <CgMenuGridR className="text-[16px] cursor-pointer"/>
              </p>

            </div>
          </div>
        </div>
      </div>

      <div className="flex">
      <div className="w-[180px] border-r min-h-full border-slate-200">
        <ol className="list-none flex flex-col">

          <div className="border-b border-slate-200 w-full">
            <p className="font-medium flex justify-between p-2 pb-0">
              <span className="">Category</span>
              <span className="">-</span>
            </p>
            <div className="text-[10px] capitalize font-medium flex flex-col gap-1 p-2">
              {
                categoryArray?.map((cat) => (
                  <li key={cat} className="list-none cursor-pointer">
                    {cat}
                  </li>
                ))
              }
            </div>
          </div>

          <div className="border-b border-slate-200 w-full pb-2">
            <p className="font-medium flex justify-between p-2 pb-2">
              <span className="">Delivery & Pickup</span>
              <span className="">-</span>
            </p>

            <div className="flex flex-col gap-2">

              <div className="flex items-center gap-2 p-2 py-0">
                <input type="radio" className="" />
                <label htmlFor="all" className="font-medium text-[10px]">Show All</label>
              </div>

              <div className="flex items-center gap-2 p-2 py-0">
                <input type="radio" className="" />
                <label htmlFor="all" className="font-medium text-[10px]">2-Day Delivery</label>
              </div>

              <div className="flex items-center gap-2 p-2 py-0">
                <input type="radio" className="" />
                <label htmlFor="all" className="font-medium text-[10px]">Ship Home</label>
              </div>

              <div className="flex items-center gap-2 p-2 py-0">
                <input type="radio" className="" />
                <label htmlFor="all" className="font-medium text-[10px]">Free Pickup + Discount</label>
              </div>

              <div className="flex items-center gap-2 p-2 py-0">
                <input type="radio" className="" />
                <label htmlFor="all" className="font-medium text-[10px]">Free Pickup Today</label>
              </div>

            </div>
          </div>

          <div className="flex flex-col border-b w-full border-slate-200 pb-2">

            <p className="font-medium flex justify-between p-2">
              <span className="">Special Offers</span>
              <span className="">-</span>
            </p>

            <div className="flex flex-col gap-2">

              <label htmlFor="offers" className="flex gap-2 items-center p-2 py-0">
                <input type="radio" className="hidden" />
                <div className="w-4 h-4 border-2 border-gray-400 rounded-md peer-checked:bg-slate-500 peer-checked:border-slate-500"></div>
                <span className="font-medium text-[10px]">Clearance</span>
              </label>

              <label htmlFor="offers" className="flex gap-2 items-center p-2 py-0">
                <input type="radio" className="hidden" />
                <div className="w-4 h-4 border-2 border-gray-400 rounded-md peer-checked:bg-slate-500 peer-checked:border-slate-500"></div>
                <span className="font-medium text-[10px]">New</span>
              </label>

              <label htmlFor="offers" className="flex gap-2 items-center p-2 py-0">
                <input type="radio" className="hidden" />
                <div className="w-4 h-4 border-2 border-gray-400 rounded-md peer-checked:bg-slate-500 peer-checked:border-slate-500"></div>
                <span className="font-medium text-[10px]">Reduced Price</span>
              </label>

              <label htmlFor="offers" className="flex gap-2 items-center p-2 py-0">
                <input type="radio" className="hidden" />
                <div className="w-4 h-4 border-2 border-gray-400 rounded-md peer-checked:bg-slate-500 peer-checked:border-slate-500"></div>
                <span className="font-medium text-[10px]">Only At Kitchen-34</span>
              </label>
              
            </div>

          </div>

          <div className="">

            <p className="font-medium flex justify-between p-2 pb-0">
              <span className="">Brand</span>
              <span className="">-</span>
            </p>

            <div className="px-2 flex flex-col gap-2">
              <input 
                type="text"
                className="w-full border-t-0 border-x-0 border-b focus:outline focus:outline-slate-200 px-2 py-1 text-[10px] bg-transparent rounded-none"
                placeholder="Find a brand"
              />

              <div className="flex gap-2 flex-col">
                {
                  groupedItems.map((group) => (
                    <label key={group.brand} htmlFor="" className="text-[10px] flex gap-2 items-center">
                      <input type="radio" className="hidden" />
                      <div className="w-4 h-4 border-2 border-gray-400 rounded-md peer-checked:bg-slate-500 peer-checked:border-slate-500"></div>
                      {group.brand}
                    </label>
                  ))
                }
              </div>
            </div>

          </div>
        </ol>
      </div>
      <CategoryList products={products} />
      </div>
    </section>
  )
}

