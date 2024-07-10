import React from "react";
import TopELOTeams from "./components/TopELOTeams";
import { getBestELOTeams } from "@/app/routes/ELO_Stats/routes";

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
        <TopELOTeams topEloTeams={topEloTeams} />
        {asideMenu}
      </div>
    </div>
  );
};

export default EloLayout;
