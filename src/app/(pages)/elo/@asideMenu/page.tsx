import { getCountries } from "@/app/routes/Stats_Between_Teams/routes";
import { Suspense } from "react";
import { SearchSpinnerLoading } from "../../(shared)/Loaders";
import ListOfCountries from "./components/ListOfCountries";
import SearchBar from "./components/SearchBar";

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
    <div className="w-[22.5%] p-2 shadow-2xl h-[491px] border-l-0 border-t-0 space-y-2 rounded-ee">
      <SearchBar />
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
