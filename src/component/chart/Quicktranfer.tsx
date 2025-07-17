
'use client';

import Image from 'next/image';

const users = [
  { name: 'Livia Bator', role: 'CEO', image: '/image/topnavimg.png' },
  { name: 'Randy Press', role: 'Director', image: '/image/topnavimg.png' },
  { name: 'Workman', role: 'Designer', image: '/image/topnavimg.png' },
];

export default function QuickTransfer() {
  return (
    <div className="bg-white p-4 rounded shadow h-[264]">
      
      <div className="flex items-center space-x-4 overflow-x-auto pb-4">
        {users.map((user, i) => (
          <div key={i} className="flex-shrink-0 text-center">
            <Image
              src={user.image}
              alt={user.name}
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <div className="text-sm font-medium mt-2">{user.name}</div>
            <div className="text-xs text-gray-500">{user.role}</div>
          </div>
        ))}
      </div>
      <input
        type="number"
        placeholder="Write Amount"
        className="mt-4 w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
