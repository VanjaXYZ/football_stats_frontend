"use server";
import axios from "axios";
import { Config } from "../../../../Config";
import { revalidatePath } from "next/cache";

export const getBestELOTeams = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/elo/best_elo`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getEloCountry = async ({ country }: { country: string }) => {
  try {
    const response = await axios.get(
      `${Config.baseURL}/elo/elo_country/${country}`
    );
    if (response?.status === 200) {
      revalidatePath("/elo");
      return response?.data;
    }
  } catch (error) {
    console.error(error);
  }
};
