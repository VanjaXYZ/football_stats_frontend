import FilteredCountries from "./FIlteredCountries";

const ListOfCountries = async ({
  query,
  currentPage,
  countries,
}: {
  query: string;
  currentPage: number;
  countries: any;
}) => {
  const filteredCountries = countries?.filter((country: any) =>
    country?.country.toLowerCase().includes(query.toLowerCase())
  );
  return <>{<FilteredCountries filteredCountries={filteredCountries} />}</>;
};

export default ListOfCountries;
