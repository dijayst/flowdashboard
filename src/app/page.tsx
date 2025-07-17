"use client";

import CardSummary from "@/component/Card/CardSummary";
import BalanceHistoryChart from "@/component/chart/BalanceHistory";
import { headerClassName } from "@/component/chart/data";
import ExpenseStatistics from "@/component/chart/ExpenseStatistics";
import QuickTransfer from "@/component/chart/Quicktranfer";
import RecentTransactions from "@/component/chart/RecentTransactions";
import WeeklyActivityChart from "@/component/chart/WeeklyActivityChart";
import Dasgb from "@/component/Topbar/Dashboard";
import Topbar from "@/component/Topbar/Topbar";

export default function Home() {
  return (
    <div>
      <Topbar/>
    
      <div className="flex flex-col gap-10 px-4 md:px-6 py-10">
  

<div className="flex flex-col gap-5 lg:flex-row">
  {/* Cards Section with Horizontal Scroll on Mobile */}
  <div className="flex flex-col gap-3 w-full lg:w-2/3">
    {/* My Cards & See All Titles in a row */}
    <div className="flex justify-between items-center px-1">
      <h1 className={`text-lg ${headerClassName}`}>My Cards</h1>
      <h1 className="text-lg">See All</h1>
    </div>

  
    <div className="flex gap-4 overflow-x-auto no-scrollbar">
      
      <div className="min-w-[250px] md:w-full rounded-lg bg-gradient-to-r from-[#343C6A] to-[#343C6A]/90 text-white">
        <CardSummary />
      </div>
      
      <div className="min-w-[250px] md:w-full rounded-lg bg-[#DFEAF2]">
        <CardSummary />
      </div>
     
    </div>
  </div>

  <div className="flex flex-col gap-5 w-full lg:w-1/3">
    <h1 className={`text-lg ${headerClassName}`}>Recent Transaction</h1>
    <div className="bg-white rounded-lg">
      <RecentTransactions />
    </div>
  </div>
</div>



  <div className="flex flex-col lg:flex-row gap-5">
    <div className="w-full lg:w-2/3">
      <h1 className={`mb-4 text-lg ${headerClassName}`}>Weekly Activity</h1>
      <WeeklyActivityChart />
    </div>
    <div className="w-full lg:w-1/3">
      <h1 className={`mb-4 text-lg ${headerClassName}`}>Expense Statistics</h1>
      <ExpenseStatistics />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row gap-5">
    <div className="w-full lg:w-2/5">
      <h1 className={`text-lg mb-4 ${headerClassName}`}>Quick Transfer</h1>
      <QuickTransfer />
    </div>
    <div className="w-full lg:w-3/5">
      <h1 className={`text-lg mb-4 ${headerClassName}`}>Balance History</h1>
      <BalanceHistoryChart />
    </div>
  </div>
</div>

    </div>
  );
}
