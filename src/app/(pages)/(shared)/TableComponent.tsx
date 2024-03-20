import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TableComponent = ({ column, row }: any) => {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          {column?.map((item: any, index: number) => (
            <TableHead
              key={`header-${index}`}
              className="uppercase font-bold text-white bg-black text-center"
            >
              {item?.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="[&>*:nth-child(even)]:bg-gray-400 [&>*:nth-child(odd)]:bg-gray-300">
        {row?.map((item: any, index: number) => (
          <TableRow key={`row-${index}`}>
            {column?.map((data: any, cellIndex: number) => (
              <TableCell
                key={`cellID-${cellIndex}`}
                className="text-center font-semibold"
              >
                {item[data.key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
