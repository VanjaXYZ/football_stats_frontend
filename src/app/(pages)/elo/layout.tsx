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
    <div className="flex flex-col">
      {/* <EloParent asideMenu={asideMenu} topEloTeams={topEloTeams}>
        {children}
      </EloParent> */}
    </div>
  );
};

export default EloLayout;
