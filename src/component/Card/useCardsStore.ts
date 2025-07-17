

import { create } from "zustand";

export interface Card {
  balance: string;
  name: string;
  valid: string;
  number: string;
  bg: string;
  
}


interface CardState {
  cards: Card[];
  addCard: (card: Card) => void;
}

export const useCardStore = create<CardState>()((set) => ({
  cards: [
    {
      balance: "$5,756",
      name: "Eddy Cusuma",
      valid: "12/22",
      number: "3778 **** **** 1234",
      bg: "bg-gradient-to-r from-[#343C6A] to-[#343C6A]/90 text-white",
     
    },
    
  ],
  addCard: (card: Card) =>
    set((state) => ({
      cards: [...state.cards, card],
    })),
}));
