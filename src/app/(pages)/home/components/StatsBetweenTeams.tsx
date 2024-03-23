"use client";
import { ChevronDown } from "lucide-react";
import SelectComponent from "../../(shared)/SelectComponent";
import { useStatsBetweenStore } from "@/store/StatsBetweenStore";

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

  const { setCountry, setHomeTeam, setAwayTeam, stats } =
    useStatsBetweenStore() as any;

  const handleCountry = (e: string) => {
    setCountry(e);
    console.log("Country: ", e);
  };
  const handleHomeTeam = (e: string) => {
    setHomeTeam(e);
    console.log("Home team: ", e);
  };
  const handleAwayTeam = (e: string) => {
    setAwayTeam(e);
    console.log("Away team: ", e);
  };
  console.log(stats);
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
            setFn={handleCountry}
          />
          {stats.country && (
            <SelectComponent
              data={homeTeams}
              dataType="home team"
              label="Home team"
              setFn={handleHomeTeam}
            />
          )}
          {stats.homeTeam && (
            <SelectComponent
              data={awayTeams}
              dataType="away team"
              label="Away team"
              setFn={handleAwayTeam}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default StatsBetweenTeams;
