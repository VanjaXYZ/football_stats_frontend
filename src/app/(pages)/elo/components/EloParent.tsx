"use client";
import React from "react";
import TopELOTeams from "./TopELOTeams";
import CountryELOTeams from "./CountryELOTeams";
import LinkToAboutEloPage from "./LinkToAboutEloPage";
import HeroSection from "../../(shared)/HeroSection";
import { usePathname } from "next/navigation";

const EloParent = ({
  topEloTeams,
  asideMenu,
  children,
}: {
  topEloTeams: any;
  asideMenu: React.ReactNode;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/elo/about_elo" ? (
        children
      ) : (
        <>
          <HeroSection />
          <div className="flex container">
            <div className="w-[77.5%] space-y-2">
              <TopELOTeams topEloTeams={topEloTeams} />
              <CountryELOTeams />
              <LinkToAboutEloPage />
            </div>
            {asideMenu}
          </div>
        </>
      )}
    </>
  );
};

export default EloParent;
