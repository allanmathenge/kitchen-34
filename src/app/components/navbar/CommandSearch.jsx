"use client"

import React, { useState, useEffect, useRef } from "react"
import { useCategoryContext } from "../../context/CategoryContext"

export default function CommandSearch() {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ query, setQuery ] = useState("")
    const [ filteredItems, setFilteredItems ] = useState([])
    const inputRef = useRef(null)
    const { products } = useCategoryContext()

    const items = [...new Set(products.map(product => product.category))]

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault()
                setIsOpen(!isOpen)
            }
        }
        window.addEventListener("keyDown", handleKeyDown)

        return (() => {
            window.removeEventListener("keydown", handleKeyDown)
        })

    }, [isOpen])

    useEffect(() => {
        setFilteredItems(
            items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
        )
    }, [query])

    useEffect(() => {
        if (isOpen) {
            setQuery("")
            inputRef.current?.focus()
        }
    }, [isOpen])
    
  return (
    <>
        {/* Overlay */}
         {
            isOpen && (
                <div
                    className="fixed inset-0 bg-gray-400 bg-opacity-50 z-50"
                    onClick={() => setIsOpen(false)}
                />
            )
        }

        {/* Modal */}

        {
            isOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-96 max-w-full p-4">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search ..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <div className="mt-4">
                            {
                                filteredItems.length > 0 
                                ? (
                                    filteredItems.map((item, index) => (
                                        <div 
                                            className=""
                                            key={index}
                                            >
                                            <div className="p-2 hover:bg-gray-100 cursor-pointer rounded-md">{item}</div>
                                        </div>
                                    ))
                                )
                                : <p className="text-gray-800 text-center">No results found!</p>
                            }
                        </div>
                    </div>
                </div>
            )
        } 
        
    </>
  )
}
