import { create } from "zustand";

export const useStatsBetweenStore = create((set) => ({
  stats: {
    country: "",
    homeTeam: "",
    awayTeam: "",
  },

  setCountry: (country: string) =>
    set((state: any) => ({ stats: { ...state.stats, country: country } })),
  setHomeTeam: (team: string) =>
    set((state: any) => ({ stats: { ...state.stats, homeTeam: team } })),
  setAwayTeam: (team: string) =>
    set((state: any) => ({ stats: { ...state.stats, awayTeam: team } })),
}));
