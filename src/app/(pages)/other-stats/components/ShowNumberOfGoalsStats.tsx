import React from "react";
import TableComponent from "../../(shared)/TableComponent";

const ShowNumberOfGoalsStats = ({ data }: any) => {
  const tableHeaders = [
    {
      key: "team",
      header: "Team",
      Component: (item: any) => <div>{item?.team}</div>,
    },
    {
      key: "numberOfGames",
      header: "Number of games",
      Component: (item: any) => <div>{item?.numberOfGames}</div>,
    },
  ];
  return (
    <div className="w-full">
      <TableComponent column={tableHeaders} row={data} />;
    </div>
  );
};

export default ShowNumberOfGoalsStats;
