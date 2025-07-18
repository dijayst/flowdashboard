"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import toast from "react-hot-toast";


export default function WeeklyActivityChart() {

  const [data, setData] = useState([]);



  const [loading, setLoading] = useState(true); 

  /*
        const baseUrl = process.env.NEXT_PUBLIC_BASE;
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await axios.get(`https://6877b1cadba809d901f08847.mockapi.io/weekly_activity`);
        setData(response.data);
      } catch (error) {
        toast.error("Failed to fetch weekly activity data.");
        console.error("Axios fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);*/
   useEffect(() => {
     const url = process.env.NEXT_PUBLIC_BASE;

    fetch("https://6877b1cadba809d901f08847.mockapi.io/weekly_activity")
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Failed to fetch data:", err));
   },[]);

  return (
     <div className="bg-white p-6 rounded-lg shadow-md w-full">
     {loading ? (
        <p>Loading  WeeklyActivity ...</p>
      ) : (
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="deposit" fill="#343C6A" />
          <Bar dataKey="withdraw" fill="#4F75FF" />
        </BarChart>
      </ResponsiveContainer>)}
    </div>
  )
}
