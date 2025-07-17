"use client";

import Topbar from "@/component/Topbar/Topbar";
import React, { useState } from "react";
import Image from "next/image";
import { UserProfile, useUserStore } from "./useUserProfileStore";
import { useForm } from "react-hook-form";

export default function page() {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const { profile, updateProfile } = useUserStore();
  const { register, handleSubmit, reset } = useForm<UserProfile>({
    defaultValues: profile,
  });

  const onSubmit = (data: UserProfile) => {
    updateProfile(data);
    console.log("Saved:", data);
  };

  return (
    <div>
      <Topbar />
      <div className=" p-10">
        <div className="bg-white rounded-md p-10">
          <div className="flex space-x-6 border-b border-gray-200 mb-6">
            {["Edit Profile", "Preferences", "Security"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium ${
                  activeTab === tab
                    ? "border-b-2 border-[#343C6A] text-[#343C6A]"
                    : "text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          {activeTab === "Edit Profile" && (
            <div className="flex gap-5 ">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#F5F7FA] ">
                <Image
                  src="/image/topnavimg.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" grid grid-cols-1 md:grid-cols-2 gap-6 "
              >
                {[
                  {
                    label: "Your Name",
                    name: "name",
                    placeholder: "Charlene Reed",
                  },
                  {
                    label: "User Name",
                    name: "username",
                    placeholder: "Charlene Reed",
                  },
                  {
                    label: "Email",
                    name: "email",
                    type: "email",
                    placeholder: "charlenereed@gmail.com",
                  },
                  {
                    label: "Password",
                    name: "password",
                    type: "password",
                    placeholder: "********",
                  },
                  {
                    label: "Date of Birth",
                    name: "dob",
                    type: "date",
                    placeholder: "1990-01-25",
                  },
                  {
                    label: "Present Address",
                    name: "presentAddress",
                    placeholder: "San Jose, California, USA",
                  },
                  {
                    label: "Permanent Address",
                    name: "permanentAddress",
                    placeholder: "San Jose, California, USA",
                  },
                  { label: "City", name: "city", placeholder: "San Jose" },
                  {
                    label: "Postal Code",
                    name: "postalCode",
                    placeholder: "45962",
                  },
                  { label: "Country", name: "country", placeholder: "USA" },
                ].map(({ label, name, type, placeholder = "text" }) => (
                  <div key={name} className="flex flex-col ">
                    <label className="text-sm text-[#B1B1B1] mb-1">
                      {label}
                    </label>
                    <input
                      type={type}
                      {...register(name as keyof UserProfile)}
                      placeholder={placeholder}
                      className="w-full px-4 py-2 rounded-md border border-gray-200 bg-[#F5F7FA] text-[#343C6A] focus:outline-none focus:ring-1 focus:ring-[#343C6A]"
                    />
                  </div>
                ))}

                <div className="col-span-2 flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 "
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === "Preferences" && (
            <div className="text-[#343C6A]">
              Preferences content goes here...
            </div>
          )}

          {activeTab === "Security" && (
            <div className="text-[#343C6A]">Security content goes here...</div>
          )}
        </div>
      </div>
    </div>
  );
}
