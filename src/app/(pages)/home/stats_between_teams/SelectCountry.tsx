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
import { useStatsBetweenStore } from "@/store/StatsBetweenStore";
import Image from "next/image";
import { Config } from "../../../../../Config";

const SelectCountry = ({ countries }: any) => {
  const { setCountry, setHomeTeam, setAwayTeam, stats } =
    useStatsBetweenStore() as any;
  const onSetCountry = (e: string) => {
    setCountry(e);
    setHomeTeam("");
    setAwayTeam("");
  };

  return (
    <>
      <Select onValueChange={onSetCountry} value={stats.country}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={`Select country`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Country</SelectLabel>
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

export default SelectCountry;
