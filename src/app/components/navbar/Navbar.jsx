"use client"

import Link from "next/link"
import React, { useState } from "react"
import { FaGlobe, FaShoppingCart } from "react-icons/fa"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import SubNavbar from "./SubNavbar"
import { useRouter } from "next/navigation"
import { useCart } from "../../context/CartContext"

export default function Navbar() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)
    const { cart } = useCart()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navItems = [
        {name:"Home", path:"/"},
        {name:"Products", path:"/products"},
        {name:"Contact", path:"/contacts"},
        {name:"Customer Service", path:"/customer-service"},
        {name:"Shop By Interest", path:"/shop-by-interest"}
    ]

  return (
    <nav className="sticky top-0 bg-slate-200 px-[4px] py-2">
        <div className="h-auto flex justify-between gap-1 items-center">

            <div className="">
                <h2 className=" sm:text-3xl tracking-tighter font-black text-red-600 m-0">
                    <Link className="no-underline text-nowrap" href="/">
                        Kitchen-34
                    </Link>
                </h2>
            </div>

            <p className="md:hidden text-sm md:text-xl flex text-nowrap flex-1 justify-center ">+254 798769535</p>

            {/* desktop navigation bar */}
            <div className="hidden text-[1pc] md:flex font-bold text-black/70">
                <ul className="list-none flex justify-around gap-3">
                    {
                        navItems.map((item) => (
                            <Link key={item.path} href={item.path} className={`text-black/80 hover:text-black/60 ${ router.pathname === item.path ? "text-red-500" : ""}`}> 
                                {item.name}
                            </Link>
                        ))
                    }
                </ul>
            </div>
            
            {/* cta */}
            <div className="hidden md:flex gap-2 items-center font-bold text-black/70">
                <div className="">Login</div>
                <div className="gap-1 items-center flex"><FaGlobe className="text-red-600" /> EN<MdOutlineKeyboardArrowDown /></div>

                <div 
                    onClick={() => router.push('/products/cart')}
                    className="cursor-pointer w-[24px] h-[24px] relative flex justify-center items-center">
                        <FaShoppingCart 
                        className="text-slate-700 text-[22px]" />
                        <p className="bg-red-500 text-white absolute text-[12px] h-[14px] w-[14px] top-0 right-0 z-10 rounded-full flex justify-center items-center">{cart.length}</p>
                </div>

            </div>

            {/* mobile navigation bar */}

            <div className={`${isOpen ? "bg-black min-h-screen w-full" : "relative"} top-0 absolute z-50 flex flex-col items-end md:hidden `}>

                <button onClick={toggleMenu} className={`${isOpen ? "toggle-btn" : ""} text-slate-600 w-8 h-8 m-2`}>

                    <div className="bg-white w-8 h-1 rounded transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>

                </button> 

                <div className={`${isOpen ? "origin-top animate-open-menu w-full" : "hidden"} font-thin text-white text-3xl`}>
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
