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
  gameTypeHeaderData,
  hasGameTypeHeader,
}: any) => {
  return (
    <Table hasStickyHeader={hasStickyHeader}>
      <StandardTableHeader
        column={column}
        hasStickyHeader={hasStickyHeader}
        hasGameTypeHeader={hasGameTypeHeader}
        gameTypeHeaderData={gameTypeHeaderData}
      />
      <TableBody className="w-full">
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
