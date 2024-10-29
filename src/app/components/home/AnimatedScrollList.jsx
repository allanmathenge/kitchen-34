import React from "react"
import Image from "next/image"

// eslint-disable-next-line @next/next/no-async-client-component
export default function AnimatedScrollList({ products }) {
    // console.log(products)

    return (
    <div>
        <div className="flex items-center h-32 overflow-x-auto scrollbar-hide whitespace-nowrap gap-3">
          {
            products.map(({name, image, price}, index) => (
              // duplicate items to give infinity scroll illusion
              <div key={index} className="min-w-[200px] h-full flex flex-col flex-shrink justify-between items-center text-start rounded shadow-md p-3 bg-white overflow-hidden">
                <div className="">
                  <Image src={image} alt={name} width={64} height={64} className="w-auto" />
                </div>
                <div className="flex flex-col text-start">
                <p className="text-[12px] capitalize text-nowrap ">{name}</p>
                <span className="text-[12px] text-red-500 font-semibold">Only @KSH{price}</span>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}
