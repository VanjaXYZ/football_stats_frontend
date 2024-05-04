"use client";
import { Button } from "@/components/ui/button";
import { useStatsBetweenStore } from "@/store/StatsBetweenStore";
import Link from "next/link";
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
      <Button asChild>
        <Link
          href={`home/stats_between_teams?country=${stats.country}&home-team=${stats.homeTeam}&away-team=${stats.awayTeam}`}
          target="_blank"
        >
          Show
        </Link>
      </Button>
    )
  );
};

export default ShowHistoryBetweenTeamsButton;
