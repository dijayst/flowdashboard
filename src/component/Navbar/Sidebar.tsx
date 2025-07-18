'use client';

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "./Sidedata";


const Sidebar = () => {
  const pathname = usePathname();


  return (
    
  <aside className="w-64 h-[150vh]  bg-white shadow px-10 flex flex-col gap-10 ">
      
      <div className="flex items-center space-x-2 text-[#163546] pt-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/image/Group.png"
                alt="Logo"
              
                width={18}
                height={100}
              />
              <p className="font-extrabold font-inter text-3xl text-[#343C6A]">
                Flow
              </p>
            </Link>
          </div>
      <nav className="flex flex-col gap-8 ">
        {navItems.map((item, i) => {
        const isActive = pathname === item.href;
          return (

          <Link key={i} href={item.href} 
       
          className={`flex items-center gap-5 text-lg  font-medium ${
                isActive ? 'text-[#232323] font-medium text-lg' : 'text-[#B1B1B1] hover:text-[#232323] text-lg font-medium'
              }`}
          >
            {item.icon} {item.label}
          </Link>
        )})}
      </nav>
    </aside>
    
  );
};

export default Sidebar;