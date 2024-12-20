"use client"

import React from "react"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
import { usePathname } from "next/navigation"

export default function Routing({ children }) {
    const pathname = usePathname()
    // Routes navbar and footer should not appear
    const noLayoutRoutes = ['/register']

    // check if the current route is in the layout
    const isNoLayout = noLayoutRoutes.some((route) => pathname.startsWith(route))
  return (
    <>
      {!isNoLayout && <Navbar /> }
        <main className="bg-gradient-to-r from-slate-100 via-slate-400 to-slate-100" >{children}</main>
      {!isNoLayout && <Footer />}
    </>
  )
}
