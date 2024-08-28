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
      league?.leagues.toLowerCase().includes(query.toLowerCase()) ||
      league?.country.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <p>Total: {filteredLeagues?.length} leagues</p>
      <TableComponent row={filteredLeagues} column={columnData} />
      {!filteredLeagues.length && <p className="text-center p-20">No data</p>}
    </div>
  );
};

export default FilteredLeagues;
