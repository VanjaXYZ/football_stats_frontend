"use client";
import SelectComponent from "@/app/(pages)/(shared)/SelectComponent";
import { useStatsBetweenStore } from "@/store/StatsBetweenStore";
import React from "react";

const SelectCountry = ({ countries }: any) => {
  const { setCountry, stats } = useStatsBetweenStore() as any;
  return (
    <>
      <SelectComponent
        data={countries}
        dataType="country"
        label="Countries"
        setFn={(e: any) => setCountry(e)}
        value={stats.country}
      />
    </>
  );
};

export default SelectCountry;
