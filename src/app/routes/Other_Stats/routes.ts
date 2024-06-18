"use server";
import axios from "axios";
import { Config } from "../../../../Config";
import { revalidatePath } from "next/cache";

export const getOverallStats = async (url?: string, country?: string) => {
  const hasCountry = country ? `/${country}` : "";
  try {
    const response = await axios.get(`${Config.baseURL}/${url}${hasCountry}`);
    if (response?.status === 200) {
      return response.data;
    }
  } catch (error: any) {
    // throw new Error("Oops! There was a problem fetching data...", error);
    console.error(error);
  }
};
