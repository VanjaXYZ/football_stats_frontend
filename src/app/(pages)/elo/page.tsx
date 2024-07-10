import React from "react";
import HeroSection from "../(shared)/HeroSection";
import { getBestELOTeams } from "@/app/routes/ELO_Stats/routes";
import TopELOTeams from "./components/TopELOTeams";

const Page = async () => {
  const topEloTeams = await getBestELOTeams();
  return (
    <>
      <HeroSection />
      <TopELOTeams topEloTeams={topEloTeams} />
    </>
  );
};

export default Page;
