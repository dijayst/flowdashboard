"use client";

import CardSummary from "@/component/Card/CardSummary";
import BalanceHistoryChart from "@/component/chart/BalanceHistory";
import { headerClassName } from "@/component/chart/data";
import ExpenseStatistics from "@/component/chart/ExpenseStatistics";
import QuickTransfer from "@/component/chart/Quicktranfer";
import RecentTransactions from "@/component/chart/RecentTransactions";
import WeeklyActivityChart from "@/component/chart/WeeklyActivityChart";
import Dasgb from "@/component/Topbar/Dasgb";

export default function Home() {
  return (
    <div>
      <Dasgb />
    
      <div className="flex flex-col gap-10 px-4 md:px-6 py-10">
  {/* Top Section: Cards and Transactions */}
  <div className="flex flex-col lg:flex-row gap-5">
    <div className="flex flex-col gap-5 w-full lg:w-1/3">
      <h1 className={`text-lg ${headerClassName}`}>My Cards</h1>
      <div className="w-full rounded-lg bg-gradient-to-r from-[#343C6A] to-[#343C6A]/90 text-white">
        <CardSummary />
      </div>
    </div>

    <div className="flex flex-col gap-5 w-full lg:w-1/3">
      <h1 className="text-lg">See All</h1>
      <div className="w-full rounded-lg bg-[#DFEAF2]">
        <CardSummary />
      </div>
    </div>

    <div className="flex flex-col gap-5 w-full lg:w-1/3">
      <h1 className={`text-lg ${headerClassName}`}>Recent Transaction</h1>
      <div className="bg-white rounded-lg">
        <RecentTransactions />
      </div>
    </div>
  </div>

  {/* Middle Section: Weekly Activity and Expense */}
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

  {/* Bottom Section: Quick Transfer and Balance */}
  <div className="flex flex-col lg:flex-row gap-10">
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
