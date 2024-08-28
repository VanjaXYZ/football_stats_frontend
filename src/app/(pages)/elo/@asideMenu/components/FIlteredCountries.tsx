"use client";
import { useEloRatingStore } from "@/store/EloRatingStore";
import Image from "next/image";
import { Config } from "../../../../../../Config";

const FilteredCountries = ({ filteredCountries }: any) => {
  const { setCountry } = useEloRatingStore() as any;
  const handleEloCountry = async (e: string | any) => {
    setCountry(e.target.innerText);
  };
  return (
    <ul className="space-y-2 py-2 max-h-96 overflow-y-auto">
      {filteredCountries?.map((country: any, index: number) => (
        <li
          key={`${country}-${index}`}
          className="hover:bg-slate-500 rounded transition-colors px-2 cursor-pointer flex gap-2 items-center antialiased"
          onClick={(e) => handleEloCountry(e)}
        >
          <Image
            src={`${
              Config.baseURL
            }/${country?.images_country[0]?.img_path.replace("/", "")}`}
            alt={country?.country}
            width={20}
            height={20}
          />
          {country?.country}
        </li>
      ))}
    </ul>
  );
};

export default FilteredCountries;
