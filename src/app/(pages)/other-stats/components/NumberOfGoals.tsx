import { Button } from "@/components/ui/button";
import React from "react";

const NumberOfGoals = () => {
  const numberOfGoalsData = [
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-4 py-8">
      {numberOfGoalsData.map((goals: string, index: number) => (
        <Button key={index}>{goals}</Button>
      ))}
    </div>
  );
};

export default NumberOfGoals;
