"use client";
import { Button } from "@/components/ui/button";
import { useStatsBetweenStore } from "@/store/StatsBetweenStore";
import { useRouter } from "next/navigation";

const ShowHistoryBetweenTeamsButton = () => {
  const { stats } = useStatsBetweenStore() as any;
  const router = useRouter();

  const onGetStatsBetweenTeams = async (
    country: string,
    team_1: string,
    team_2: string
  ) => {
    router.push(`home/stats_between_teams/${country}/${team_1}/${team_2}`);
  };

  return (
    stats.homeTeam && (
      <Button
        onClick={() =>
          onGetStatsBetweenTeams(stats.country, stats.homeTeam, stats.awayTeam)
        }
      >
        Show
      </Button>
    )
  );
};

export default ShowHistoryBetweenTeamsButton;
