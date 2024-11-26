import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

let dataFromLocalStorage: any = global?.localStorage?.getItem("stats");

export const useOtherStats = create(
  persist(
    (set) => ({
      otherStats: {
        country: dataFromLocalStorage?.state?.otherStats?.country || "",
        activeUrl: dataFromLocalStorage?.state?.otherStats?.activeUrl || "",
        overallData: dataFromLocalStorage?.state?.otherStats?.overallData || "",
      },

      setOtherStatsCountry: (country: string) =>
        set((state: any) => ({
          otherStats: { ...state.otherStats, country: country },
        })),
      setOverallData: (data: any) =>
        set((state: any) => ({
          otherStats: { ...state.otherStats, overallData: data },
        })),
      setActiveUrl: (url: string) =>
        set((state: any) => ({
          otherStats: { ...state.otherStats, activeUrl: url },
        })),
    }),
    {
      name: "other-stats",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
