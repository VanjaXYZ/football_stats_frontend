import React from "react";

const TeamVsTeamHeader = ({
  homeTeam,
  awayTeam,
  eloHomeTeam,
  eloAwayTeam,
}: {
  homeTeam: string;
  awayTeam: string;
  eloHomeTeam?: number;
  eloAwayTeam?: number;
}) => {
  return (
    <h2 className="text-4xl py-6 text-center font-semibold antialiased">
      <span className="flex flex-col">
        <span>{homeTeam}</span>
        <span className="text-base">ELO: {eloHomeTeam}</span>
      </span>{" "}
      <span className="flex flex-col">
        <span>{awayTeam && `vs ${awayTeam}`}</span>
        {awayTeam && <span className="text-base">ELO: {eloAwayTeam}</span>}
      </span>{" "}
    </h2>
  );
};

export default TeamVsTeamHeader;
