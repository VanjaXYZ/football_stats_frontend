import TableComponent from "@/app/(pages)/(shared)/TableComponent";
import Image from "next/image";
import React, { Suspense } from "react";
import { Config } from "../../../../../../Config";
import { SmallTableLoading } from "@/app/(pages)/(shared)/Loaders";

const RandomThreeStatsTables = async ({ data }: any) => {
  // let table_1 = await data?.random_three[0];
  // let table_2 = await data?.random_three[1];
  // let table_3 = await data?.random_three[2];

  const [table_1, table_2, table_3] = await Promise.all([
    data?.random_three[0],
    data?.random_three[1],
    data?.random_three[2],
  ]);

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
      header: "Matches",
      Component: (item: any) => (
        <div className="flex flex-col items-center justify-center">
          <span>{item.stats.numberOfGames[0]}</span>
          <span>{item.stats.numberOfGames[1]}%</span>
        </div>
      ),
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 px-2 md:gap-6 whitespace-nowrap">
      {/* <Suspense fallback={<SmallTableLoading />}> */}
      <div className="w-full">
        <h2 className="text-center text-2xl bg-black text-white font-semibold uppercase">
          {table_1[0]?.type}
        </h2>
        {/* <TableComponent column={columndData} row={table_1} /> */}
      </div>
      {/* </Suspense> */}
      {/* <Suspense fallback={<SmallTableLoading />}> */}
      <div className="">
        <h2 className="text-center text-2xl bg-black text-white font-semibold uppercase">
          {table_2[0]?.type}
        </h2>
        {/* <TableComponent column={columndData} row={table_2} /> */}
      </div>
      {/* </Suspense> */}
      {/* <Suspense fallback={<SmallTableLoading />}> */}
      <div className="">
        <h2 className="text-center text-2xl bg-black text-white font-semibold uppercase">
          {table_3[0]?.type}
        </h2>
        {/* <TableComponent column={columndData} row={table_3} /> */}
      </div>
      {/* </Suspense> */}
    </div>
  );
};

export default RandomThreeStatsTables;
