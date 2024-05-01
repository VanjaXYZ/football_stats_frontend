"use server";
import axios from "axios";
import { Config } from "../../../../Config";

export const getPredictedGames = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/quotes`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.error(error);
  }
};
