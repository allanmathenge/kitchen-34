import React from "react"
import Image from "next/image"
import Link from "next/link"

// eslint-disable-next-line @next/next/no-async-client-component
export default function HorizontalScrollList({ products }) {

    return (
    <div>
        <div className="flex items-center h-32 overflow-x-auto scrollbar-hide whitespace-nowrap gap-3">
          {
            products.map(({name, id, image, price}) => (
              <Link href={`products/${id}`} key={id} className="min-w-[200px] h-full flex flex-col justify-center items-center text-start rounded shadow-md p-3 bg-white overflow-hidden hover:shadow-slate-400 no-underline">
                <div className="">
                  <Image src={image} alt={name} width={64} height={64} className="w-auto hover:scale-105" />
                </div>
                <div className="flex flex-col text-start">
                <p className="text-[12px] capitalize text-nowrap ">{name}</p>
                <span className="text-[12px] text-red-500 font-semibold">Only @KSH{price}</span>
                </div>
              </Link>
            ))
          }
        </div>
    </div>
  )
}
