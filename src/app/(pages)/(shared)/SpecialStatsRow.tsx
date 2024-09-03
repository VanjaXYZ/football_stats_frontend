"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import axios from "axios";
import { useState } from "react";
import { Config } from "../../../../Config";

const SpecialStatsRow = ({ index, column, item }: any) => {
  const [specialStats, setSpecialStats] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  let specialStatsCountry = item?.country_2_to_1?.country
    ? item?.country_2_to_1?.country
    : item?.country_plus_7_all?.country;

  let specialStatsURL = item?.country_2_to_1?.country ? "2_1" : "plus_7";

  const handleGamesPlayed = async (
    country: string,
    team_1: string,
    team_2: string
  ) => {
    try {
      const response = await axios.get(
        `${Config.baseURL}/stats/dates_of_games_${specialStatsURL}/${country}/${team_1}/${team_2}`
      );
      if (response.status === 200) {
        setSpecialStats(response.data);
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TableRow
        key={`row-${index}`}
        onClick={() => setIsOpen((prevValue: boolean) => !prevValue)}
        className="cursor-pointer"
      >
        {column?.map((data: any, cellIndex: number) => (
          <TableCell
            key={`cellID-${cellIndex}`}
            className="text-center font-semibold p-1"
            onClick={() =>
              handleGamesPlayed(specialStatsCountry, item.team_1, item.team_2)
            }
          >
            {data?.Component ? data?.Component(item) : item[data?.key]}
          </TableCell>
        ))}
      </TableRow>

      {isOpen && (
        <TableRow className="w-full flex border-b-0 flex-col">
          {/* {specialHeaders?.map((stats: any, index: number) => */}
          {specialStats?.map((special: any, indexSpecial: number) => (
            <TableCell key={indexSpecial} className="w-full">
              <div className="w-full flex gap-2">
                <span className="w-fit font-semibold text-xs">
                  Result: {special?.result}
                </span>
                <span className="w-fit font-semibold text-xs">
                  Halftime: {special?.halfTime}
                </span>
                <span className="w-fit font-semibold text-xs">
                  Date: {new Date(special?.date).toLocaleDateString("en-Gb")}
                </span>
              </div>
            </TableCell>
          ))}
          {/* // )} */}
        </TableRow>
      )}
    </>
  );
};

export default SpecialStatsRow;
