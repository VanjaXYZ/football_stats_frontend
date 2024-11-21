"use client";
import { SmallTableLoading } from "@/app/(pages)/(shared)/Loaders";
import { getRandomThreeStatsElo } from "@/app/routes/Random_Three_Stats_ELO/routes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSingleTeamStats } from "@/store/SingleTeamStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const columns = [
  {
    key: "team",
    header: "Team",
    Component: (item: any) => <div>{item?.team}</div>,
  },
  {
    key: "country_elo",
    header: "Country",
    Component: (item: any) => <div>{item?.country_elo?.country}</div>,
  },
  {
    key: "elo",
    header: "Matches",
    Component: (item: any) => <div>{item?.elo}</div>,
  },
];

const RandomThreeElo = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { push } = useRouter();
  const { setSingleTeamCountry, setSingleTeam } = useSingleTeamStats() as any;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stats = await getRandomThreeStatsElo();
        setData(stats?.random_three_elo);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSingleTeamStats = (item: any) => {
    setSingleTeamCountry(item?.country_elo?.country);
    setSingleTeam(item?.team);
    push(`home/team_stats?=${item?.country_elo?.country}&team=${item?.team}`);
  };

  return (
    <>
      <h2 className="text-center font-bold text-4xl uppercase py-8">
        Random ELO Ratings
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
                    className="cursor-pointer"
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

export default RandomThreeElo;
