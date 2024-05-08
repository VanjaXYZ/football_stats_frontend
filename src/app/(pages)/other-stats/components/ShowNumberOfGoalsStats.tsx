import React from "react";
import TableComponent from "../../(shared)/TableComponent";

interface Item {
  team: string;
  country: string;
  numberOfGames: number;
}

const ShowNumberOfGoalsStats = ({ data }: any) => {
  const checkIf_2_To_1 = data.some((element: any) => element.country_2_to_1);
  const checkIf_Plus_7_All = data.some(
    (element: any) => element.country_plus_7_all
  );
  const tableHeaders = [
    !checkIf_Plus_7_All && {
      key: checkIf_2_To_1 ? "country_2_to_1" : "team",
      header: checkIf_2_To_1 ? "Home team" : "Team",
      Component: (item: any) => (
        <div>{checkIf_2_To_1 ? item?.team_1 : item?.team}</div>
      ),
    },
    checkIf_2_To_1 && {
      key: "country_plus_7_all",
      header: "Away team",
      Component: (item: any) => <div>{item?.team_2}</div>,
    },

    checkIf_Plus_7_All && {
      key: checkIf_Plus_7_All ? "country_plus_7_all" : "team",
      header: checkIf_Plus_7_All ? "Home team" : "Team",
      Component: (item: any) => (
        <div>{checkIf_Plus_7_All ? item?.team_1 : item?.team}</div>
      ),
    },

    checkIf_Plus_7_All && {
      key: "country_plus_7_all",
      header: "Away team",
      Component: (item: any) => <div>{item?.team_2}</div>,
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
