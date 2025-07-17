import React, { useMemo } from 'react'
import Image from "next/image";
import { Bell, Menu, Settings } from 'lucide-react';
import { FiSearch } from 'react-icons/fi';
import { headerClassName } from '../chart/data';
import { usePathname } from 'next/navigation';


export default function Topbar() {

  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    const lastSegment = pathname.split("/").pop() || "Overview";
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  }, [pathname]);



  

  return (
 


<div className="w-full flex flex-col sm:flex-row items-center sm:items-center justify-between bg-white px-6 py-4 shadow-sm relative gap-4 sm:gap-0">
  {/* Title and Avatar container for mobile */}
  <div className="flex items-center justify-between w-full md:hidden mb-4">
        {/* Hamburger Menu */}
        <button className="block md:hidden">
          <Menu className="w-6 h-6 text-[#343C6A]" />
        </button>
 
    <h1 className={`text-2xl ${headerClassName} text-center w-full md:w-auto md:text-left`}>
      {pageTitle}
    </h1>
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

  {/* Title for desktop */}
  <h1 className={`text-2xl hidden sm:block ${headerClassName}`}>{pageTitle}</h1>

  {/* Right section */}
  <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
    {/* Search input */}
    <div className="flex items-center bg-[#F5F7FA] px-4 py-2 rounded-xl gap-2 text-[#B1B1B1] w-full sm:w-auto">
      <FiSearch className="text-lg text-[#718EBF]" />
      <input
        type="text"
        placeholder="Search for something"
        className="bg-transparent outline-none text-sm w-full sm:w-44 text-[#343C6A]"
      />
    </div>

    {/* Hide on small screens */}
    <div className="hidden sm:flex items-center gap-4">
      <button className="bg-[#F5F7FA] p-2 rounded-full">
        <Settings className="text-[#718EBF] w-5 h-5" />
      </button>

      <button className="bg-[#F5F7FA] p-2 rounded-full">
        <Bell className="text-[#718EBF] w-5 h-5" />
      </button>

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
</div>



)
}
