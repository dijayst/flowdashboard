// components/RecentTransactions.tsx
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { FC } from "react";

import { FaRegCreditCard } from "react-icons/fa";
import { SlPaypal } from "react-icons/sl";
import { useTransactionStore } from "./data";


const RecentTransactions: FC = () => {
   const transactions = useTransactionStore((state) => state.transactions);
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
   
      <ul className="space-y-4">
        {transactions.map((tx, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: tx.iconColor }}
              >
                {tx.type === "credit" ? (
                  <SlPaypal className="text-[#396AFF]" />
                ) : (
                  <FaRegCreditCard className="text-[#FFBB38]" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-[#343C6A]">{tx.title}</p>
                <p className="text-xs text-[#B1B1B1]">{tx.date}</p>
              </div>
            </div>
            <p
              className={`text-sm font-semibold ${
                tx.type === "credit" ? "text-[#41D4A8]" : "text-[#FF4B4A]"
              }`}
            >
              {tx.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
