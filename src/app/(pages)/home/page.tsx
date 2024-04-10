import React from "react";
import HeroSection from "../(shared)/HeroSection";
import TableComponent from "../(shared)/TableComponent";
import StatsBetweenTeams from "./components/StatsBetweenTeams";
import { ChevronDown } from "lucide-react";

const Homepage = () => {
  const homepageColumnData = [
    {
      key: "homeTeam",
      header: "home",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item.homeTeam}</span>
          <span>(ELO: {item?.eloHomeTeam})</span>
        </div>
      ),
    },
    {
      key: "awayTeam",
      header: "away",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item.awayTeam}</span>
          <span>(ELO: {item?.eloAwayTeam})</span>
        </div>
      ),
    },
    {
      key: "_1_quote",
      header: "1",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item._1_quote}</span>
          <span>{item?._1_prediction}%</span>
        </div>
      ),
    },
    {
      key: "_x_quote",
      header: "x",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item._x_quote}</span>
          <span>{item?._x_prediction}%</span>
        </div>
      ),
    },
    {
      key: "_2_quote",
      header: "2",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item._2_quote}</span>
          <span>{item?._2_prediction}%</span>
        </div>
      ),
    },
    {
      key: "date",
      header: "date",
    },
  ];
  const homepageRowData = [
    {
      homeTeam: "Manchester City",
      eloHomeTeam: 2019,
      awayTeam: "Arsenal",
      eloAwayTeam: 1992,
      _1_quote: 1.55,
      _1_prediction: 75,
      _x_quote: 1.26,
      _x_prediction: 15,
      _2_quote: 1.76,
      _2_prediction: 10,
      date: "03.07.2023.",
    },
    {
      homeTeam: "Crystal Palace",
      eloHomeTeam: 1243,
      awayTeam: "Newcastle",
      eloAwayTeam: 1890,
      _1_quote: 3.12,
      _1_prediction: 45,
      _x_quote: 2.01,
      _x_prediction: 30,
      _2_quote: 1.3,
      _2_prediction: 25,
      date: "20.06.2023.",
    },
    {
      homeTeam: "Crystal Palace",
      eloHomeTeam: 1243,
      awayTeam: "Newcastle",
      eloAwayTeam: 1890,
      _1_quote: 3.12,
      _x_quote: 2.01,
      _2_quote: 1.3,
      date: "20.06.2023.",
    },
    {
      homeTeam: "Crystal Palace",
      eloHomeTeam: 1243,
      awayTeam: "Newcastle",
      eloAwayTeam: 1890,
      _1_quote: 3.12,
      _x_quote: 2.01,
      _2_quote: 1.3,
      date: "20.06.2023.",
    },
  ];

  return (
    <main className=" w-full min-h-[100vh]">
      <HeroSection />
      <section>
        <StatsBetweenTeams />
      </section>
      <section>
        <h2 className="text-center font-bold text-4xl uppercase mt-12">
          Game predictions
        </h2>
        <TableComponent column={homepageColumnData} row={homepageRowData} />
        <h2 className="text-4xl text-center font-bold bg-black text-white py-4 flex justify-center items-center gap-x-4">
          <span>View all</span> <ChevronDown size={36} />
        </h2>
      </section>
    </main>
  );
};

export default Homepage;
