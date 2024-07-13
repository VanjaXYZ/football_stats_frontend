import React from "react";
import TableComponent from "../../(shared)/TableComponent";

const FilteredLeagues = ({
  query,
  leagues,
  columnData,
}: {
  query: string;
  leagues: any;
  columnData: any;
}) => {
  const filteredLeagues = leagues?.filter(
    (league: any) =>
      league?.league.toLowerCase().includes(query.toLowerCase()) ||
      league?.country.toLowerCase().includes(query.toLowerCase())
  );
  console.log(filteredLeagues);

  return (
    <div>
      <TableComponent row={filteredLeagues} column={columnData} />
      {!filteredLeagues.length && <p className="text-center p-20">No data</p>}
    </div>
  );
};

export default FilteredLeagues;
