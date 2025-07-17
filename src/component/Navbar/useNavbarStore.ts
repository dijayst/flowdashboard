// store/useNavbarStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type NavbarState = {
  search: string;
  setSearch: (value: string) => void;

  
};

export const useNavbarStore = create<NavbarState>((set) => ({
  search: '',
  setSearch: (value) => set({ search: value }),

 
}));


type User = {
  email: string;
  firstName?: string;
  role?: string;
};

type AuthStore = {
  isLoggedIn: boolean;
  currentUser: User | null;
  setIsLoggedIn: (status: boolean) => void;
  setCurrentUser: (user: User | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      currentUser: null,
      setIsLoggedIn: (status) => set({ isLoggedIn: status }),
      setCurrentUser: (user) => set({ currentUser: user }),
      logout: async () => {
        const url = process.env.NEXT_PUBLIC_BASE_URL;
        await fetch(`${url}/logout`, { method: 'POST', credentials: 'include' });

        set({ isLoggedIn: false, currentUser: null });

        if (typeof window !== 'undefined') {
          const router = require('next/navigation').useRouter();
          router.push('/');
        }
      },
    }),
    {
      name: 'auth-storage', // stored in localStorage
    }
  )
);




