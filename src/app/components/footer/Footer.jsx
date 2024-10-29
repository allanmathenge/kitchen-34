import Link from "next/link"
import React from "react"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="text-slate-600">
        <div className="flex h-8 bg-slate-600 w-full text-white font-bold justify-center items-center cursor-pointer">Back to top</div>
        <div className="flex flex-wrap justify-between py-4 gap-4">

            <div className="flex flex-col">
                <h1 className="capitalize font-bold">Shoping guide</h1>
                <Link href="/">How do I pay on Kitchen-34</Link>
                <Link href="/">How to apply after sale refund</Link>
                <Link href="/">How long does order arrive?</Link>
                <Link href="/">Forgot password?</Link>
            </div>

            <div className="flex flex-col">
                <h1 className="capitalize font-bold">Customer help center</h1>
                <Link href="/">Terms and conditions</Link>
                <Link href="/">After sale policy</Link>
            </div>

            <div className="flex flex-col">
                <h1 className="capitalize font-bold">Want to be a seller?</h1>
                <Link href="/">Help</Link>
            </div>

            <div className="flex flex-col">
                <h1 className="capitalize font-bold">About us</h1>
                <Link href="/">Kitchen-34</Link>
                <Link href="/">Blog</Link>
            </div>

        </div>
        <div className="flex gap-4 text-xl flex-wrap p-3">
            <Link href="/"><FaFacebookF /></Link>
            <Link href="/"><FaXTwitter /></Link>
            <Link href="/"><FaYoutube /></Link>
            <Link href="/"><FaInstagram /></Link>
            <Link href="/"><FaLinkedinIn /></Link>
        </div>

        <div className="border-[1px] border-white/80 w-full" />

        <div className="flex items-center gap-4 my-3">
            <p>All rights reserved </p>
            <h2 className=" sm:text-xl tracking-tighter font-black text-red-600 m-0">
                <span className="text-slate-600">&copy;</span>
                <Link className="no-underline text-nowrap" href="/">
                    Kitchen-34
                </Link>
            </h2>
        </div>

    </section>
  )
}
