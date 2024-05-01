"use server";
import axios from "axios";
import { Config } from "../../../../Config";

// Get list of available countries
export const getCountries = async () => {
  try {
    const response = await axios.get(`${Config.baseURL}/country/get_countries`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.error(error);
  }
};

// Get list of teams from chosen country
export const getTeams = async (country: any) => {
  try {
    const response = await axios.get(`${Config.baseURL}/teams/${country}`);
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.error(error);
  }
};

// Get list of games between chosen teams
export const getStatsBetweenTeams = async (
  country: string,
  team_1: string,
  team_2: string
) => {
  try {
    const response = await axios.get(
      `${Config.baseURL}/teams/between_teams/${country}/${team_1}/${team_2}`
    );
    if (response?.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.error(error);
  }
};
