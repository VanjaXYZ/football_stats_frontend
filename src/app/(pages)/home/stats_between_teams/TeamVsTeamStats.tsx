import React from "react";
import TableComponent from "../../(shared)/TableComponent";

const TeamVsTeamStats = ({ stats }: { stats: any }) => {
  const headerTableData = [
    {
      key: "",
      header: "Home",
      Component: (item: any) => <span>{item[1]}</span>,
    },
    {
      key: "",
      header: "Away",
      Component: (item: any) => <span>{item[2]}</span>,
    },
    {
      key: "",
      header: "Result",
      Component: (item: any) => <span>{item[3]}</span>,
    },
    {
      key: "",
      header: "Halftime Result",
      Component: (item: any) => <span>{item[4]}</span>,
    },
    {
      key: "",
      header: "Date",
      Component: (item: any) => <span>{item[0]}</span>,
    },
  ];
  return (
    <div className="py-4 space-y-2">
      <h3 className="text-xl font-semibold antialiased">Last 10 games</h3>
      <TableComponent column={headerTableData} row={stats} />
    </div>
  );
};

export default TeamVsTeamStats;
