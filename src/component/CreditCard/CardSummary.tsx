"use client";
import Image from "next/image";
import { useCardStore } from "../../lib/useCardsStore";
const MyCards = () => {
  const cards = useCardStore((state) => state.cards);

  return (
    <div>
      {cards.map((card, i) => {
        return (
          <div
            key={i}
            className={`rounded-xl p-6 w-full  shadow-md `}
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm">Balance</p>
                <p className="text-xl font-bold">{card.balance}</p>
              </div>

              <div>
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
           
            <div className="flex justify-between items-center ">
              <p className="mt-4 tracking-widest text-sm">{card.number}</p>
              

              <div className="relative w-5 h-5 ml-5 items-center">
  <div className="absolute top-0 left-0 w-5 h-5 bg-gray-500 border-gray-500 border-2  rounded-full z-10"></div>
  <div className="absolute top-0 left-3 w-5 h-5 bg-gray-500 border-gray-500 border-2 rounded-full z-10"></div>
</div>


            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyCards;




