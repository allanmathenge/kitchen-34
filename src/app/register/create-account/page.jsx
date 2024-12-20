"use client"

import React, { useState } from "react"
import Link from "next/link";

  export default function CreateAccount() {

    const [formData, setFormData] = useState({name:"", email:"", password:""})
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("") // Clear any previous messages

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })
            const data = res.json()

            if (res.ok) {
                setMessage(data.message)
            } else {
                setMessage(data.message || "An error occurred!")
            }

        } catch (err) {
            console.error("Error:", err)
            setMessage("An error occurred! Failed to Register")
        }
    }

  return (
    <section className="min-h-screen w-full bg-white">
        <div className="border-b border-slate-200">
        <h1 className="sm:text-3xl tracking-tighter font-black text-red-600 m-0 text-xl text-center py-4">Kitchen-34</h1>
        <form 
            className="sm:w-96 w-[80%] h-[70vh] bg-white border shadow mx-auto rounded p-4 flex flex-col justify-between gap-3 mb-6"
            // OnSubmit
            onSubmit={handleSubmit}
        >
            <h1 className="text-xl font-medium">Create Account</h1>

            <label htmlFor="name" className="text-[12px] font-medium">
                Your name
                <input 
                    type="text" 
                    className="w-full border border-slate-300 shadow focus:shadow-md outline-none text-[12px] p-1 rounded-sm" 
                    placeholder="Your first and lastname"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="email" className="text-[12px] font-medium">
                Your Email
                <input 
                    type="text" 
                    className="w-full border border-slate-300 shadow focus:shadow-md outline-none text-[12px] p-1 rounded-sm" 
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="password" className="text-[12px] font-medium">
                Password
                <input 
                    type="password" 
                    className="w-full border border-slate-300 shadow focus:shadow-md outline-none text-[12px] p-1 rounded-sm" 
                    placeholder="Enter password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                />
            </label>

            <label htmlFor="password" className="text-[12px] font-medium">
                Re-enter Password
                <input 
                    type="text" 
                    className="w-full border border-slate-300 shadow focus:shadow-md outline-none text-[12px] p-1 rounded-sm" 
                    placeholder="Re-enter your password"
                />
            </label>

            <button className="w-full px-auto p-[0.5] border bg-[#FFD700] rounded-md text-sm md:text-xl text-black/70 font-medium">Continue</button>

            <p className="text-[10px]">By creating an account, you agree our Conditions of use and privacy notice</p>
            <p className="text-[10px]">Already have an account? <Link href="/sign-in" className="text-blue-600">Sign in</Link></p>

        </form>
        {message && <p className="text-red-800">{message}</p>}
        </div>
    </section>
  )
}
