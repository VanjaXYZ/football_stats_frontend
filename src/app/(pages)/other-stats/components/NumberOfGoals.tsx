"use client";
import { getOverallStats } from "@/app/routes/Other_Stats/routes";
import { Button } from "@/components/ui/button";
import { useOtherStats } from "@/store/OtherStatsStore";
import { useState } from "react";
import SelectOtherStatsCountry from "./SelectOtherStatsCountry";
import ShowNumberOfGoalsStats from "./ShowNumberOfGoalsStats";

const NumberOfGoals = ({ countries }: { countries: any }) => {
  const { otherStats, setActiveUrl, setOtherStatsCountry } =
    useOtherStats() as any;
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
    setOtherStatsCountry("");
    const hasCountry = otherStats.country ? otherStats.country : "";
    const data = await getOverallStats(path[position], hasCountry);
    setActiveUrl(path[position]);
    setStatsData(data);
    return data;
  };

  return (
    <>
      <h2 className="px-4 py-2 text-4xl my-4 uppercase font-semibold text-center antialiased">
        Stats
      </h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 px-4">
        {numberOfGoalsData.map((goals, index) => (
          <Button key={index} onClick={() => onGetData(urls, index)}>
            {goals}
          </Button>
        ))}
      </div>
      <h2 className="px-4 py-2 text-4xl my-4 uppercase font-semibold text-center antialiased">
        Special Stats
      </h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 px-4">
        {special_number_of_goals_data.map((goals, index) => (
          <Button key={index} onClick={() => onGetData(special_urls, index)}>
            {goals}
          </Button>
        ))}
      </div>
      <section className="flex justify-center py-4">
        <SelectOtherStatsCountry
          countries={countries}
          onGetData={onGetData}
          setStatsData={(value: any) => setStatsData(value)}
        />
      </section>
      {statsData?.length > 0 ? (
        <ShowNumberOfGoalsStats data={statsData} />
      ) : (
        <p className="text-center p-20">No data</p>
      )}
    </>
  );
};

export default NumberOfGoals;
