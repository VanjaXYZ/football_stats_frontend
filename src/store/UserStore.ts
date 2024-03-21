import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: {
    username: "",
  },
  setUsername: (username: string) =>
    set((state: any) => ({ user: { ...state.user, username: username } })),
}));
