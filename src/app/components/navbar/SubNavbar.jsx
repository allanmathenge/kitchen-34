import React from "react"
import { FaRegBell, FaRegHeart } from "react-icons/fa"
import { FaRegMessage } from "react-icons/fa6"
import { GrAnnounce } from "react-icons/gr"
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";

export default function SubNavbar() {
  return (
    <section className="py-2 sm:py-4">
      <div className="h-[40px] flex justify-between gap-1 sm:gap-5 items-center">

      <div className="hidden sm:flex flex-1 text-xl text-white/80 tracking-tighter items-center cursor-pointer gap-1 text-nowrap h-full bg-red-600 hover:bg-red-500 font-bold overflow-hidden hover:text-white rounded-sm"><GrAnnounce className="ml-2"/>Offers & Promotions</div>

        <div className="sm:flex-1 flex-auto h-[40px] relative">
          <input 
            type="text" 
            placeholder="Search products..."
            className="w-full h-full px-7 border border-slate-400 focus:border-2 focus:border-slate-400 focus:outline-none rounded-sm"
          />

          <div className="ml-1 -mt-7">
            <IoSearchOutline className="text-xl" />
          </div>

          <div className=" absolute w-8 text-white bg-red-600 h-full right-0 top-0 flex justify-center items-center rounded-tr-sm rounded-br-sm hover:bg-red-500">
            <MdKeyboardVoice className="text-xl cursor-pointer " />
          </div>
        </div>
        
        <div className="flex-1 ">
          <div className="flex justify-end gap-1 sm:gap-3 text-[12px] sm:text-xl">
            <p className="text-xl text-slate-600 font-medium hidden sm:flex justify-end text-nowrap">+254 798769535</p>
            <div className="cursor-pointer text-red-400 w-[24px] h-[24px] relative flex justify-center items-center">
                <FaRegHeart className="" />
                <p className="bg-red-500 text-white absolute text-[12px] h-[14px] w-[14px] top-0 right-0 z-10 rounded-full flex justify-center items-center">1</p>
            </div>
            <div className="cursor-pointer text-red-400 w-[24px] h-[24px] relative flex justify-center items-center">
                <FaRegBell className="" />
                <p className="bg-red-500 text-white absolute text-[12px] h-[14px] w-[14px] top-0 right-0 z-10 rounded-full flex justify-center items-center">2</p>
            </div>
            <div className="cursor-pointer text-red-400 w-[24px] h-[24px] relative flex justify-center items-center">
                <FaRegMessage className="" />
                <p className="bg-red-500 text-white absolute text-[12px] h-[14px] w-[14px] top-0 right-0 z-10 rounded-full flex justify-center items-center">1</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
