import React from "react";
import TableComponent from "../../(shared)/TableComponent";
import Image from "next/image";
import { Config } from "../../../../../Config";

interface Item {
  team: string;
  country: string;
  numberOfGames: number;
  images_country?: any;
}

const ShowNumberOfGoalsStats = ({ data, hasSpecialStats }: any) => {
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
      key: "country_plus_7_all",
      header: "Home team",
      Component: (item: any) => <div>{item?.team_1}</div>,
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
            return (
              <div className="flex items-center justify-between gap-x-6 max-w-32 m-auto">
                <Image
                  src={`${
                    Config.baseURL
                  }/${single_value?.images_country[0]?.img_path.replace(
                    "/",
                    ""
                  )}`}
                  alt={item?.country}
                  width={20}
                  height={20}
                />

                {single_value.country}
              </div>
            );
          }
        }
      },
    },
    {
      key: "numberOfGames",
      header: "Matches",
      Component: (item: any) => (
        <div className="flex flex-col justify-center items-center">
          {Array.isArray(item?.numberOfGames) ? (
            <>
              <span>{item?.numberOfGames[0]}</span>
              <span>{item?.numberOfGames[1]}%</span>
            </>
          ) : (
            <span>{item?.numberOfGames}</span>
          )}
        </div>
      ),
    },
  ].filter(Boolean);
  return (
    <div className="w-full">
      <TableComponent
        column={tableHeaders}
        row={data}
        hasSpecialStats={hasSpecialStats}
      />
      ;
    </div>
  );
};

export default ShowNumberOfGoalsStats;
