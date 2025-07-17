import { create } from 'zustand';

type UIStore = {
  isOpen: boolean;
  showSearch: boolean;
  toggleMenu: () => void;
  toggleSearch: () => void;
  closeMenu: () => void;
  closeSearch: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
  isOpen: false,
  showSearch: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
  toggleSearch: () => set((state) => ({ showSearch: !state.showSearch })),
  closeMenu: () => set({ isOpen: false }),
  closeSearch: () => set({ showSearch: false }),
}));
