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
  const { setCountry, stats } = useStatsBetweenStore() as any;
  return (
    <>
      <Select onValueChange={(e: any) => setCountry(e)} value={stats.country}>
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
