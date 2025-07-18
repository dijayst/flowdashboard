"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Bell, Menu, Settings } from "lucide-react";
import { FiSearch } from "react-icons/fi";

import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";
import Link from "next/link";



import { headerClassName } from "../lib/data";
import { navItems } from "../Navbar/Sidedata";
import { useNavbarStore } from "../Navbar/useNavbarStore";

export default function Topbar() {
  const { search, setSearch } = useNavbarStore();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    const lastSegment = pathname.split("/").pop() || "Overview";
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  }, [pathname]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="w-full flex flex-col sm:flex-row items-center sm:items-center justify-between bg-white px-6 py-6 shadow-sm relative gap-4 sm:gap-0">
        {/* Title and Avatar container for mobile */}
        <div className="flex items-center justify-between w-full md:hidden mb-4">
          {/* Hamburger Menu */}
          <button className="block md:hidden" onClick={toggleSidebar}>
            <Menu className="w-6 h-6 text-[#343C6A]" />
          </button>

          <h1
            className={`text-2xl ${headerClassName} text-center w-full md:w-auto md:text-left`}
          >
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
        <h1 className={`text-2xl hidden sm:block ${headerClassName}`}>
          {pageTitle}
        </h1>

        {/* Right section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Search input */}
          <div className="flex items-center bg-[#F5F7FA] px-4 py-2 rounded-xl gap-2 text-[#B1B1B1] w-full sm:w-auto">
            <FiSearch className="text-lg text-[#718EBF]" />
            <input
              type="text"
              placeholder="Search for something"
              value={search}
              onChange={handleSearchChange}
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

      {sidebarOpen && (
        <div className="fixed inset-0 z-40  bg-opacity-50 md:hidden">
          <div className="w-64 bg-white h-full shadow-lg p-4">
            {/* Your sidebar content goes here */}
            <button className="text-sm " onClick={toggleSidebar}>
              <IoClose size={40} />
            </button>
            <div className="px-10">
              <div className="flex items-center space-x-2 text-[#163546] py-10">
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
                    <Link
                      key={i}
                      href={item.href}
                      className={`flex items-center gap-5 ${
                        isActive
                          ? "text-[#232323] font-semibold"
                          : "text-[#B1B1B1] hover:text-[#232323]"
                      }`}
                    >
                      {item.icon} {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
