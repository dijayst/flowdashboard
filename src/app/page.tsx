"use client";

import QuickTransfer from "@/component/Card/Quicktranfer";
import RecentTransactions from "@/component/Card/RecentTransactions";
import BalanceHistoryChart from "@/component/Chart/BalanceHistory";
import ExpenseStatistics from "@/component/Chart/ExpenseStatistics";
import WeeklyActivityChart from "@/component/Chart/WeeklyActivityChart";
import CardSummary from "@/component/CreditCard/CardSummary";
import { headerClassName } from "@/component/lib/data";
import Topbar from "@/component/Topbar/Topbar";



export default function Home() {
  return (
    <div>
      <Topbar/>
    
      <div className="flex flex-col gap-10 px-4 md:px-6 py-10">
  

<div className="flex flex-col gap-5 lg:flex-row">
  <div className="flex flex-col gap-3 w-full lg:w-2/3">
   <div className="flex justify-between items-center px-1">
      <h1 className={`text-xl ${headerClassName}`}>My Cards</h1>
      <h1 className="text-base font-semibold text-[#343C6A]">See All</h1>
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

  <div className="flex flex-col gap-4 w-full lg:w-1/3">
    <h1 className={`text-xl ${headerClassName}`}>Recent Transaction</h1>
    <div className="bg-white rounded-lg">
      <RecentTransactions />
    </div>
  </div>
</div>



  <div className="flex flex-col lg:flex-row gap-5">
    <div className="w-full lg:w-2/3">
      <h1 className={`mb-4 text-xl ${headerClassName}`}>Weekly Activity</h1>
      <WeeklyActivityChart />
    </div>
    <div className="w-full lg:w-1/3">
      <h1 className={`mb-4 text-xl ${headerClassName}`}>Expense Statistics</h1>
      <ExpenseStatistics />
    </div>
  </div>

  <div className="flex flex-col lg:flex-row gap-5">
    <div className="w-full lg:w-2/5">
      <h1 className={`text-xl mb-4 ${headerClassName}`}>Quick Transfer</h1>
      <QuickTransfer />
    </div>
    <div className="w-full lg:w-3/5">
      <h1 className={`text-xl mb-4 ${headerClassName}`}>Balance History</h1>
      <BalanceHistoryChart />
    </div>
  </div>
</div>

    </div>
  );
}
