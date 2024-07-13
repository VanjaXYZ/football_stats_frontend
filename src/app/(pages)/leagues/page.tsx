"use client";
import React from "react";

import leaguesData from "../../../lib/leagues-data.json";
import TableComponent from "../(shared)/TableComponent";

const Page = () => {
  console.log(leaguesData);

  const columnData = [
    {
      key: "country",
      header: "Country",
    },
    {
      key: "date",
      header: "Data start at",
      Component: (item: any) => (
        <div>{new Date(item?.date).toLocaleDateString("en-GB")}</div>
      ),
    },
    {
      key: "league",
      header: "League",
    },
  ];
  return (
    <div className="mt-20 container py-6">
      <TableComponent row={leaguesData} column={columnData} />
    </div>
  );
};

export default Page;
