"use client";
import React, { useEffect, useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';



export default function WeeklyActivityChart() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6877b1cadba809d901f08847.mockapi.io/weekly_activity")
      .then(res => res.json())
      .then(setData)
      .catch(err => console.error("Failed to fetch data:", err));
  }, []);
  return (
     <div className="bg-white p-6 rounded-lg shadow-md w-full">
     
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="deposit" fill="#343C6A" />
          <Bar dataKey="withdraw" fill="#4F75FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
