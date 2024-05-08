"use client";
import { getOverallStats } from "@/app/routes/Other_Stats/routes";
import { Button } from "@/components/ui/button";
import { useOtherStats } from "@/store/OtherStatsStore";
import { useState } from "react";
import ShowNumberOfGoalsStats from "./ShowNumberOfGoalsStats";

const NumberOfGoals = () => {
  const { otherStats, setOtherStatsCountry } = useOtherStats() as any;
  const [statsData, setStatsData] = useState([]);
  const numberOfGoalsData: string[] | number = [
    "No goals",
    "0-1",
    "0-2",
    "3+",
    "4+",
    "5+",
    "6+",
    "7+ (between teams)",
    "1-2/2-1",
    "7+ ALL",
  ];

  const urls = [
    "stats/no_goals",
    "stats/one_goal_or_less",
    "stats/two_goal_or_less",
    "stats/plus_3",
    "stats/plus_4",
    "stats/plus_5",
    "stats/plus_6",
    "stats/plus_7",
    "stats/two_one",
    "stats/plus_7_all",
  ];
  const onGetData = async (path: string[], position: number) => {
    const data = await getOverallStats(path[position]);
    setStatsData(data);
    return data;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 py-8">
        {numberOfGoalsData.map((goals, index) => (
          <Button key={index} onClick={() => onGetData(urls, index)}>
            {goals}
          </Button>
        ))}
      </div>
      {statsData.length > 0 && <ShowNumberOfGoalsStats data={statsData} />}
    </>
  );
};

export default NumberOfGoals;
