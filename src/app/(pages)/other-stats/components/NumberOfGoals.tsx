"use client";
import { getOverallStats } from "@/app/routes/Other_Stats/routes";
import { Button } from "@/components/ui/button";
import { useOtherStats } from "@/store/OtherStatsStore";
import { Suspense, useState } from "react";
import SelectOtherStatsCountry from "./SelectOtherStatsCountry";
import ShowNumberOfGoalsStats from "./ShowNumberOfGoalsStats";
import CTAButton from "./CTAButton";
import StandardCTAButtons from "./StandardCTAButtons";

const NumberOfGoals = ({ countries }: { countries: any }) => {
  const { otherStats, setActiveUrl, setOtherStatsCountry } =
    useOtherStats() as any;
  const [statsData, setStatsData] = useState([]);
  const [hasSpecialStats, setHasSpecialStats] = useState<boolean>(false);

  const onGetData = async (
    path: string[],
    position: number,
    hasSpecialStatsBoolean: boolean
  ) => {
    setHasSpecialStats(hasSpecialStatsBoolean);
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
      <StandardCTAButtons />
      <h2 className="px-4 py-2 text-4xl my-4 uppercase font-semibold text-center antialiased">
        Special Stats
      </h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 px-4">
        {/* {special_number_of_goals_data.map((goals, index) => (
          <Button
            key={index}
            onClick={() => onGetData(special_urls, index, true)}
          >
            {goals}
          </Button>
        ))} */}

        {/* 
        rute: 2/1 & +7 all & two_one
        */}
      </div>
      <section className="flex justify-center py-4">
        <Suspense fallback={<div>Loading...</div>}>
          <SelectOtherStatsCountry
            countries={countries}
            onGetData={onGetData}
            setStatsData={(value: any) => setStatsData(value)}
          />
        </Suspense>
      </section>
      {otherStats.overallData?.length > 0 ? (
        <Suspense fallback={<div>Laoding...</div>}>
          <ShowNumberOfGoalsStats
            data={otherStats.overallData}
            hasSpecialStats={hasSpecialStats}
          />
        </Suspense>
      ) : (
        <p className="text-center p-20">No data</p>
      )}
    </>
  );
};

export default NumberOfGoals;
