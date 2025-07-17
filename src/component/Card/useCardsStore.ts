

import { create } from "zustand";

export interface Card {
  balance: string;
  name: string;
  valid: string;
  number: string;
 
  
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
     
    },
    
  ],
  addCard: (card: Card) =>
    set((state) => ({
      cards: [...state.cards, card],
    })),
}));
