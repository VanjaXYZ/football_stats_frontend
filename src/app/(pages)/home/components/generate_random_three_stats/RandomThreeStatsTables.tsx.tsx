import TableComponent from "@/app/(pages)/(shared)/TableComponent";
import Image from "next/image";
import { Config } from "../../../../../../Config";

const RandomThreeStatsTables = async ({ data }: any) => {
  const columndData = [
    {
      key: "team",
      header: "Team",
      Component: (item: any) => <div>{item.stats.team}</div>,
    },
    {
      key: "country",
      header: "Country",
      Component: (item: any) => {
        for (let key in item?.stats) {
          if (item?.stats[key]?.country) {
            return (
              <div className="flex items-center justify-center gap-x-6 max-w-32 m-auto flex-col">
                {" "}
                <Image
                  src={`${Config.baseURL}/${item?.stats[
                    key
                  ]?.images_country[0]?.img_path?.replace("/", "")}`}
                  alt={item?.stats[key]?.country}
                  width={20}
                  height={20}
                />
                <p>{item?.stats[key]?.country}</p>
              </div>
            );
          }
        }
        return null; // Return null if no country is found
      },
    },
    {
      key: "numberOfGames",
      header: "Matches",
      Component: (item: any) => (
        <div className="flex flex-col items-center justify-center">
          <span>{item.stats.numberOfGames[0]}</span>
          <span>{item.stats.numberOfGames[1]}%</span>
        </div>
      ),
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 px-2 md:gap-6 whitespace-nowrap">
      {data?.random_three?.map((randomStats: any, index: number) => (
        <div className="w-full" key={index}>
          <h2 className="text-center text-2xl text-black font-bold uppercase">
            {randomStats[index]?.type}
          </h2>
          <TableComponent
            column={columndData}
            row={randomStats}
            gameTypeHeaderData={randomStats[index]?.type}
            hasGameTypeHeader
            isLink
            team={randomStats[index]?.stats}
          />
        </div>
      ))}
    </div>
  );
};

export default RandomThreeStatsTables;
