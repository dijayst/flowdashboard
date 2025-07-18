'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface BalanceData {
  date: string;
  balance: number;
}

export default function BalanceHistoryChart() {
  const [data, setData] = useState<BalanceData[]>([]);

 
const [loading, setLoading] = useState(false); 


const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="bg-white p-4 rounded shadow">
    {loading ? (
        <p>Loading  WeeklyActivity ...</p>
      ) : data.length === 0 ? (
  <p>No data available</p>
) : (
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>)}
    </div>
  );
}
