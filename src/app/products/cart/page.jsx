"use client"

import React from "react"
import { useCart } from "../../context/CartContext"
import Image from "next/image"
import toast, { Toaster } from "react-hot-toast"
import { useCategoryContext } from "../../context/CategoryContext"
import { categoryImages } from "../../utils/categoryImages"
import Link from "next/link"

export default function Cart() {
    const { cart, removeItemFromCart } = useCart()
    const { products } = useCategoryContext()

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const cartCategory = [...new Set(products.map((product) => product.category))]

    if (cart.length === 0) return <div className="min-h-screen flex justify-center items-center">
        <p className="font-bold text-xl ">Your cart is empty</p>
    </div>

    const handleShareClick = async () => {
        try {
            const currentUrl = window.location.href
            await navigator.clipboard.writeText(currentUrl)
            toast.success("Link copied successfully!")
        } catch (error) {
            toast.error("Failed to copy link!")
        }
    }

  return (
    <section className="min-h-screen">
        <div className="flex gap-4 py-6">
            <div className="bg-white/90 p-3 border border-slate-400 rounded shadow">
                <div className="border-b-[1px] w-full border-slate-400">
                    <h1 className="text-2xl font-medium text-black/80">Shopping Cart</h1>
                    <p className="text-right text-sm font-medium text-black/80">Price</p>
                </div>

                <ul className="list-none flex flex-col gap-4 py-8 ">
                    {
                        cart.map(({id, name, image, available, quantity, description, price}) => (
                            <li key={id} className="">
                                <div className="flex justify-between gap-4">
                                    <div className="min-w-[400px]">
                                        <Image src={image} alt={name} width={400} height={400} className="w-full" />
                                    </div>

                                    <div className="flex flex-col justify-between">
                                        <p className="capitalize font-bold text-slate-700 text-xl">{name}</p>
                                        <p className="text-[16px] text-black/80 font-normal">{description}</p>
                                        <p className="text-slate-600 border border-green-600 px-2 py-1 w-fit rounded-full">{available ? "In Stock" : "Out Of Stock"}</p>
                                        <p className="text-[12px] text-black/80 font-normal">Color: Gray</p>
                                        <div className="flex gap-3">
                                            <p className="text-slate-400 hover:text-slate-600 border border-slate-400 rounded-full w-28 text-center hover:border-slate-800">Quantity: {quantity} </p>
                                            <button onClick={() => removeItemFromCart(id)} className="text-slate-400 hover:text-slate-600 border border-slate-400 rounded-full w-28 text-center hover:border-slate-800">Remove </button>
                                            <button 
                                                className="text-slate-400 hover:text-slate-600 border border-slate-400 rounded-full w-28 text-center hover:border-slate-800"
                                                onClick={handleShareClick}
                                            >Share</button>
                                            <Toaster position="top-center" reverseOrder={false} />
                                        </div>
                                    </div>

                                    <div className="">
                                        <p className="font-bold text-slate-700 text-xl">KSH{price}</p>
                                    </div>
                                </div>
                                <div className="border border-slate-400 w-full my-7" />
                            </li>
                        ))
                    }
                </ul>
                <div className="flex items-center justify-end">
                    <p className="text-sm font-medium">Subtotal KSH {totalPrice}</p>
                </div>
            </div>

            <div className="h-auto flex flex-col gap-4">
                <div className="shadow text-sm h-[120px] w-full flex flex-col justify-center items-center bg-white/80 border gap-3 border-slate-400 p-2 rounded">
                    <h4 className="font-medium text-sm text-nowrap">Subtotal (items): <span className="font-semibold">KSH {totalPrice}</span></h4>
                    <button className="px-4 py-2 bg-[#FFD700] rounded-full w-full text-nowrap justify-center">Proceed To Checkout</button>
                </div>
                <div className="w-full h-full bg-white/90 border border-slate-400 rounded flex flex-col p-2 gap-3">
                    <h1 className="text-[12px] font-bold">Customers who bought items in your rescent search history also bought</h1>
                    {
                        cartCategory.map((category) => (
                            <Link
                                href={`/products/categories/${encodeURIComponent(category)}`}
                                key={category}
                                className="w-full h-[120px] border bg-white border-slate-400 flex flex-col items-center justify-center"
                            >
                            <p className="capitalize text-[10px]">{category}</p>
                                <Image
                                    src={categoryImages[category]}
                                    alt={category}
                                    width={100}
                                    height={100}
                                    className=" object-contain"
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>

        </div>
    </section>
  )
}
