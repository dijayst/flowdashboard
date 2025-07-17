import React from 'react'
import Image from "next/image";
import { Bell, Settings } from 'lucide-react';
import { FiSearch } from 'react-icons/fi';
export default function Topbar() {
  return (
 <div className="w-full flex items-center justify-between bg-white px-6 py-4 shadow-sm">
      {/* Left: Page Title */}
      <h1 className="text-2xl font-semibold text-[#343C6A]">Overview</h1>

      {/* Right: Search, Icons, Avatar */}
      <div className="flex items-center gap-4">
        {/* Search Box */}
        <div className="flex items-center bg-[#F5F7FA] px-4 py-2 rounded-xl gap-2 text-[#B1B1B1]">
          <FiSearch className="text-lg text-[#718EBF]" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent outline-none text-sm w-44 text-[#343C6A]"
          />
        </div>

        {/* Settings */}
        <button className="bg-[#F5F7FA] p-2 rounded-full">
          <Settings className="text-[#718EBF] w-5 h-5" />
        </button>

        {/* Notifications */}
        <button className="bg-[#F5F7FA] p-2 rounded-full">
          <Bell className="text-[#718EBF] w-5 h-5" />
        </button>

        {/* Profile Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#F5F7FA]">
          <Image
            src="/image/topnavimg.png" 
            alt="User Avatar"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>   
)
}
