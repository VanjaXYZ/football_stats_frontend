import React, { Suspense } from "react";
import SearchBar from "./components/SearchBar";
import ListOfCountries from "./components/ListOfCountries";

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

  return (
    <div className="w-96 p-2">
      <SearchBar />
      <Suspense fallback={<p>Loading...</p>} key={query + currentPage}>
        <ListOfCountries query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
};

export default AsideMenu;
