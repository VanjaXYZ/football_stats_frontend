import { create } from "zustand";

export const useOtherStats = create((set) => ({
  otherStats: {
    country: "",
  },

  setOtherStatsCountry: (country: string) =>
    set((state: any) => ({
      otherStats: { ...state.otherStats, country: country },
    })),
}));
