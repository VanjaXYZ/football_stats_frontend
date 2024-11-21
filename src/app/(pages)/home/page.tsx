import { Suspense } from "react";
import HeroSection from "../(shared)/HeroSection";
import { TableLoading } from "../(shared)/Loaders";
import { GamePredictions } from "./components/game_predictions/GamePredictions";
import ChooseTeams from "./stats_between_teams/ChooseTeams";
import GenerateRandomThreeStats from "./components/generate_random_three_stats/GenerateRandomThreeStats";
import GenerateRandomThreeStatsElo from "./components/generate_random_three_stats_elo/GenerateRandomThreeStatsElo";
import RandomThreeTable from "./components/generate_random_three_stats/components/RandomThreeTable";
import RandomThreeElo from "./components/generate_random_three_stats/components/RandomThreeElo";
const Homepage = () => {
  return (
    <main className="w-full min-h-[100vh]">
      <HeroSection />
      <div className="container">
        <section>
          <ChooseTeams />
        </section>
        <Suspense fallback={<TableLoading />}>
          <GamePredictions />
        </Suspense>
        <div className="space-y-4">
          <RandomThreeTable />
          <RandomThreeElo />
        </div>
      </div>
    </main>
  );
};

export default Homepage;
