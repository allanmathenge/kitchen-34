import React, { Suspense } from "react"
import getAllProducts from "../../../../lib/getAllProducts"
import Image from "next/image"
import Link from "next/link"
import StarRating from "../../[id]/components/StarRating"
import DeliveryDate from "../../[id]/components/DeliveryDate"
import AddItemToCartButton from "../../[id]/components/AddItemToCartButton"
import BrandItems from "./components/BrandItems"

// Metadata
export function generateMetadata({ params }) {
    const { category } = params

    const decodedUrl = (url) => {
        return url.replace(/%20/g, " ")
    }

    const decodedUrlCategory = decodedUrl(category)

    if (!decodedUrlCategory) {
        return {
            title: "The requested category not found"
        }
    }
    return {
        title: decodedUrlCategory,
        description: `The best deals in ${decodedUrlCategory}`
    }
}

export async function generateStaticParams() {
    const products = await getAllProducts()

    const catArray =  [...new Set(products.map(item => item.category))]
    return catArray.map(cat => ({ category: cat.toString()}))
}

export default async function Category({ params }) {
    const data = await getAllProducts()
    const { category } = params

    const decodeUrl = (url) => {
        return url.replace(/%20/g, " ")
    }

    const decodedUrlCategory = decodeUrl(category)
    
    // filter items by the current category
    const filteredItems = data.filter((item) => item.category === decodeURIComponent(category))

    // Sort by brand and show by item radio button
  return (
    <section className="min-h-screen">

        <div className="flex gap-2 bg-white/90 py-8 px-2">

            <div className="w-[240px] h-auto border flex flex-col gap-2 border-slate-200 p-1">

                <div className="">
                    <h2 className="font-medium">Brands</h2>
                    {/* react suspense */}
                    <Suspense 
                        fallback={<div>
                            <h2 className="font-medium">Loading...</h2>
                        </div>}
                    >
                        <BrandItems items={filteredItems} />
                    </Suspense>
                </div>

                <div className="">
                    <h2 className="font-medium">Condition</h2>
                    <p className="">New</p>
                    <p className="">Renewed</p>
                    <p className="">Used</p>

                </div>

            </div>

            <div className="w-full ">
                <h1 className="capitalize font-medium">Results for: <span className="capitalize text-[16px]">{decodedUrlCategory}</span></h1>
                <p className="font-thin text-[12px] text-black/80">Price and details vary depending on products size, color and brand</p>

                <div className="flex flex-wrap gap-4 justify-between">
                    {
                        filteredItems.map((item) => (
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
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
