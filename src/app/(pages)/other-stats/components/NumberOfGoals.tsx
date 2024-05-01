"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import SelectComponent from "../../(shared)/SelectComponent";
import { useOtherStats } from "@/store/OtherStatsStore";

const NumberOfGoals = () => {
  const numberOfGoalsData: string[] | number = [
    "No goals",
    "0-1",
    "0-2",
    "3+",
    "4+",
    "5+",
    "6+",
    "7+",
    "1-2/2-1",
  ];
  const countries: string[] = [
    "Japan",
    "Brazil",
    "France",
    "Kenya",
    "Canada",
    "Russia",
    "Italy",
    "Mexico",
    "Nigeria",
    "Germany",
  ];
  const { otherStats, setOtherStatsCountry } = useOtherStats() as any;

  const handleSetCountry = (country: string) => {
    setOtherStatsCountry(country);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 py-8">
        {numberOfGoalsData.map((goals, index) => (
          <Button key={index}>{goals}</Button>
        ))}
      </div>
      <div className="flex justify-center ">
        <SelectComponent
          data={countries}
          dataType="country"
          label={"Countries"}
          setFn={handleSetCountry}
          value={otherStats.country}
        />
      </div>
    </>
  );
};

export default NumberOfGoals;
