"use client";
import { getEloCountry } from "@/app/routes/ELO_Stats/routes";
import { useEloRatingStore } from "@/store/EloRatingStore";
import React, { useEffect, useState } from "react";
import TableComponent from "../../(shared)/TableComponent";
import Image from "next/image";
import { Config } from "../../../../../Config";

const CountryELOTeams = () => {
  const { stats } = useEloRatingStore() as any;
  const [countryElo, setCountryElo] = useState(null);

  useEffect(() => {
    const fetchElo = async () => {
      if (stats?.country) {
        try {
          const response = await getEloCountry({ country: stats.country });
          setCountryElo(response);
          console.log(response);
        } catch (error) {
          console.error("Error fetching ELO data:", error);
        }
      }
    };
    fetchElo();
  }, [stats?.country]);

  const columnData = [
    {
      key: "team",
      header: "Team",
    },
    {
      key: "country_elo.country",
      header: "Country",
      Component: (item: any) => (
        <div className="grid place-items-center">
          <Image
            src={`${
              Config.baseURL
            }/${item?.country_elo?.images_country[0]?.img_path?.replace(
              "/",
              ""
            )}`}
            alt={item?.country_elo.country}
            width={20}
            height={20}
          />
        </div>
      ),
    },
    {
      key: "elo",
      header: "ELO",
    },
  ];

  return (
    <>
      {stats?.country ? (
        <>
          <h3 className="antialiased text-3xl font-semibold text-center py-2">
            Top 100 Teams of {stats?.country}
          </h3>
          <TableComponent row={countryElo} column={columnData} />
        </>
      ) : (
        <p className="text-center p-20">No data</p>
      )}
    </>
  );
};

export default CountryELOTeams;
