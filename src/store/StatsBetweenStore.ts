import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

let dataFromLocalStorage: any = global?.localStorage?.getItem("stats");

export const useStatsBetweenStore = create(
  persist(
    (set) => ({
      stats: {
        country: dataFromLocalStorage?.state?.stats?.country || "",
        homeTeam: dataFromLocalStorage?.state?.stats?.homeTeam || "",
        awayTeam: dataFromLocalStorage?.state?.stats?.awayTeam || "",
      },

      setCountry: (country: any) =>
        set((state: any) => ({ stats: { ...state.stats, country: country } })),
      setHomeTeam: (team: any) =>
        set((state: any) => ({ stats: { ...state.stats, homeTeam: team } })),
      setAwayTeam: (team: any) =>
        set((state: any) => ({ stats: { ...state.stats, awayTeam: team } })),
    }),
    {
      name: "stats",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
