import { getBestELOTeams } from "@/app/routes/ELO_Stats/routes";
import React from "react";
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
    <div className="flex w-full">
      <EloParent topEloTeams={topEloTeams}>{children}</EloParent>
      {asideMenu}
    </div>
  );
};

export default EloLayout;
