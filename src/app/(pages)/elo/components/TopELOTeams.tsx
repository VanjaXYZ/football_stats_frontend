import Image from "next/image";
import TableComponent from "../../(shared)/TableComponent";
import { Config } from "../../../../../Config";

const TopELOTeams = ({ topEloTeams }: { topEloTeams: any }) => {
  const columnsData = [
    {
      key: "team",
      header: "Team",
    },
    {
      key: "country",
      header: "Country",
      Component: (item: any) => (
        <div className="flex items-center justify-center gap-x-6 max-w-32 m-auto flex-col">
          <Image
            src={`${
              Config.baseURL
            }/${item?.country_elo?.images_country[0]?.img_path.replace(
              "/",
              ""
            )}`}
            alt={item?.country_elo?.country}
            width={20}
            height={20}
          />
          {item?.country_elo?.country}
        </div>
      ),
    },
    {
      key: "elo",
      header: "Rating",
    },
  ];
  return (
    <div>
      <h3 className="antialiased text-3xl font-semibold text-center py-2">
        Top 50 Teams
      </h3>
      <div className="max-h-[430px] overflow-y-auto relative">
        <TableComponent
          column={columnsData}
          row={topEloTeams}
          hasStickyHeader
        />
      </div>
    </div>
  );
};

export default TopELOTeams;
