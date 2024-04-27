"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../(shared)/HeroSection";
import TableComponent from "../(shared)/TableComponent";
import StatsBetweenTeams from "./components/StatsBetweenTeams";
import { ChevronDown } from "lucide-react";
import axios from "axios";
import { Config } from "../../../../Config";
const Homepage = () => {
  const [predictedGames, setPredictedGames] = useState<any[]>([]);
  const homepageColumnData = [
    {
      key: "home",
      header: "home",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item.home}</span>
          <span>(ELO: {item?.elo_home})</span>
        </div>
      ),
    },
    {
      key: "away",
      header: "away",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item.away}</span>
          <span>(ELO: {item?.elo_away})</span>
        </div>
      ),
    },
    {
      key: "one",
      header: "1",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span
            className={`${
              item?.diference_one > 0 ? "text-green-500" : "text-red-600"
            } text-black`}
          >
            {item.one}
          </span>
          <span>{item?.prediction_home}%</span>
        </div>
      ),
    },
    {
      key: "x",
      header: "x",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span
            className={`${
              item?.diference_x > 0 ? "text-green-500" : "text-red-500"
            } text-black`}
          >
            {item.x}
          </span>
          <span>{item?.prediction_draw}%</span>
        </div>
      ),
    },
    {
      key: "two",
      header: "2",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span
            className={`${
              item?.diference_two > 0 ? "text-green-500" : "text-red-600"
            } text-black`}
          >
            {item.two}
          </span>
          <span>{item?.prediction_away}%</span>
        </div>
      ),
    },
    {
      key: "date",
      header: "date",
    },
    {
      key: "time",
      header: "time",
    },
  ];

  const handleGamePredictionsData = async () => {
    try {
      const response = await axios.get(`${Config.baseURL}/quotes`);
      if (response?.status === 200) {
        setPredictedGames(response?.data);
      }
      console.log(response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGamePredictionsData();
  }, []);

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
        <TableComponent column={homepageColumnData} row={predictedGames} />
        <h2 className="text-4xl text-center font-bold bg-black text-white py-4 flex justify-center items-center gap-x-4">
          <span>View all</span> <ChevronDown size={36} />
        </h2>
      </section>
    </main>
  );
};

export default Homepage;
