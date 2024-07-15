import { getRandomThreeStats } from "@/app/routes/Random_Three_Stats/routes";
import RandomThreeStatsTables from "./RandomThreeStatsTables.tsx";

const GenerateRandomThreeStats = async () => {
  const randomThreeStats = await getRandomThreeStats();

  return (
    <div>
      <h2 className="text-center font-bold text-4xl uppercase py-8">
        Random stats
      </h2>
      {/* <RandomThreeStatsTables data={randomThreeStats} /> */}
    </div>
  );
};

export default GenerateRandomThreeStats;
