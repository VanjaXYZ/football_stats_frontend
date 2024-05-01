"use client";
import { Button } from "@/components/ui/button";
import { useStatsBetweenStore } from "@/store/StatsBetweenStore";
import { useRouter } from "next/navigation";
import { getStatsBetweenTeams } from "../../../../routes/Stats_Between_Teams/routes";

const ShowHistoryBetweenTeamsButton = () => {
  const { stats } = useStatsBetweenStore() as any;
  const router = useRouter();

  const onGetStatsBetweenTeams = async (
    country: string,
    team_1: string,
    team_2: string
  ) => {
    const response = await getStatsBetweenTeams(country, team_1, team_2);
    console.log("Response: ", team_1);
    console.log("Response: ", team_2);
    console.log("Response: ", country);
    return response;
  };

  return (
    stats.homeTeam && (
      <Button
        onClick={() =>
          onGetStatsBetweenTeams(
            stats.country.country,
            stats.homeTeam,
            stats.awayTeam
          )
        }
      >
        Show
      </Button>
    )
  );
};

export default ShowHistoryBetweenTeamsButton;
