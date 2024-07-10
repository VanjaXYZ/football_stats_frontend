"use server";
import axios from "axios";
import { Config } from "../../../../Config";

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
