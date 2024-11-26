"use client";
import { SmallTableLoading } from "@/app/(pages)/(shared)/Loaders";
import { getRandomThreeStatsElo } from "@/app/routes/Random_Three_Stats_ELO/routes";
import { useEffect, useState } from "react";
import RandomThreeEloTable from "./RandomThreeEloTable";

const RandomThreeElo = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stats = await getRandomThreeStatsElo();
        setData(stats?.random_three_elo);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-center font-bold text-4xl uppercase py-8">
        Random ELO Ratings
      </h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 px-2 md:gap-6 whitespace-nowrap">
          <SmallTableLoading />
          <SmallTableLoading />
          <SmallTableLoading />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 px-2 md:gap-6 whitespace-nowrap">
          <RandomThreeEloTable data={data} />
        </div>
      )}
    </>
  );
};

export default RandomThreeElo;
