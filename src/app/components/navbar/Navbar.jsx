"use client"

import Link from "next/link"
import React, { useState } from "react"
import { FaGlobe, FaShoppingCart } from "react-icons/fa"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import SubNavbar from "./SubNavbar"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className="sticky top-0 bg-slate-200">
        <div className="h-[56px] flex justify-between gap-1 items-center">

            <div className="">
                <h2 className=" sm:text-3xl tracking-tighter font-black text-red-600 m-0">
                    <Link className="no-underline text-nowrap text-[2pc]" href="/">
                        Kitchen-34
                    </Link>
                </h2>
            </div>

            {/* desktop navigation bar */}
            <div className="hidden text-[1pc] md:flex font-bold text-black/70">
                <ul className="list-none flex justify-around gap-3">

                    <Link href="/">
                        <li className="text-red-600">Home</li>
                    </Link>

                    <Link href="/products">
                        <li className="">Products</li>
                    </Link>

                    <Link href="/contacts">
                        <li className="">Contact</li>
                    </Link>

                    <Link href="/customer-service">
                        <li className="text-nowrap">Customer Service</li>
                    </Link>

                    <Link href="/shop-by-interest">
                        <li className="text-nowrap">Shop By Interest</li>
                    </Link>

                </ul>
            </div>
            
            {/* cta */}
            <div className="hidden md:flex gap-2 items-center font-bold text-black/70">
                <div className="">Login</div>
                <div className="gap-1 items-center flex"><FaGlobe className="text-red-600" /> EN<MdOutlineKeyboardArrowDown /></div>
                <div className="cursor-pointer"><FaShoppingCart className="text-slate-700 text-xl" /></div>
            </div>

            {/* mobile navigation bar */}

            <div className={`${isOpen ? " relative" : "bg-black min-h-screen w-full"} top-0 absolute z-50 flex flex-col items-end md:hidden `}>

                <button onClick={toggleMenu} className={`${isOpen ? "" : "toggle-btn"} text-slate-600 w-8 h-8 m-2`}>

                    <div className="bg-white w-8 h-1 rounded transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>

                </button> 

                <div className={`${isOpen ? "hidden" : "origin-top animate-open-menu w-full"} font-thin text-white text-3xl`}>
                    <ul className="list-none flex flex-col gap-6 text-center">

                        <Link href="/" className="hover:bg-black/60">
                            <li className="hover:text-red-600">Home</li>
                        </Link>

                        <Link href="/products">
                            <li className="">Products</li>
                        </Link>

                        <Link href="/contacts">
                            <li className="">Contact</li>
                        </Link>

                        <Link href="/about-us">
                            <li className="">Customer Service</li>
                        </Link>

                        <Link href="/shop-by-interest">
                            <li className="">Shop By interest</li>
                        </Link>

                        <Link href="/thank-you">
                            <li className="">Thankyou</li>
                        </Link>

                        <Link href="/" className="">Login</Link>

                    </ul>
                </div> 
            </div>
                    
        </div>
        <SubNavbar />
    </nav>
  )
}
