'use client';

import React from "react";

import Link from "next/link";
import {  IoHomeSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { MdAccountCircle } from "react-icons/md";
import { FcDebt, FcServices } from "react-icons/fc";
import { BarChart, CreditCard, Settings, User } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const navItems = [
  { icon: <IoHomeSharp size={24} />, label: 'Dashboard', href: '/' },
    { icon: <GrTransaction size={24} />, label: 'Transactions', href: '/transactions' },  
    { icon: <MdAccountCircle size={24} />, label: 'Accounts', href: '/accounts' }, 
    { icon: <BarChart size={24} />, label: 'Investments', href: '#' },
  { icon: <CreditCard size={24} />, label: 'Credit Cards', href: '#' },
  { icon: <FcDebt size={24} />, label: 'Loans', href: '#' },
  { icon: <FcServices size={24} />, label: 'Services', href: '#' },
  { icon: <User size={24} />, label: 'My Privileges', href: '#' },
  { icon: <Settings size={24} />, label: 'Settings', href: '/Settings' },
];



  return (
    
 
  <aside className="w-64 h-screen bg-white shadow px-10 flex flex-col gap-10">
      
      <div className="flex items-center space-x-2 text-[#163546] pt-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/image/Group.png"
                alt="Logo"
              
                width={18}
                height={100}
              />
              <p className="font-bold font-inter text-2xl text-[#343C6A]">
                Flow
              </p>
            </Link>
          </div>
      <nav className="flex flex-col gap-8">
        {navItems.map((item, i) => {
        const isActive = pathname === item.href;
          return (

          <Link key={i} href={item.href} 
       
          className={`flex items-center gap-5 ${
                isActive ? 'text-[#232323] font-semibold' : 'text-[#B1B1B1] hover:text-[#232323]'
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