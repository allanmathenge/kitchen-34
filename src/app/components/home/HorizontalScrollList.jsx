import React from "react"
import Image from "next/image"
import Link from "next/link"

// eslint-disable-next-line @next/next/no-async-client-component
export default function HorizontalScrollList({ products }) {

  return (
    <div>
      <div className="flex items-center h-[120px] overflow-x-auto scrollbar-hide whitespace-nowrap gap-3">
        {
          products.map(({name, id, image, price}) => (
            <Link href={`products/${id}`} key={id} className="min-w-[160px] h-full flex flex-col justify-between items-center text-start rounded shadow-md p-1 bg-white overflow-hidden hover:shadow-slate-400 no-underline">
              <div className="min-h-[60%]">
                <Image src={image} alt={name} width={64} height={64} className="w-auto h-full hover:scale-105" />
              </div>
              <div className="flex flex-col text-start">
              <p className="text-[10px] capitalize text-wrap">{name}</p>
              <span className="text-[12px] text-red-500 font-semibold">Only @KSH{price}</span>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
