"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import toast from "react-hot-toast";


const COLORS = ["#FF8042", "#0088FE", "#00C49F", "#FFBB28"];

const ExpenseStatistics = () => {
  const [data, setData] = useState([]);
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://6877b1cadba809d901f08847.mockapi.io/statistic"
        );
        setData(response.data);
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error("Failed to fetch statistics.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);


  return (
    <div className="bg-white p-4 rounded-lg shadow w-full h-[300px]">
     {loading ? (
        <p>Loading Expense statistics...</p>
      ) : (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>)}
    </div>
  );
};

export default ExpenseStatistics;
