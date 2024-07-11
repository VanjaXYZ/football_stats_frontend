import React from "react";
import TopELOTeams from "./components/TopELOTeams";
import { getBestELOTeams } from "@/app/routes/ELO_Stats/routes";
import CountryELOTeams from "./components/CountryELOTeams";
import LinkToAboutEloPage from "./components/LinkToAboutEloPage";
import EloParent from "./components/EloParent";

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
      <EloParent asideMenu={asideMenu} topEloTeams={topEloTeams}>
        {children}
      </EloParent>
    </div>
  );
};

export default EloLayout;
