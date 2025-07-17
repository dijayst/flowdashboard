import { BarChart, CreditCard, Settings, User } from "lucide-react";
import { FcDebt, FcServices } from "react-icons/fc";
import { GrTransaction } from "react-icons/gr";
import { IoHomeSharp } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

export const navItems = [
  { icon: <IoHomeSharp size={24} />, label: 'Dashboard', href: '/' },
    { icon: <GrTransaction size={24} />, label: 'Transactions', href: '/transactions' },  
    { icon: <MdAccountCircle size={24} />, label: 'Accounts', href: '/accounts' }, 
    { icon: <BarChart size={24} />, label: 'Investments', href: '#' },
  { icon: <CreditCard size={24} />, label: 'Credit Cards', href: '#' },
  { icon: <FcDebt size={24}  />, label: 'Loans', href: '#' },
  { icon: <FcServices size={24} />, label: 'Services', href: '#' },
  { icon: <User size={24} />, label: 'My Privileges', href: '#' },
  { icon: <Settings size={24} />, label: 'Settings', href: '/Settings' },
];