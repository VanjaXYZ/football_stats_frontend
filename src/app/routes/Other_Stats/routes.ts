"use server";
import axios from "axios";
import { Config } from "../../../../Config";

export const getOverallStats = async (url?: string) => {
  try {
    const response = await axios.get(`${Config.baseURL}/${url}`);
    if (response?.status === 200) {
      console.log(response?.data);
      return response.data;
    }
  } catch (error: any) {
    // throw new Error("Oops! There was a problem fetching data...", error);
    console.error(error);
  }
};
