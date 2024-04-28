import { Suspense } from "react";
import HeroSection from "../(shared)/HeroSection";
import StatsBetweenTeams from "./components/StatsBetweenTeams";
import { GamePredictions } from "./components/GamePredictions";
import { TableLoading } from "../(shared)/Loaders";
const Homepage = () => {
  return (
    <main className=" w-full min-h-[100vh]">
      <HeroSection />
      <section>
        <StatsBetweenTeams />
      </section>
      <Suspense fallback={<TableLoading />}>
        <GamePredictions />
      </Suspense>
    </main>
  );
};

export default Homepage;
