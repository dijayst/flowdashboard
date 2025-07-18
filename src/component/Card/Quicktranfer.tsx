
'use client';

import { Send } from 'lucide-react';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavbarStore } from '../Navbar/useNavbarStore';

const users = [
  { name: 'Livia Bator', role: 'CEO', image: '/image/first.png' },
  { name: 'Randy Press', role: 'Director', image: '/image/secoimg.png' },
  { name: 'Workman', role: 'Designer', image: '/image/thirdimg.png' },
];

export default function QuickTransfer() {

  
      const search = useNavbarStore((state) => state.search.toLowerCase());
  
    const filteredusers = users.filter((tx) =>
      tx.name.toLowerCase().includes(search) || tx.role.toLowerCase().includes(search)
    );
  return (
   <div className="bg-white p-4 rounded shadow h-[235]">
<div className='flex justify-between'>
      <div className="flex items-center space-x-4 overflow-x-auto pb-4 gap-10">
        {filteredusers.map((user, i) => (
          
          <div key={i} className="flex-shrink-0 text-center ">
            <Image
              src={user.image}
              alt={user.name}
              width={60}
              height={60}
              className="rounded-full object-cover" />
            <div className="text-sm font-medium mt-2">{user.name}</div>
            <div className="text-xs text-gray-500">{user.role}</div>

          </div>
          
        ))}
      </div>
      <IoIosArrowForward className="text-[#B1B1B1] mt-16" />
          
      </div>
      
   <div className="flex items-center bg-[#f1f5fb] rounded-full px-2 py-1 w-fit ">
      <div className="text-sm text-gray-400 ml-2">Write Amount</div>
      <input
        type="text"
        value="525.50"
        readOnly
        className="bg-transparent text-[#9db0d2] text-sm px-3 outline-none w-20"
      />
      <button className="flex items-center gap-1 bg-black text-white rounded-full px-4 py-2 text-sm">
        Send
        <Send size={14} />
      </button>
    </div>
    </div>
    
   
  );
}
