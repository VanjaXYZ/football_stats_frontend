"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOtherStats } from "@/store/OtherStatsStore";
import Image from "next/image";
import { Config } from "../../../../../Config";
import { getOverallStats } from "@/app/routes/Other_Stats/routes";
import { useEffect } from "react";

const SelectOtherStatsCountry = ({ countries, setStatsData }: any) => {
  const { otherStats, setOtherStatsCountry } = useOtherStats() as any;

  const onGetCountryStats = async (e: any) => {
    setOtherStatsCountry(e);
    const data = await getOverallStats(
      otherStats.activeUrl,
      otherStats.country
    );
    setStatsData(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getOverallStats(
        otherStats.activeUrl,
        otherStats.country
      );
      setStatsData(data);
    };

    fetchData();
  }, [otherStats]);
  return (
    <>
      <Select onValueChange={onGetCountryStats} value={otherStats.country}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={`Select country`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Country</SelectLabel>
            <SelectItem value={" "} key={"nullValue"}>
              None
            </SelectItem>
            {countries?.map((item: any) => (
              <SelectItem value={item?.country} key={item?.country}>
                <div className="flex gap-2">
                  {item?.images_country[0]?.img_path && (
                    <Image
                      src={`${
                        Config.baseURL
                      }/${item?.images_country[0]?.img_path.replace("/", "")}`}
                      alt={item?.country}
                      width={20}
                      height={20}
                    />
                  )}
                  {item?.country}
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectOtherStatsCountry;
