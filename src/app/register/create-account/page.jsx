"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Register() {
    const router = useRouter()

  return (
    <section className="w-full h-screen">
        <div className="md:w-96 w-64 mx-auto">
            <h1 className="sm:text-3xl tracking-tighter font-black text-red-600 m-0 text-xl text-center py-4">Kitchen-34</h1>
            <div className="bg-white w-full px-2 py-4 rounded flex flex-col gap-3 h-[400px]">
                <h4 className="font-thin text-slate-800 text-2xl">Register</h4>
                <div className="flex flex-col gap-4 justify-between w-[92%] h-full border border-slate-400 shadow rounded mx-auto px-2 py-4">

                    <div className="">
                        <label htmlFor="register" className=" font-medium">Enter your Email</label>
                        <input 
                            type="text"
                            className="w-full border-slate-500 outline-slate-400 shadow px-2 py-1 "
                            placeholder="example@gmail.com"

                        />
                    </div>

                    <button className="w-full px-auto py-1 border bg-[#FFD700] rounded-md text-sm md:text-xl text-black/70 font-bold">Continue</button>

                    <p className="text-[10px]">By continuing, you agree to Kitchen-34&apos;s Conditions of use and privacy notification</p>

                    <Link href="/help" className="text-blue-400 underline" >Need help?</Link>

                    <div className="" >
                        <hr className="w-full bg-slate-400" />
                        <p className="-mt-[12px] bg-white text-center max-w-32 mx-auto text-[12px]">New to Kitchen-34?</p>
                    </div>

                    <button 
                        className="bg-slate-100 hover:bg-slate-200 border-slate-300 rounded text-[13px] py-1"
                        onClick={router.push("/register")}
                    >Create your account</button>

                </div>

            </div>
        </div>
    </section>
  )
}
