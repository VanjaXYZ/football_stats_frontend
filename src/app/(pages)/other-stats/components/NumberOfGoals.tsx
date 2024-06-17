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
    "7+",
    "1-1",
    "2-2",
    "X-X",
    "1-X",
    "X-1",
    "2-X",
    "X-2",
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
    "stats/one_to_one",
    "stats/two_to_two",
    "stats/x_to_x",
    "stats/one_to_x",
    "stats/x_to_one",
    "stats/two_to_x",
    "stats/x_to_two",
  ];

  const special_number_of_goals_data: string[] | number = [
    "1-2/2-1 (between teams)",
    "7+ (between teams)",
  ];
  const special_urls = ["stats/two_one", "stats/plus_7_all"];
  const onGetData = async (path: string[], position: number) => {
    const data = await getOverallStats(path[position]);
    setStatsData(data);
    return data;
  };

  return (
    <>
      <h2 className="px-4 py-2 text-4xl my-4 uppercase font-semibold text-center">
        Stats
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 ">
        {numberOfGoalsData.map((goals, index) => (
          <Button key={index} onClick={() => onGetData(urls, index)}>
            {goals}
          </Button>
        ))}
      </div>
      <h2 className="px-4 py-2 text-4xl my-4 uppercase font-semibold text-center">
        Special Stats
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 my-12">
        {special_number_of_goals_data.map((goals, index) => (
          <Button key={index} onClick={() => onGetData(special_urls, index)}>
            {goals}
          </Button>
        ))}
      </div>
      {statsData.length > 0 && <ShowNumberOfGoalsStats data={statsData} />}
    </>
  );
};

export default NumberOfGoals;
