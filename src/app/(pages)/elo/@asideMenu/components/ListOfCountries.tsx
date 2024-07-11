import { getCountries } from "@/app/routes/Stats_Between_Teams/routes";
import React from "react";

const ListOfCountries = async ({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) => {
  const countries = await getCountries();
  const filteredCountries = countries?.filter((country: any) =>
    country?.country.toLowerCase().includes(query.toLowerCase())
  );
  console.log("Filtered countries: ", filteredCountries);
  return (
    <div>
      <ul>
        {filteredCountries?.map((country: any, index: number) => (
          <li
            key={`${country}-${index}`}
            className="hover:bg-slate-100 px-2 cursor-pointer"
          >
            {country?.country.replaceAll("_", " ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfCountries;
