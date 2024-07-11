import { getCountries } from "@/app/routes/Stats_Between_Teams/routes";
import Image from "next/image";
import React from "react";
import { Config } from "../../../../../../Config";

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
  console.log("Filtered countries: ", filteredCountries.length);
  return (
    <div>
      <ul className="space-y-2 py-2">
        {filteredCountries?.map((country: any, index: number) => (
          <li
            key={`${country}-${index}`}
            className="hover:bg-slate-100 px-2 cursor-pointer flex gap-2 items-center antialiased"
          >
            <Image
              src={`${
                Config.baseURL
              }/${country?.images_country[0]?.img_path.replace("/", "")}`}
              alt={country?.country}
              width={20}
              height={20}
            />
            {country?.country.replaceAll("_", " ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfCountries;
