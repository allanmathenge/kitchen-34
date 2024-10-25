import Link from "next/link"
import React from "react"
import { FaGlobe, FaShoppingCart } from "react-icons/fa"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import SubNavbar from "./SubNavbar"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 bg-slate-200 px-2">
        <div className="h-[56px] flex justify-between items-center">

            <div className="">
                <h2 className="text-xl sm:text-3xl tracking-tighter font-black text-red-600">
                    <Link className="no-underline text-nowrap" href="/">
                        Kitchen-34
                    </Link>
                </h2>
            </div>

            <div className="hidden md:flex font-bold text-black/70">
                <ul className="list-none flex gap-3">

                    <Link href="/">
                        <li className="text-red-600">Home</li>
                    </Link>

                    <Link href="/contacts">
                        <li className="">Contact</li>
                    </Link>

                    <Link href="/products">
                        <li className="">Products</li>
                    </Link>

                    <Link href="/about-us">
                        <li className="">About Us</li>
                    </Link>

                    <Link href="/blogs">
                        <li className="">Blogs</li>
                    </Link>

                    <Link href="/thank-you">
                        <li className="">Thankyou</li>
                    </Link>

                </ul>
            </div>

            <div className="flex gap-2 items-center font-bold text-black/70">
                <div className="">Login</div>
                <div className="gap-1 items-center hidden sm:flex"><FaGlobe className="text-red-600" /> EN<MdOutlineKeyboardArrowDown /></div>
                <div className="cursor-pointer"><FaShoppingCart className="text-slate-600 text-xl" /></div>
            </div>

        </div>
        <SubNavbar />
    </nav>
  )
}
