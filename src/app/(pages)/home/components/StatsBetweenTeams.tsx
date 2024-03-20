import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SelectComponent from "../../(shared)/SelectComponent";

const StatsBetweenTeams = () => {
  const countriesData = [
    "Serbia",
    "Croatia",
    "France",
    "England",
    "Finland",
    "Russia",
    "Japan",
    "Austria",
    "Ghana",
    "USA",
    "Argentina",
    "Tunisia",
    "Cameron",
    "Senegal",
    "UAE",
  ];

  const homeTeams = [
    "Crvena Zvezda",
    "Manchester Utd.",
    "Liverpool FC",
    "Dinamo Zagreb",
    "Paris SGM",
    "FC Lyon",
    "West Ham",
  ];
  const awayTeams = [
    "Crvena Zvezda",
    "Manchester Utd.",
    "Liverpool FC",
    "Dinamo Zagreb",
    "Paris SGM",
    "FC Lyon",
    "West Ham",
  ];
  return (
    <>
      <section>
        <h2 className="text-4xl text-center font-bold bg-black text-white py-4 flex justify-center items-center gap-x-4">
          <span>View all</span> <ChevronDown size={36} />
        </h2>
      </section>
      <section>
        <h2 className="text-center font-bold text-4xl uppercase mt-12">
          Stats between teams
        </h2>
        <div className="w-full p-20 flex justify-center items-center gap-x-16">
          <SelectComponent
            data={countriesData}
            dataType="country"
            label="Countries"
          />
          <SelectComponent
            data={homeTeams}
            dataType="home team"
            label="Home team"
          />
          <SelectComponent
            data={awayTeams}
            dataType="away team"
            label="Away team"
          />
        </div>
      </section>
    </>
  );
};

export default StatsBetweenTeams;
