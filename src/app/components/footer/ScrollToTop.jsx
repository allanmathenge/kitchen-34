"use client"

import React from "react"

export default function ScrollToTop() {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <button className="w-full text-nowrap" onClick={scroll}>Back To Top</button>
  )
}
