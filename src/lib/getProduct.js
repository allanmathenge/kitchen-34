import React from "react"

export default async function getProduct(id) {
  
  const res = await fetch(`process.env.DATA/${id}`, {
    next: {revalidate: 60},
})

  if (!res.ok) {
  
    return res.json("Error fetching product data requested")
  }

  return res.json()
}
