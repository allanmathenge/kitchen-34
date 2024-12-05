"use client"

import React, { useState } from "react"
import { useCategoryContext } from "../../context/CategoryContext"

export default function CategoryNav() {
    const { setSelectedCategory, setSelectedBrand } = useCategoryContext()

    const handleDeselectAll = () => {
      setSelectedCategory(null)
      setSelectedBrand(null)
    }

  return (
    <div className="gap-2 md:gap-6 text-sm font-semibold py-3 hidden md:flex">
      <button 
        onClick={handleDeselectAll} 
        className=" border-none "
      >All Items Home |</button>
      
      <button onClick={() => setSelectedCategory(null)} className=" border-none ">Kitchen & Dining</button>
      <button onClick={() => setSelectedCategory(null)} className=" border-none ">Appliances</button>
      <button onClick={() => setSelectedCategory(null)} className=" border-none ">Funiture</button>
      <button onClick={() => setSelectedCategory(null)} className=" border-none ">Shop By Style</button>
      <button onClick={() => setSelectedCategory(null)} className=" border-none ">Home Savings</button>
      <button onClick={() => setSelectedCategory(null)} className=" border-none ">Bed & Bath</button>
      <button onClick={() => setSelectedCategory(null)} className=" border-none ">Health and Household</button>
      <button onClick={() => setSelectedCategory(null)} className=" border-none ">Home and Kitchen</button>
      <button onClick={() => setSelectedCategory(null)} className=" border-none ">Movies and Television</button>
    </div>
  )
}
