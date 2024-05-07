import React from "react";
import TableComponent from "../../(shared)/TableComponent";

interface Item {
  team: string;
  country: string;
  numberOfGames: number;
}

const ShowNumberOfGoalsStats = ({ data }: any) => {
  const tableHeaders = [
    {
      key: "team",
      header: "Team",
      Component: (item: any) => <div>{item?.team}</div>,
    },
    {
      key: "country",
      header: "Country",
      Component: (item: Item) => {
        for (let value of Object.values(item)) {
          const single_value = value as Item;
          if (single_value?.country) {
            return <div>{single_value.country}</div>;
          }
        }
      },
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
