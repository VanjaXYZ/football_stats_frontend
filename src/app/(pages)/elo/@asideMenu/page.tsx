import React, { Suspense } from "react";
import SearchBar from "./components/SearchBar";
import ListOfCountries from "./components/ListOfCountries";
import Pagination from "./components/Pagination";
import { getCountries } from "@/app/routes/Stats_Between_Teams/routes";
import { SearchSpinnerLoading } from "../../(shared)/Loaders";

const AsideMenu = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const countries = await getCountries();

  return (
    <div className="w-[22.5%] p-2 border h-fit border-l-0 border-t-0 space-y-2">
      <SearchBar />
      <Pagination countries={countries} />
      <Suspense fallback={<SearchSpinnerLoading />} key={query + currentPage}>
        <ListOfCountries
          countries={countries}
          query={query}
          currentPage={currentPage}
        />
      </Suspense>
    </div>
  );
};

export default AsideMenu;
