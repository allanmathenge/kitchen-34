import Link from "next/link"
import getAllProducts from "../../../lib/getAllProducts"
import ListItems from "./ListItems"
import HorizontalScrollList from "./HorizontalScrollList"
import { Suspense } from "react"

export default async function HomePage() {
    const products = await getAllProducts()

    // filter products belonging to the same category

    const categories = products.reduce((accumulator, product) => {
        if (!accumulator[product.category]) {
            accumulator[product.category] = []
        }
        accumulator[product.category].push(product)
        return accumulator
    }, {})
    
    return (
    <section className="pb-16">
        <div className="text-white/80 hover:text-white font-bold text-center py-8">
            <Link href="/" className="no-underline">
                <span className="text-3xl sm:text-5xl block text-nowrap">Kitchen-34</span>
                <span className=" text-[10px] sm:text-xl text-center">Upgrade your kitchen appliances</span>
            </Link>
        </div>

        {/* Items on horizontal scroll */}
        <div className="py-6">
            <h2 className="text-sm md:text-xl font-bold text-slate-500 my-2">Top categories in kitchen appliances</h2>
            <div className="">
                <Suspense fallback={<h2 className="font-medium">Loading ...</h2>}>
                    <HorizontalScrollList /> 
                </Suspense>
            </div>
        </div>

        <div className="flex flex-1 flex-wrap justify-center sm:justify-between gap-3">
        {
            // products categories
            Object.keys(categories).map((category) => (
                <div key={category} className="bg-white w-auto sm:max-w-[288px] h-[360px] p-2 flex justify-between flex-wrap flex-shrink items-start overflow-hidden">

                    <h2 className="capitalize font-bold pb-2">{category}</h2>

                    <Link href={`/products/categories/${encodeURIComponent(category)}`} className="flex flex-wrap justify-around gap-2 list-none hover:shadow-sm">
                        {
                            // map items under the same category
                            categories[category].slice(0, 4).map((product) => (
                                <li key={product.id} className="">
                                    {/* React suspense */}
                                    <Suspense fallback={<h2 className="font-light">Loading ...</h2>}>
                                        <ListItems item={product} />
                                    </Suspense>
                                </li>
                            ))
                        }
                    </Link>
                    <Link 
                        href="/"
                        className="text-[10px] text-slate-500 hover:text-red-500"
                    >See more in {category}</Link>
                </div>
            ))
        }
        </div>
    </section>
    )
}