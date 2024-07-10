"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative">
      <SearchIcon className="absolute top-2 text-slate-400 left-2" />
      <Input placeholder="Search country..." className="ps-10" />
    </div>
  );
};

export default SearchBar;
