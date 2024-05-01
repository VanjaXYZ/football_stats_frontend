import { getCountries } from "@/app/routes/Stats_Between_Teams/routes";
import SelectAwayTeam from "./SelectAwayTeam";
import SelectCountry from "./SelectCountry";
import SelectHomeTeam from "./SelectHomeTeam";
import ShowHistoryBetweenTeamsButton from "./ShowHistoryBetweenTeamsButton";

const StatsBetweenTeams = async () => {
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

  const awayTeams = [
    "Crvena Zvezda",
    "Manchester Utd.",
    "Liverpool FC",
    "Dinamo Zagreb",
    "Paris SGM",
    "FC Lyon",
    "West Ham",
  ];

  const homeTeamStats = [
    {
      gameNumber: 287,
      homeWins: 219,
      awayWins: 47,
      draws: 21,
      _0_1: 100,
      _0_2: 120,
      _3: 120,
      _4: 44,
      _5: 3,
      _6: 2,
      _7: 0,
      _gg: 0,
      avg_goals: 2.78,
      avg_halftime_goals: 1.12,
    },
  ];

  const homeTeamStatsHeaders = [
    {
      key: "gameNumber",
      header: "Game number",
    },
    {
      key: "homeWins",
      header: "Home wins",
    },
    {
      key: "awayWins",
      header: "Away wins",
    },
    {
      key: "draws",
      header: "Draws",
    },
    {
      key: "_0_1",
      header: "0-1",
    },
    {
      key: "_0_2",
      header: "0-2",
    },
    {
      key: "_3",
      header: "3+",
    },
    {
      key: "_4",
      header: "4+",
    },
    {
      key: "_5",
      header: "5+",
    },
    {
      key: "_6",
      header: "6+",
    },
    {
      key: "_7",
      header: "7+",
    },
    {
      key: "_gg",
      header: "GG",
    },
    {
      key: "avg_goals",
      header: "AVG goals",
    },
    {
      key: "avg_halftime_goals",
      header: "AVG halftime goals",
    },
  ];

  const last_10_games = [
    {
      key: "home",
      header: "Home",
    },
    {
      key: "away",
      header: "Away",
    },
    {
      key: "result",
      header: "Result",
    },
    {
      key: "halftime_result",
      header: "Halftime result",
    },
    {
      key: "date",
      header: "Date",
    },
  ];

  const last_10_games_data = [
    {
      home: "Liverpool",
      away: "Aresnal",
      result: "3-2",
      halftime_result: "0-0",
      date: "13.09.2022",
    },
    {
      home: "Liverpool",
      away: "West Ham",
      result: "1-1",
      halftime_result: "1-0",
      date: "19.11.2022",
    },
    {
      home: "Liverpool",
      away: "Man City",
      result: "0-0",
      halftime_result: "0-0",
      date: "03.01.2024",
    },
    {
      home: "Liverpool",
      away: "Tottenham",
      result: "1-3",
      halftime_result: "0-2",
      date: "18.02.2024",
    },
    {
      home: "Liverpool",
      away: "Fulham",
      result: "2-0",
      halftime_result: "2-0",
      date: "20.02.2024",
    },
    {
      home: "Liverpool",
      away: "Man Utd",
      result: "4-4",
      halftime_result: "3-2",
      date: "27.02.2024",
    },
    {
      home: "Liverpool",
      away: "Everton",
      result: "2-1",
      halftime_result: "1-1",
      date: "28.02.2024",
    },
    {
      home: "Liverpool",
      away: "Aston Villa",
      result: "5-0",
      halftime_result: "2-0",
      date: "04.03.2024",
    },
    {
      home: "Liverpool",
      away: "Brighton",
      result: "0-1",
      halftime_result: "0-0",
      date: "10.03.2024",
    },
    {
      home: "Liverpool",
      away: "Burnley",
      result: "3-0",
      halftime_result: "3-0",
      date: "15.03.2024",
    },
  ];

  let countries = await getCountries();

  // const { setCountry, setHomeTeam, setAwayTeam, stats } =
  //   useStatsBetweenStore() as any;

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

export default StatsBetweenTeams;
