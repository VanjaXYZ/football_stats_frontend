"use client";
import { getSingleTeamStats } from "@/app/routes/Stats_Between_Teams/routes";
import { useSingleTeamStats } from "@/store/SingleTeamStore";
import React, { useEffect, useState } from "react";

const SingleTeamElo = () => {
  const { singleTeamStats } = useSingleTeamStats() as any;
  const [teamStats, setTeamStats] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStats = async () => {
      setIsLoading(true);
      try {
        const getStats = await getSingleTeamStats(
          singleTeamStats?.country,
          singleTeamStats?.team
        );
        setTeamStats([getStats]);
        [getStats];
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, [singleTeamStats?.country, singleTeamStats?.team]);
  return <div></div>;
};

export default SingleTeamElo;
