"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#FF8042", "#0088FE", "#00C49F", "#FFBB28"];

const ExpenseStatistics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://6877b1cadba809d901f08847.mockapi.io/statistic")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full h-[300px]">
     
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
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseStatistics;
