import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const StandardTableRow = ({ index, column, item }: any) => {
  return (
    <TableRow key={`row-${index}`}>
      {column?.map((data: any, cellIndex: number) => (
        <TableCell
          key={`cellID-${cellIndex}`}
          className="text-center font-semibold p-1"
        >
          {data?.Component ? data?.Component(item) : item[data?.key]}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default StandardTableRow;
