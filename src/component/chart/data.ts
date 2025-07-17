// stores/useTransactionStore.ts
import { create } from "zustand";

export type Transaction = {
  type: "credit" | "debit";
  title: string;
  date: string;
  amount: string;
  iconColor: string;
};

interface TransactionStore {
  transactions: Transaction[];
  addTransaction: (tx: Transaction) => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [
    {
      type: "debit",
      title: "Deposit from my Card",
      date: "28 January 2021",
      amount: "-$850",
      iconColor: "#FFE0E0",
    },
    {
      type: "credit",
      title: "Deposit Paypal",
      date: "25 January 2021",
      amount: "+$2,500",
      iconColor: "#DCF7E3",
    },
    {
      type: "credit",
      title: "Jemil Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      iconColor: "#DCF7E3",
    },
  ],
  addTransaction: (tx) =>
    set((state) => ({
      transactions: [tx, ...state.transactions],
    })),
}));
