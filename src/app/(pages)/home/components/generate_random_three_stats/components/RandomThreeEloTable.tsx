import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import React from "react";
import { Config } from "../../../../../../../Config";
import { useRouter } from "next/navigation";
import { useSingleTeamStats } from "@/store/SingleTeamStore";

interface Team {
  team: string;
  country_elo: {
    country: string;
    images_country: Array<{ img_path: string }>;
  };
  elo: string;
  last_date: string;
  matched_played: number;
}

interface Column<T> {
  key: string;
  header: string;
  Component?: (item: T) => JSX.Element;
}

const columns: Column<Team>[] = [
  {
    key: "team",
    header: "Team",
    Component: (item: Team) => <div>{item?.team}</div>,
  },
  {
    key: "country_elo",
    header: "Country",
    Component: (item: Team) => (
      <div className="flex items-center justify-center gap-x-6 max-w-32 m-auto flex-col">
        <Image
          src={`${
            Config.baseURL
          }/${item?.country_elo?.images_country[0]?.img_path?.replace(
            "/",
            ""
          )}`}
          width={20}
          height={20}
          alt={item?.country_elo?.country}
        />
        <p>{item?.country_elo?.country}</p>
      </div>
    ),
  },
  {
    key: "elo",
    header: "Matches",
    Component: (item: Team) => <div>{item?.elo}</div>,
  },
];

const RandomThreeEloTable = ({ data }: any) => {
  const { push } = useRouter();
  const { setSingleTeamCountry, setSingleTeam } = useSingleTeamStats() as any;
  const handleSingleTeamStats = (item: Team) => {
    setSingleTeamCountry(item?.country_elo?.country);
    setSingleTeam(item?.team);
    push(`home/team_stats?=${item?.country_elo?.country}&team=${item?.team}`);
  };
  return data?.map((stats: any, index: number) => (
    <Table key={index}>
      <TableHeader>
        <TableRow>
          {columns?.map((column: any, colIndex: number) => (
            <TableHead
              key={`header-${colIndex}`}
              className="uppercase font-bold text-white bg-black text-center"
            >
              {column?.header || "N/A"}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {stats?.map((row: any, rowIndex: number) => (
          <TableRow
            key={`row-${rowIndex}`}
            onClick={() => handleSingleTeamStats(row)}
            className="cursor-pointer"
          >
            {columns?.map((column: any, colIndex: number) => (
              <TableCell
                key={`cell-${rowIndex}-${colIndex}`}
                className="text-center p-1"
              >
                {column?.Component ? column?.Component(row) : row[column.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ));
};

export default RandomThreeEloTable;
