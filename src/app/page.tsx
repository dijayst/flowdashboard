"use client";

import CardSummary from "@/component/Card/CardSummary";
import BalanceHistoryChart from "@/component/chart/BalanceHistory";
import ExpenseStatistics from "@/component/chart/ExpenseStatistics";
import QuickTransfer from "@/component/chart/Quicktranfer";
import RecentTransactions from "@/component/chart/RecentTransactions";
import WeeklyActivityChart from "@/component/chart/WeeklyActivityChart";
import Dasgb from "@/component/Topbar/Dasgb";

export default function Home() {
  return (
    <div>
      <Dasgb />
    
      <div className="flex flex-col gap-10 px-6 py-10">
        <div className="flex gap-5 ">
          <div className="flex gap-5 flex-col  w-[33%] ">
            <h1 className="text-lg font-semibold text-[#343C6A]">My Cards</h1>
            <div className="w-full rounded-b-md ">
              <CardSummary/>
            </div>
          </div>
          <div className="flex gap-5 flex-col   w-[33%]">
            <h1 className="items-end">See All</h1>
            <div className="w-full rounded-b-md bg-[#DFEAF2] ">
              <CardSummary/>
            </div>
           
          </div>
          <div className="flex gap-5 flex-col  w-[33%]">
            <h1 className="text-lg font-semibold text-[#343C6A]">Recent Transaction</h1>
            <div className="bg-[#FFFFFF] rounded-lg"><RecentTransactions/></div>
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="w-[70%]  "><h1 className="text-lg font-semibold mb-4 text-[#343C6A]">Weekly Activity</h1>
          <WeeklyActivityChart/></div>
          <div className=" w-[33%]"><h1 className="text-lg font-semibold text-[#343C6A] mb-4">Expense Statistics</h1>
            <ExpenseStatistics />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-[40%]  "><h1>Quick Transfer</h1>
          <QuickTransfer/>
          </div>
          <div className="w-[60%]  "><h1>Balance History</h1>
          <BalanceHistoryChart/>
          </div>
        </div>
      </div>
    </div>
  );
}
