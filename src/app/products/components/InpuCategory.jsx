"use client"

import React from "react"
import { useCategoryContext } from "../../context/CategoryContext"

export default function InpuCategory() {
  const { setSelectedCategory } = useCategoryContext()
  return (
    <div>
        <div className="flex flex-col gap-2">

        <label htmlFor="offers" className="flex gap-2 items-center p-2 py-0">
        <input
            type="radio" 
            className="hidden"
        />
        <div className="w-4 h-4 border-2 border-gray-400 rounded-md peer-checked:bg-slate-500 peer-checked:border-slate-500 "></div>
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
  )
}
