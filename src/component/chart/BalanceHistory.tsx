'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

interface BalanceData {
  date: string;
  balance: number;
}

export default function BalanceHistoryChart() {
  const [data, setData] = useState<BalanceData[]>([]);

  useEffect(() => {
    // Mock API call
    const fetchData = async () => {
      const url = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${url}/history`);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
     
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
