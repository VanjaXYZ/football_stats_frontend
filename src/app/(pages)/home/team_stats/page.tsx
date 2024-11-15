"use client";
import { useSingleTeamStats } from "@/store/SingleTeamStore";
import React, { useEffect, useState } from "react";
import HeroSection from "../../(shared)/HeroSection";
import { getSingleTeamStats } from "@/app/routes/Stats_Between_Teams/routes";
import TableComponent from "../../(shared)/TableComponent";
import { TableLoading } from "../../(shared)/Loaders";

const columns = [
  {
    key: "game_number",
    header: "Matches",
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
    key: "loses",
    header: "Lose",
    Component: (item: any) => <span>{item?.loses}</span>,
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
    key: "number_of_goals",
    header: "goals",
    Component: (item: any) => <span>{item?.number_of_goals}</span>,
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

const lastTenGamesColumns = [
  {
    key: "",
    header: "Home",
    Component: (item: any) => <span>{item[1]}</span>,
  },
  {
    key: "",
    header: "Away",
    Component: (item: any) => <span>{item[2]}</span>,
  },
  {
    key: "",
    header: "Result",
    Component: (item: any) => <span>{item[3]}</span>,
  },
  {
    key: "",
    header: "Halftime Result",
    Component: (item: any) => <span>{item[4]}</span>,
  },
  {
    key: "",
    header: "Date",
    Component: (item: any) => <span>{item[0]}</span>,
  },
];

const page = () => {
  const { singleTeamStats } = useSingleTeamStats() as any;
  const [teamStats, setTeamStats] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        const getStats = await getSingleTeamStats(
          singleTeamStats?.country,
          singleTeamStats?.team
        );
        setTeamStats([getStats]);
        [getStats];
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, [singleTeamStats?.country, singleTeamStats?.team]);

  return (
    <main className="w-full min-h-[100vh]">
      <HeroSection />
      {isLoading ? (
        <TableLoading />
      ) : (
        <section className="container">
          <h2 className="text-4xl py-6 text-center font-semibold antialiased">
            <span className="flex flex-col">
              <span>{singleTeamStats?.team}</span>
              <span className="text-base">
                ELO: {teamStats[0] && teamStats[0]?.elo_team_1}
              </span>
            </span>{" "}
          </h2>
          <div className="py-4 space-y-2">
            <TableComponent column={columns} row={teamStats} />
            <h3 className="text-xl font-semibold antialiased">Last 10 games</h3>
            <TableComponent
              column={lastTenGamesColumns}
              row={teamStats[0]?.last_games}
            />
          </div>
        </section>
      )}
    </main>
  );
};

export default page;
