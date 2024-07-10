"use client";
import React from "react";
import TableComponent from "../../(shared)/TableComponent";
import Image from "next/image";
import { Config } from "../../../../../Config";

const TopELOTeams = ({ topEloTeams }: { topEloTeams: any }) => {
  const columnsData = [
    {
      key: "team",
      header: "Team",
    },
    {
      key: "country",
      header: "Country",
      Component: (item: any) => (
        <div className="flex items-center justify-center gap-x-6 max-w-32 m-auto">
          <Image
            src={`${
              Config.baseURL
            }/${item?.country_elo?.images_country[0]?.img_path.replace(
              "/",
              ""
            )}`}
            alt={item?.country_elo?.country}
            width={20}
            height={20}
          />
        </div>
      ),
    },
    {
      key: "matched_played",
      header: "Games #",
    },
    {
      key: "elo",
      header: "Rating",
    },
  ];
  return (
    <div className="w-full">
      <TableComponent column={columnsData} row={topEloTeams} />
    </div>
  );
};

export default TopELOTeams;
