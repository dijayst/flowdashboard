// stores/useProfileStore.ts
import { create } from "zustand";

interface ProfileState {
  name: string;
  username: string;
  email: string;
  password: string;
  dob: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  updateProfile: (data: Partial<ProfileState>) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  name: "Charlene Reed",
  username: "Charlene Reed",
  email: "charlenereed@gmail.com",
  password: "********",
  dob: "25 January 1990",
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
  updateProfile: (data) => set((state) => ({ ...state, ...data })),
}));
