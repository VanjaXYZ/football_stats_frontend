import { Suspense } from "react";
import { SearchSpinnerLoading } from "../(shared)/Loaders";
import SearchBar from "../elo/@asideMenu/components/SearchBar";
import FilteredLeagues from "./components/FilteredLeagues";
import leaguesData from "@/lib/leagues-data.json";
import HeroSection from "../(shared)/HeroSection";

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const columnData = [
    {
      key: "country",
      header: "Country",
    },
    {
      key: "first_date",
      header: "Data since",
      Component: (item: any) => (
        <div>{new Date(item?.first_date).toLocaleDateString("en-GB")}</div>
      ),
    },
    {
      key: "leagues",
      header: "League",
    },
  ];

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <>
      <HeroSection />
      <div className="container py-6 space-y-2">
        <SearchBar />
        <Suspense fallback={<SearchSpinnerLoading />} key={query + currentPage}>
          <FilteredLeagues
            query={query}
            leagues={leaguesData}
            columnData={columnData}
          />
        </Suspense>
      </div>
    </>
  );
};

export default Page;
