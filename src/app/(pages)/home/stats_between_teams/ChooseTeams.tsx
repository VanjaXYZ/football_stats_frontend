import { getCountries } from "@/app/routes/Stats_Between_Teams/routes";
import SelectAwayTeam from "./SelectAwayTeam";
import SelectCountry from "./SelectCountry";
import SelectHomeTeam from "./SelectHomeTeam";
import ShowHistoryBetweenTeamsButton from "./ShowHistoryBetweenTeamsButton";

const ChooseTeams = async () => {
  let countries = await getCountries();

  return (
    <>
      <section>
        <h2 className="text-center font-bold text-4xl uppercase mt-12">
          Stats between teams
        </h2>
        <div className="w-full p-20 flex justify-center items-center sm:gap-x-16 space-y-4 sm:space-y-0 flex-col sm:flex-row">
          {/* Choose country */}
          <SelectCountry countries={countries} />

          {/* Choose home team */}
          <SelectHomeTeam />

          {/* Choose away team */}
          <SelectAwayTeam />

          {/* Open stats in new browser tab */}
          <ShowHistoryBetweenTeamsButton />
        </div>
      </section>
    </>
  );
};

export default ChooseTeams;
