import React from "react";
import TopELOTeams from "./components/TopELOTeams";
import { getBestELOTeams } from "@/app/routes/ELO_Stats/routes";
import CountryELOTeams from "./components/CountryELOTeams";

const EloLayout = async ({
  children,
  asideMenu,
}: {
  children: React.ReactNode;
  asideMenu: React.ReactNode;
}) => {
  const topEloTeams = await getBestELOTeams();
  return (
    <div className="flex flex-col">
      {children}
      <div className="flex">
        <div className="w-[80%] space-y-10">
          <TopELOTeams topEloTeams={topEloTeams} />
          <CountryELOTeams />
        </div>
        {asideMenu}
      </div>
    </div>
  );
};

export default EloLayout;
