"use client";
import { getStatsBetweenTeams } from "@/app/routes/Stats_Between_Teams/routes";
import { useStatsBetweenStore } from "@/store/StatsBetweenStore";
import React, { useEffect, useState } from "react";
import TableComponent from "../../(shared)/TableComponent";
import TeamVsTeamHeader from "./TeamVsTeamHeader";
import TeamVsTeamStats from "./TeamVsTeamStats";
import { TableLoading } from "../../(shared)/Loaders";
import HeroSection from "../../(shared)/HeroSection";

const StatsBetweenTeams = () => {
  const { stats } = useStatsBetweenStore() as any;
  const [teamsScore, setTeamsScore] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        const getStats = await getStatsBetweenTeams(
          stats?.country,
          stats?.homeTeam,
          stats?.awayTeam
        );
        setTeamsScore([getStats]);
        setIsLoading(false);
      } catch (error) {
        // Handle error if necessary
        setIsLoading(false);
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, [stats?.country, stats?.homeTeam, stats?.awayTeam]);
  const topTableData = [
    {
      key: "game_number",
      header: "Game number",
      Component: (item: any) => <span>{item?.game_number}</span>,
    },
    {
      key: "home_wins",
      header: "Home wins",
      Component: (item: any) => <span>{item?.home_wins}</span>,
    },
    {
      key: "away_wins",
      header: "Away wins",
      Component: (item: any) => <span>{item?.away_wins}</span>,
    },
    {
      key: "draws",
      header: "Draws",
      Component: (item: any) => <span>{item?.draws}</span>,
    },
    {
      key: "nula_1",
      header: "0-1",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item?.nula_1[0]}</span>
          <span>{Number(item?.nula_1[1] * 100).toFixed()}%</span>
        </div>
      ),
    },
    {
      key: "nula_2",
      header: "0-2",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item?.nula_2[0]}</span>
          <span>{Number(item?.nula_2[1] * 100).toFixed()}%</span>
        </div>
      ),
    },
    {
      key: "plus_3",
      header: "3+",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item?.plus_3[0]}</span>
          <span>{Number(item?.plus_3[1] * 100).toFixed()}%</span>
        </div>
      ),
    },
    {
      key: "plus_4",
      header: "4+",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item?.plus_4[0]}</span>
          <span>{Number(item?.plus_4[1] * 100).toFixed()}%</span>
        </div>
      ),
    },
    {
      key: "plus_5",
      header: "5+",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item?.plus_5[0]}</span>
          <span>{Number(item?.plus_5[1] * 100).toFixed()}%</span>
        </div>
      ),
    },
    {
      key: "plus_6",
      header: "6+",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item?.plus_6[0]}</span>
          <span>{Number(item?.plus_6[1] * 100).toFixed()}%</span>
        </div>
      ),
    },
    {
      key: "plus_7",
      header: "7+",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item?.plus_7[0]}</span>
          <span>{Number(item?.plus_7[1] * 100).toFixed()}%</span>
        </div>
      ),
    },
    {
      key: "goal_goal",
      header: "gg",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item?.goal_goal[0]}</span>
          <span>{Number(item?.goal_goal[1] * 100).toFixed()}%</span>
        </div>
      ),
    },
    {
      key: "avg_goals",
      header: "avg goals",
      Component: (item: any) => <span>{item?.avg_goals}</span>,
    },
    {
      key: "avg_half_time_goals",
      header: "avg halftime goals",
      Component: (item: any) => <span>{item?.avg_half_time_goals}</span>,
    },
  ];

  return (
    <div className="mt-20">
      <HeroSection />
      {isLoading ? (
        <TableLoading />
      ) : (
        <>
          <TeamVsTeamHeader
            homeTeam={stats.homeTeam}
            awayTeam={stats.awayTeam}
          />
          <TableComponent column={topTableData} row={teamsScore} />
          <TeamVsTeamStats stats={teamsScore[0]?.last_games} />
        </>
      )}
    </div>
  );
};

export default StatsBetweenTeams;
