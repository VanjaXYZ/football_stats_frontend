import React, { Suspense } from "react";
import SearchBar from "./components/SearchBar";
import ListOfCountries from "./components/ListOfCountries";
import Pagination from "./components/Pagination";
import { getCountries } from "@/app/routes/Stats_Between_Teams/routes";

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
    <div className="w-96 p-2">
      <SearchBar />
      <Pagination countries={countries} />
      <Suspense fallback={<p>Loading...</p>} key={query + currentPage}>
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
