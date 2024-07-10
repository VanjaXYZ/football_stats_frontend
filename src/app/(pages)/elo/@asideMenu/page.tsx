import React from "react";
import SearchBar from "./components/SearchBar";
import ListOfCountries from "./components/ListOfCountries";

const AsideMenu = () => {
  return (
    <div className="w-96 p-2">
      <SearchBar />
      <ListOfCountries />
    </div>
  );
};

export default AsideMenu;
