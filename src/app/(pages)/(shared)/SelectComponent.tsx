"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectComponent = ({ data, dataType, label, setFn, value }: any) => {
  return (
    <Select onValueChange={(e: any) => setFn(e)} value={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={`Select ${dataType}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {data?.map((item: any) => (
            <SelectItem value={item} key={item?.country}>
              {item.country}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
