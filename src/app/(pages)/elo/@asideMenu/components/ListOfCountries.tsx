import { getCountries } from "@/app/routes/Stats_Between_Teams/routes";
import React from "react";

const ListOfCountries = async () => {
  const countries = await getCountries();
  return (
    <div>
      <ul>
        {countries?.map((country: any) => (
          <li key={country} className="hover:bg-slate-100 px-2 cursor-pointer">
            {country?.country.replaceAll("_", " ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfCountries;
