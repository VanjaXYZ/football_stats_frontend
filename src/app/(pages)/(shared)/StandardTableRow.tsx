import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";

const StandardTableRow = ({ index, column, item, isLink }: any) => {
  return (
    <TableRow key={`row-${index}`}>
      {column?.map((data: any, cellIndex: number) =>
        isLink ? (
          <TableCell key={`cellID-${cellIndex}`} className="text-center p-1">
            <Link href={""} className="text-center" target="_blank">
              {data?.Component ? data?.Component(item) : item[data?.key]}
              {("Team: ", item)}
            </Link>
          </TableCell>
        ) : (
          <TableCell key={`cellID-${cellIndex}`} className="text-center p-1">
            {data?.Component ? data?.Component(item) : item[data?.key]}
          </TableCell>
        )
      )}
    </TableRow>
  );
};

export default StandardTableRow;
