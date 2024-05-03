"use client";
import { getStatsBetweenTeams } from "@/app/routes/Stats_Between_Teams/routes";
import { useStatsBetweenStore } from "@/store/StatsBetweenStore";
import React, { useEffect, useState } from "react";

const Team_2 = ({ params }: { params: any }) => {
  const { stats } = useStatsBetweenStore() as any;
  const [teamsScore, setTeamsScore] = useState([]);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const getStats = await getStatsBetweenTeams(
          params?.country.trim(),
          params?.team_1.trim(),
          params?.team_2.trim()
        );
        console.log("stats: ", getStats);
        setTeamsScore(getStats);
      } catch (error) {
        // Handle error if necessary
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="mt-20">
      {params?.team_2.replaceAll("_", " ")} VS{" "}
      {params?.team_1.replaceAll("_", " ")}
    </div>
  );
};

export default Team_2;
