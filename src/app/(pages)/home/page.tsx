import { Suspense } from "react";
import HeroSection from "../(shared)/HeroSection";
import { TableLoading } from "../(shared)/Loaders";
import { GamePredictions } from "./components/game_predictions/GamePredictions";
import ChooseTeams from "./stats_between_teams/ChooseTeams";
const Homepage = () => {
  return (
    <main className=" w-full min-h-[100vh]">
      <HeroSection />
      <section>
        <ChooseTeams />
      </section>
      <Suspense fallback={<TableLoading />}>
        <GamePredictions />
      </Suspense>
    </main>
  );
};

export default Homepage;
