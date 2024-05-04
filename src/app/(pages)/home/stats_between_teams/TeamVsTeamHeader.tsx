import React from "react";

const TeamVsTeamHeader = ({
  homeTeam,
  awayTeam,
}: {
  homeTeam: string;
  awayTeam: string;
}) => {
  return (
    <h2 className="text-4xl py-6 text-center font-semibold">
      {homeTeam} {awayTeam && `vs ${awayTeam}`}
    </h2>
  );
};

export default TeamVsTeamHeader;
