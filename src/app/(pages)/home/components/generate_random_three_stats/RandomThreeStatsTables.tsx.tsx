"use client";
import TableComponent from "@/app/(pages)/(shared)/TableComponent";
import React from "react";

const RandomThreeStatsTables = ({ data }: any) => {
  let table_1 = data?.random_three[0];
  let table_2 = data?.random_three[1];
  let table_3 = data?.random_three[2];

  let hasTableLength =
    table_1.length > 0 && table_2.length > 0 && table_3.length > 0;

  const columndData = [
    {
      key: "team",
      header: "Team",
      Component: (item: any) => <div>{item.stats.team}</div>,
    },
    {
      key: "numberOfGames",
      header: "No. games",
      Component: (item: any) => <div>{item.stats.numberOfGames}</div>,
    },
  ];
  return (
    <div className="space-y-4">
      {hasTableLength && (
        <>
          <div>
            <h2 className="text-center text-2xl bg-black text-white font-semibold">
              {table_1[0]?.type}
            </h2>
            <TableComponent column={columndData} row={table_1} />
          </div>
          <div>
            <h2 className="text-center text-2xl bg-black text-white font-semibold">
              {table_2[0]?.type}
            </h2>
            <TableComponent column={columndData} row={table_2} />
          </div>
          <div>
            <h2 className="text-center text-2xl bg-black text-white font-semibold">
              {table_3[0]?.type}
            </h2>
            <TableComponent column={columndData} row={table_3} />
          </div>
        </>
      )}
    </div>
  );
};

export default RandomThreeStatsTables;
