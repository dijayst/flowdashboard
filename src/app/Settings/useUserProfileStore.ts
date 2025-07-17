
import { create } from 'zustand';

export interface UserProfile {
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
}




type UserState = {
  profile: UserProfile;
  updateProfile: (data: Partial<UserProfile>) => void;
};

export const useUserStore = create<UserState>((set) => ({
  profile: {
    name: '',
    username: '',
    email: '',
    password: '',
    dob: '',
    presentAddress: '',
    permanentAddress: '',
    city: '',
    postalCode: '',
    country: '',
  },
  updateProfile: (data) =>
    set((state) => ({
      profile: { ...state.profile, ...data },
    })),
}));
