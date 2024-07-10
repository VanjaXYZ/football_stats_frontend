import { getRandomThreeStats } from "@/app/routes/Random_Three_Stats/routes";
import RandomThreeStatsTables from "./RandomThreeStatsTables.tsx";

const GenerateRandomThreeStats = async () => {
  const randomThreeStats = await getRandomThreeStats();

  return (
    <div>
      <RandomThreeStatsTables data={randomThreeStats} />
    </div>
  );
};

export default GenerateRandomThreeStats;
