"use client";

import React, { useState } from "react";
import Image from "next/image";
import Topbar from "@/Component/Topbar/Topbar";
import { SettingForm } from "@/Component/Form/Settingform";
export default function page() {

  const [activeTab, setActiveTab] = useState("Edit Profile");


  return (
    <div>
      <Topbar />
      
<div className="px-4 py-10 md:px-10">
  <div className="bg-white rounded-md p-6 md:p-10">
    {/* Tabs */}
    <div className="flex flex-wrap gap-4 border-b  border-gray-200 mb-6">
      {["Edit Profile", "Preferences", "Security"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 text-base font-semibold ${
            activeTab === tab
              ? "border-b-2 border-[#343C6A] text-[#232323] "
              : "text-[#718EBF]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

  
    {activeTab === "Edit Profile" && (
      <div className="flex flex-col md:flex-row gap-5">
    
        <div className="w-22 h-20 rounded-full overflow-hidden border-2 border-[#F5F7FA] mx-auto md:mx-0">
          <Image
            src="/image/topnavimg.png"
            alt="User Avatar"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
<SettingForm/>
      </div>
    )}

    {/* Other Tabs */}
    {activeTab === "Preferences" && (
      <div className="text-[#343C6A]">Preferences content goes here...</div>
    )}
    {activeTab === "Security" && (
      <div className="text-[#343C6A]">Security content goes here...</div>
    )}
  </div>
</div>


      
    </div>
  );
}
