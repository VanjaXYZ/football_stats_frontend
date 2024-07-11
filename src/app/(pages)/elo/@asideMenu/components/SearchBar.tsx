"use client";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    console.log("Searching... ", term);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);
  return (
    <div className="relative">
      <SearchIcon className="absolute top-2 text-slate-400 left-2" />
      <Input
        placeholder="Search country..."
        className="ps-10"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};

export default SearchBar;
