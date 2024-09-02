import { Table, TableBody } from "@/components/ui/table";
import SpecialStatsRow from "./SpecialStatsRow";
import StandardTableHeader from "./StandardTableHeader";
import StandardTableRow from "./StandardTableRow";

const TableComponent = ({
  column,
  row,
  hasStickyHeader,
  hasSpecialStats,
  specialHeaders,
}: any) => {
  return (
    <Table hasStickyHeader={hasStickyHeader}>
      <StandardTableHeader column={column} hasStickyHeader={hasStickyHeader} />
      <TableBody className="">
        {row?.map((item: any, index: number) =>
          hasSpecialStats ? (
            <SpecialStatsRow
              index={index}
              column={column}
              item={item}
              key={index}
              specialHeaders={specialHeaders}
            />
          ) : (
            <StandardTableRow
              index={index}
              column={column}
              item={item}
              key={index}
            />
          )
        )}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
