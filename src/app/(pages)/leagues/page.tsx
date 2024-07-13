"use client";
import React from "react";

import leaguesData from "../../../lib/leagues-data.json";

const Page = () => {
  console.log(leaguesData);
  return (
    <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
      {leaguesData?.map((league: any) => (
        <div>
          <h3>Country: {league?.country}</h3>
          <p>Start at: {league?.date}</p>
          <p>League: {league?.league}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
