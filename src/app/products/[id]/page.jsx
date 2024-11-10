import getAllProducts from "../../../lib/getAllProducts"
import getProduct from "../../../lib/getProduct"
import { notFound } from "next/navigation"
import React from "react"
import StarRating from "./components/StarRating"
import Image from "next/image"
import DeliveryDate from "./components/DeliveryDate"
import AddItemToCartButton from "./components/AddItemToCartButton"

export async function generateMetadata({ params }) {
  const { id } = params
  const product = await getProduct(id)

  if (!product.name) {
    return {
      title: "Product requested not found"
    }
  }
  return {
    title: product.name,
    description: `The best deals for ${product.name}`
  }
}

export async function generateStaticParams() {
  const products = await getAllProducts()
  return products.map((product) => ({
    id: product.id.toString()
  }))
}

export default async function Product({ params }) {

  const { id } = params

  const product = await getProduct(id)
  // console.log(product)
  if (!product) notFound()

  const { name, rate, price, image, description } = product
  // Build react icon stars depending on rating

  return (
    <section className="pb-6 md:py-8 bg-white">
      <div className="py-3 flex flex-wrap items-center justify-around border-b border-slate-100 gap-0 mb-3">

        <p className="font-bold text-slate-500">Brand</p>

        <div className="flex gap-2 md:gap-4 flex-wrap justify-center">
          <h2 className="font-bold text-slate-800 md:text-xl capitalize text-nowrap">{name}</h2>
          <div className=" w-20 bg-red-500 rounded-lg flex text-sm text-white justify-center items-center"><p className=" uppercase font-bold px-3 text-nowrap">save 5%</p></div>
        </div>

        <div className="hidden md:flex gap-4 text-sm md:text-xl">
          <StarRating rating={rate} />
          <p className=" text-red-600">KSH {price}</p>
        </div>

      </div>
       
      <div className="flex md:gap-4 gap-1 h-[360px] md:h-[400px] md:py-8 px-2">

        <div className="rounded-[5px] md:rounded-[10px] w-[600px] min-w-[50%] h-full flex justify-center items-center shadow-sm">
          <Image src={image} alt={name} width={300} height={200} priority className="w-auto h-full rounded-[4px] md:rounded-[8px] object-contain"/>
        </div>

        <div className="flex flex-col justify-between h-full">

          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-black/90 md:text-xl capitalize text-nowrap">{name}</h2>
            <h1 className="font-bold text-black/90">About this item</h1>
            <p className="text-black/80 text-[0.7rem] md:text-[16px] font-medium text-wrap">{description}</p>
          </div>

          <div className="flex flex-col gap-2 ">

            <div className="flex flex-wrap justify-between items-center h-8">
              <p className="text-sm md:text-xl font-medium ">KSH {price}</p>
              <p className="font-thin text-[12px] text-slate-700">Price List : <span className="line-through">KSH {(price * 1.05).toFixed(2)}</span></p>
              <div className="flex gap-2 items-center text-[12px]"><StarRating rating={rate}/> <span className="">Rating</span></div>
              <p className="text-black/80 text-[12px] md:text-sm font-thin">100 bought in past month</p>
            </div>

            <div className="border w-full border-slate-100"/>
            <div className="text-slate-800 font-medium text-[0.6rem] md:text-[1rem]">Delivery <DeliveryDate /> </div>
          </div>

          <div className="flex md:flex-row gap-3 items-center w-full">
            <input 
              className="hidden md:flex bg-white/60 border-2 border-slate-500 focus:border-slate-600 outline-none rounded-full text-black font-medium px-3 py-3 w-full"
              type="text"
              placeholder="Quantity: 1"
              value=""
            />
            <div className="border border-slate-400 bg-[#FFD700] rounded-full text-sm font-bold w-full text-nowrap">
              <AddItemToCartButton item={product}/>
            </div>
            <button className="hidden md:flex border border-slate-400 px-6 py-3 bg-[#FFD700] rounded-full font-bold w-full text-nowrap justify-center">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}
