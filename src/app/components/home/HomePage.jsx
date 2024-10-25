import Link from "next/link"
import getAllProducts from "@/lib/getAllProducts"
import ListItems from "./ListItems"

export const revalidate = 0

export default async function HomePage() {
    const productsData = getAllProducts()
    const products = await productsData
    // console.log(products)

    // filter products belonging to the same category

    const categories = products.reduce((accumulator, item) => {
        if (!accumulator[item.category]) {
            accumulator[item.category] = []
        }
        accumulator[item.category].push(item)
        return accumulator
    }, {})

    return (
    <section className="pb-16">
        <div className="text-white/80 hover:text-white font-bold text-center py-12">
            <Link href="/" className="no-underline">
                <span className="text-3xl sm:text-5xl block text-nowrap">Kitchen-34</span>
                <span className=" text-[10px] sm:text-xl text-center">Upgrade your kitchen appliances</span>
            </Link>
        </div>

        <div className="flex flex-1 flex-wrap justify-center sm:justify-between gap-3">
        {
            // products categories
            Object.keys(categories).map((category) => (
                <div key={category} className="bg-white w-[288px] h-[360px] p-2 flex justify-between flex-col items-start">

                    <h2 className="capitalize font-bold pb-2 ">{category}</h2>

                    <ul className="flex flex-wrap sm:flex-wrap gap-2 list-none">
                        {
                            // map items under the same category
                            categories[category].slice(0, 4).map((item) => (
                                <li key={item.id} className="">
                                    <ListItems item={item} />
                                </li>
                            ))
                        }
                    </ul>
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

// {
//     productsCategory.map((product) => (
//         <ul 
//             key={product.id} 
//             className="bg-white p-4 flex flex-col justify-center sm:justify-between list-none">
//             <h2 className="text-xl font-bold text-black/80 capitalize">{product.category}</h2>
//             <ListItems product={product} />
//         </ul>
//     ))
// }