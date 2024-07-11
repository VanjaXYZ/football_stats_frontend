import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

let dataFromLocalStorage: any = global?.localStorage?.getItem("eloRating");

export const useEloRatingStore = create(
  persist(
    (set) => ({
      eloRating: {
        country: dataFromLocalStorage?.state?.stats?.country || "",
      },

      setCountry: (country: any) =>
        set((state: any) => ({ stats: { ...state.stats, country: country } })),
    }),
    {
      name: "eloRating",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
