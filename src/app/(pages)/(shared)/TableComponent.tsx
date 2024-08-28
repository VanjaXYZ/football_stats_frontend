import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableComponent = ({ column, row, hasStickyHeader }: any) => {
  return (
    <Table hasStickyHeader={hasStickyHeader}>
      <TableHeader className="sticky top-0">
        <TableRow className="sticky top-0">
          {column?.map((item: any, index: number) => (
            <TableHead
              key={`header-${index}`}
              className={`uppercase font-bold text-white bg-black text-center ${
                hasStickyHeader && " sticky"
              }`}
            >
              {item?.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="[&>*:nth-child(even)]:bg-gray-600 [&>*:nth-child(odd)]:bg-gray-500">
        {row?.map((item: any, index: number) => (
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
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
