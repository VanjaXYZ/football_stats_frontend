"use client";
import { SmallTableLoading } from "@/app/(pages)/(shared)/Loaders";
import { getRandomThreeStats } from "@/app/routes/Random_Three_Stats/routes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Config } from "../../../../../../../Config";
import { useRouter } from "next/navigation";
import { useSingleTeamStats } from "@/store/SingleTeamStore";

const columns = [
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
            <div className="flex items-center justify-center gap-x-6 max-w-32 m-auto flex-col">
              {" "}
              <Image
                src={`${Config.baseURL}/${item?.stats[
                  key
                ]?.images_country[0]?.img_path?.replace("/", "")}`}
                alt={item?.stats[key]?.country}
                width={20}
                height={20}
              />
              <p>{item?.stats[key]?.country}</p>
            </div>
          );
        }
      }
      return null;
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

const RandomThreeTable = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { push } = useRouter();
  const { setSingleTeamCountry, setSingleTeam } = useSingleTeamStats() as any;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stats = await getRandomThreeStats();
        setData(stats?.random_three);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSingleTeamStats = (item: any) => {
    let country = "";
    setSingleTeam(item?.stats?.team);
    for (let key in item?.stats) {
      if (item?.stats[key]?.country) {
        setSingleTeamCountry(item?.stats[key]?.country);
        country = item?.stats[key]?.country;
      }
    }

    country && push(`home/team_stats?=${country}&team=${item?.stats?.team}`);
  };

  return (
    <>
      <h2 className="text-center font-bold text-4xl uppercase py-8">
        Random stats
      </h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 px-2 md:gap-6 whitespace-nowrap">
          <SmallTableLoading />
          <SmallTableLoading />
          <SmallTableLoading />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 px-2 md:gap-6 whitespace-nowrap">
          {data?.map((stats: any, index: number) => (
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
                  >
                    {columns?.map((column: any, colIndex: number) => (
                      <TableCell
                        key={`cell-${rowIndex}-${colIndex}`}
                        className="text-center p-1"
                      >
                        {column?.Component
                          ? column?.Component(row)
                          : row[column.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ))}
        </div>
      )}
    </>
  );
};

export default RandomThreeTable;
