"use client";
import TableComponent from "@/app/(pages)/(shared)/TableComponent";
import Image from "next/image";
import React from "react";
import { Config } from "../../../../../../Config";

const RandomThreeStatsTables = ({ data }: any) => {
  let table_1 = data?.random_three[0];
  let table_2 = data?.random_three[1];
  let table_3 = data?.random_three[2];

  const columndData = [
    {
      key: "team",
      header: "Team",
      Component: (item: any) => <div>{item.stats.team}</div>,
    },
    {
      key: "country",
      header: "Country",
      Component: (item: any) => {
        for (let key in item?.stats) {
          if (item?.stats[key]?.country) {
            return (
              <div className="flex items-center justify-center gap-x-6 max-w-32 m-auto">
                {" "}
                <Image
                  src={`${Config.baseURL}/${item?.stats[
                    key
                  ]?.images_country[0]?.img_path?.replace("/", "")}`}
                  alt={item?.stats[key]?.country}
                  width={20}
                  height={20}
                />
                {/* {item?.stats[key]?.country} */}
              </div>
            );
          }
        }
        return null; // Return null if no country is found
      },
    },
    {
      key: "numberOfGames",
      header: "No. games",
      Component: (item: any) => <div>{item.stats.numberOfGames}</div>,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 px-2 md:gap-6 whitespace-nowrap">
      <div className="w-full">
        <h2 className="text-center text-2xl bg-black text-white font-semibold w-full">
          {table_1[0]?.type}
        </h2>
        <TableComponent column={columndData} row={table_1} />
      </div>
      <div className="">
        <h2 className="text-center text-2xl bg-black text-white font-semibold">
          {table_2[0]?.type}
        </h2>
        <TableComponent column={columndData} row={table_2} />
      </div>
      <div className="">
        <h2 className="text-center text-2xl bg-black text-white font-semibold">
          {table_3[0]?.type}
        </h2>
        <TableComponent column={columndData} row={table_3} />
      </div>
    </div>
  );
};

export default RandomThreeStatsTables;
