"use server";
import axios from "axios";
import { Config } from "../../../../Config";

export const getRandomThreeStats = async () => {
  try {
    const response = await axios.get(
      `${Config.baseURL}/random-three/random_three_stats`
    );
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.error(error);
  }
};
