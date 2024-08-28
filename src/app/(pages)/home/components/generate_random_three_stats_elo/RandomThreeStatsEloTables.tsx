import TableComponent from "@/app/(pages)/(shared)/TableComponent";
import Image from "next/image";
import React from "react";
import { Config } from "../../../../../../Config";

const RandomThreeStatsEloTables = async ({ data }: any) => {
  const columndData = [
    {
      key: "team",
      header: "Team",
      Component: (item: any) => <div>{item?.team}</div>,
    },
    {
      key: "country",
      header: "Country",
      Component: (item: any) => {
        for (let key in item) {
          if (item[key]?.country) {
            return (
              <div className="flex items-center justify-center gap-x-6 max-w-32 m-auto flex-col">
                {" "}
                <Image
                  src={`${Config.baseURL}/${item[
                    key
                  ]?.images_country[0]?.img_path?.replace("/", "")}`}
                  alt={item[key]?.country}
                  width={20}
                  height={20}
                />
                {item[key]?.country}
              </div>
            );
          }
        }
        return null; // Return null if no country is found
      },
    },

    {
      key: "elo",
      header: "ELO",
      Component: (item: any) => <div>{item?.elo}</div>,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 px-2 md:gap-6 whitespace-nowrap">
      {data?.random_three_elo?.map((eloStats: any, index: number) => (
        <div className="w-full" key={index}>
          <h2 className="text-center text-2xl bg-black text-white font-semibold w-full">
            {eloStats?.type}
          </h2>
          <TableComponent column={columndData} row={eloStats} />
        </div>
      ))}
    </div>
  );
};

export default RandomThreeStatsEloTables;
