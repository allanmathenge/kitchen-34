import React, { Suspense } from "react"
import getAllProducts from "../../../../lib/getAllProducts"
import CategoryPage from "./components/CategoryPage"

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
        <CategoryPage filteredItems={filteredItems} decodedUrlCategory={decodedUrlCategory} />
    </section>
  )
}
