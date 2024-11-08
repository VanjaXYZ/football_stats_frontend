import { MoveDown, MoveUp } from "lucide-react";
import TableComponent from "../../../(shared)/TableComponent";
import { getPredictedGames } from "../../../../routes/Predicted_games/routes";

export const GamePredictions = async () => {
  const homepageColumnData = [
    {
      key: "home",
      header: "home",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item.home}</span>
          <span>(ELO: {item?.elo_home})</span>
        </div>
      ),
    },
    {
      key: "away",
      header: "away",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span>{item.away}</span>
          <span>(ELO: {item?.elo_away})</span>
        </div>
      ),
    },
    {
      key: "one",
      header: "1",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span
            className={`${
              item?.diference_one > 0 ? "text-green-400" : "text-red-800"
            } text-black flex items-center font-semibold`}
          >
            {Number(item.one).toFixed(2)}
            {item?.diference_one > 0 ? (
              <MoveUp color="#3fd951" size={18} />
            ) : (
              <MoveDown color="#911212" size={18} />
            )}{" "}
            <span className="text-[12px]">({item?.diference_one})</span>
          </span>
          <span>{item?.prediction_home}%</span>
        </div>
      ),
    },
    {
      key: "x",
      header: "x",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span
            className={`${
              item?.diference_x > 0 ? "text-green-400" : "text-red-800"
            } text-black flex items-center font-semibold`}
          >
            {Number(item.x).toFixed(2)}
            {item?.diference_x > 0 ? (
              <MoveUp color="#3fd951" size={18} />
            ) : (
              <MoveDown color="#911212" size={18} />
            )}
            <span className="text-[12px]">({item?.diference_x})</span>
          </span>
          <span>{item?.prediction_draw}%</span>
        </div>
      ),
    },
    {
      key: "two",
      header: "2",
      Component: (item: any) => (
        <div className="flex flex-col items-center">
          <span
            className={`${
              item?.diference_two > 0 ? "text-green-400" : "text-red-800"
            } text-black flex items-center font-semibold`}
          >
            {Number(item.two).toFixed(2)}
            {item?.diference_two > 0 ? (
              <MoveUp color="#3fd951" size={18} />
            ) : (
              <MoveDown color="#911212" size={18} />
            )}
            <span className="text-[12px]">({item?.diference_two})</span>
          </span>
          <span>{item?.prediction_away}%</span>
        </div>
      ),
    },
    {
      key: "date",
      header: "date",
    },
    {
      key: "time",
      header: "time",
    },
  ];
  const predictedGames = await getPredictedGames();
  return (
    <>
      <h2 className="text-center font-bold text-4xl uppercase py-8">
        Game predictions
      </h2>
      {predictedGames ? (
        <TableComponent column={homepageColumnData} row={predictedGames} />
      ) : (
        <p className="text-center p-20">No data</p>
      )}
    </>
  );
};
