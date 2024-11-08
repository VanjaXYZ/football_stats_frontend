import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

const StandardTableHeader = ({
  column,
  hasStickyHeader,
  hasGameTypeHeader,
  gameTypeHeaderData,
}: any) => {
  return (
    <TableHeader className="sticky top-0">
      {/* {hasGameTypeHeader && (
        <TableRow className="w-full">
          <TableHead className="uppercase font-bold text-white w-full bg-black text-center">
            {gameTypeHeaderData}
          </TableHead>
        </TableRow>
      )} */}

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
  );
};

export default StandardTableHeader;
