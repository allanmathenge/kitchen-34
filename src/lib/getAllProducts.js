
export default async function getAllProducts() {
    const res = await fetch('http://localhost:3500/products', {
        next: { revalidate: 60 },
    })
    if (!res.ok) throw new Error('Error fetching products')

    return res.json()
}