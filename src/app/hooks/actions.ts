"use client";
import { useOtherStats } from "@/store/OtherStatsStore";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import SelectOtherStatsCountry from "../(pages)/other-stats/components/SelectOtherStatsCountry";

export const useFetchOtherStatsData = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setOverallData } = useOtherStats() as any;
  const searchParams = useSearchParams() as any;
  const pathname = usePathname();
  const { replace } = useRouter();
  const { otherStats, setOtherStatsCountry } = useOtherStats() as any;

  // Funkcija za ručni API poziv
  const fetchData = async (url: string, text?: string, country?: string) => {
    setLoading(true);
    setError(null);
    const params = new URLSearchParams(searchParams);
    try {
      const response = await axios.get<T>(
        `${url}${country ? `/${country}` : ""}`
      );
      setData(response.data);
      setOverallData(response.data);
      if (otherStats?.country === " ") {
        params.delete("country");
      }
      if (text) {
        params.set("stats", text);
      } else {
        params.delete("stats");
      }

      replace(`${pathname}?${params.toString()}`);
      setOtherStatsCountry(" ");
    } catch (error: any) {
      setError(error.message || "Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};
