import { getRandomThreeStatsElo } from "@/app/routes/Random_Three_Stats_ELO/routes";
import RandomThreeStatsEloTables from "./RandomThreeStatsEloTables";

const GenerateRandomThreeStatsElo = async () => {
  const randomThreeStatsElo = await getRandomThreeStatsElo();

  return (
    <div>
      <h2 className="text-center font-bold text-4xl uppercase py-8">
        Random stats with ELO ratings
      </h2>
      <RandomThreeStatsEloTables data={randomThreeStatsElo} />
    </div>
  );
};

export default GenerateRandomThreeStatsElo;
