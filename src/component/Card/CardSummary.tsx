
"use client";
import Image from "next/image";

import { useCardStore } from "./useCardsStore";



const MyCards = () => {
  const cards = useCardStore((state) => state.cards);

  return (
    
      
     
         <div >
        {cards.map((card, i) =>
         {
    
    return (
          <div
            key={i}
            className={`rounded-xl p-6 w-full  ${card.bg} shadow-md`}
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm">Balance</p>
                <p className="text-xl font-bold">{card.balance}</p>
              </div>
              
            <div >
                      <Image
                        src="/image/Chip_Card.png" 
                        alt="User Avatar"
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
            </div>
<div className="flex justify-between">
            <div className="mb-4">
              <p className="text-xs">CARD HOLDER</p>
              <p className="font-semibold text-sm">{card.name}</p>
            </div>

            <div className="mb-4">
              <p className="text-xs">VALID THRU</p>
              <p className="font-semibold text-sm">{card.valid}</p>
            </div>
            </div>
            <div className="flex justify-between">
               <p className="mt-4 tracking-widest text-sm">{card.number}</p>
<div className="flex"><div className="w-5 h-5 border-2 bg-gray-500 rounded-full ml-5"></div><div className="w-5 h-5 border-2 bg-gray-500 rounded-full"></div></div>
</div>
           
          </div>
        );
  })}
      </div>
        
       
      

     
   
  );
};

export default MyCards;
