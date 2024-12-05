"use client"

import React, { useEffect, useRef, useState } from "react"
import { FaRegBell, FaRegHeart } from "react-icons/fa"
import { FaRegMessage } from "react-icons/fa6"
import { GrAnnounce } from "react-icons/gr"
import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useCategoryContext } from "../../context/CategoryContext"
import Link from "next/link"

export default function SubNavbar() {

  const [ isFocused, setIsFocused ] = useState(false)
  const [ searchQuery, setSearchQuery ] = useState("")
  const [ isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef()

  const { products } = useCategoryContext()

  const productsCategories = [...new Set(products.map(product => product.category))]

  const filteredItems = productsCategories.filter((category) => category.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      {/* Overlay */}
      {
        isFocused && (
          <div
            className="fixed inset-0 bg-opacity-50 z-40"
            onClick={() => setIsFocused(false)}
          />
        )
      }

      <section className="sm:py-0">
        <div className="h-[40px] flex justify-between gap-1 sm:gap-5 items-center">

        <div 
          className="hidden md:flex flex-1 text-sm md:text-xl text-white/80 items-center cursor-pointer gap-1 text-nowrap h-full bg-red-600 hover:bg-red-500 overflow-hidden hover:text-white rounded-full max-w-[380px]"
          onClick={handleToggle}
          onBlur={() => setIsOpen(false)}
          ref={dropdownRef}
        >
          <GrAnnounce className="ml-2 font-bold"/>
            <h2 className="flex items-center font-bold">Offers & Promotions
              <span ><RiArrowDropDownLine className="text-3xl" /></span>
            </h2>

          {/* Promos dropdown menu */}

          {
            isOpen && (
              <div className="absolute z-50 w-full md:w-[388px] mt-60 max-h-64 overflow-y-auto bg-gray-100 border border-gray-300 rounded-md shadow-lg text-gray-500">
                <ul className="">
                  {
                    productsCategories.map((category) => (
                      <li key={category} className="list-none px-4 py-2 flex flex-col hover:bg-gray-200 capitalize">{category}</li>
                    ))
                  }
                </ul>
              </div>
            )
          }

        </div>

        {/* Menu and command-k UI */}
        <div className="flex flex-1">
          <div className="sm:flex-1 flex-auto h-[40px] w-full">
            <input 
              type="text"
              placeholder="Search ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full h-full px-7 border border-gray-300 focus:border-2 focus:ring-slate-400 focus:outline-none rounded-full"
            />

            <div className="ml-1 -mt-7">
              <IoSearchOutline className="text-xl text-gray-600 cursor-pointer" />
            </div>
          </div> 
          {/* Command search ui */}
          {
            isFocused && (
              <div 
                className="absolute z-50 w-full md:w-[420px] mt-12 max-h-64 overflow-y-auto bg-gray-100 border border-gray-300 rounded-md shadow-lg"
                onMouseDown={(e) => e.preventDefault()} // prevent blur when clicking inside
                onClick={(prev) => setIsFocused(!prev)}
                >
                  {
                    filteredItems.length > 0
                    ? (
                      filteredItems.map((item) => (
                        <Link 
                          href={`/products/categories/${encodeURIComponent(item)}`}
                          key={item}
                          className="px-4 py-2 flex flex-col hover:bg-gray-200 capitalize"
                        >
                          {item}
                        </Link>
                      ))
                    )
                    :
                    <div className="px-4 py-2 text-gray-500">No results found!</div>
                  }
              </div>
            )
          }
        </div>
          <div className="flex-1 ">
            <div className="flex justify-end gap-1 sm:gap-3 text-[12px] sm:text-xl">
              <p className="text-sm md:text-xl text-slate-600 font-medium hidden sm:flex justify-end text-nowrap">+254 798769535</p>
              <div className="cursor-pointer text-red-400 w-[24px] h-[24px] relative flex justify-center items-center">
                  <FaRegHeart className="" />
                  <p className="bg-red-500 text-white absolute text-[12px] h-[14px] w-[14px] top-0 right-0 z-10 rounded-full flex justify-center items-center">1</p>
              </div>
              <div className="cursor-pointer text-red-400 w-[24px] h-[24px] relative flex justify-center items-center">
                  <FaRegBell className="" />
                  <p className="bg-red-500 text-white absolute text-[12px] h-[14px] w-[14px] top-0 right-0 z-10 rounded-full flex justify-center items-center">2</p>
              </div>
              <div className="cursor-pointer text-red-400 w-[24px] h-[24px] relative flex justify-center items-center">
                  <FaRegMessage className="" />
                  <p className="bg-red-500 text-white absolute text-[12px] h-[14px] w-[14px] top-0 right-0 z-10 rounded-full flex justify-center items-center">1</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
