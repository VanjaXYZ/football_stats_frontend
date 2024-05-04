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
                {item?.country}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectCountry;
