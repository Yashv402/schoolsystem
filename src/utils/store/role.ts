import { create } from 'zustand';

type roleType = {
  role: string;
  setRole: (_role: string) => void;
};
export const useRoleStore = create<roleType>((set) => ({
  role: "",
  setRole: (currRole) => set({ role: currRole }),
}));