import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

let dataFromLocalStorage: any =
  global?.localStorage?.getItem("singleTeamStats");

export const useSingleTeamStats = create(
  persist(
    (set) => ({
      singleTeamStats: {
        country: dataFromLocalStorage?.state?.singleTeamStats?.country || "",
        team: dataFromLocalStorage?.state?.singleTeamStats?.team || "",
      },

      setSingleTeamCountry: (country: string) =>
        set((state: any) => ({
          singleTeamStats: { ...state.singleTeamStats, country: country },
        })),
      setSingleTeam: (team: string) =>
        set((state: any) => ({
          singleTeamStats: { ...state.singleTeamStats, team: team },
        })),
    }),
    {
      name: "single-team-stats",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
