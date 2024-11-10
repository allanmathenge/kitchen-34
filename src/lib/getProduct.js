import React from "react"

export default async function getProduct(id) {
  
  const res = await fetch(`http://localhost:3500/products/${id}`, {
    next: {revalidate: 60},
})

  if (!res.ok) {
  
    return res.json("Error fetching product data requested")
  }

  return res.json()
}
