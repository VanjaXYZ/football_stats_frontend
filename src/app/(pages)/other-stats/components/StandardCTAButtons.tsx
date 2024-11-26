"use client";
import React from "react";
import CTAButton from "./CTAButton";
import { useFetchOtherStatsData } from "@/app/hooks/actions";
import { Config } from "../../../../../Config";
import { useOtherStats } from "@/store/OtherStatsStore";

const StandardCTAButtons = () => {
  const { data, loading, error, fetchData } = useFetchOtherStatsData();
  const { otherStats } = useOtherStats() as any;
  return (
    <section className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5 px-4">
      <CTAButton
        text="No Goals"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/no_goals`,
            "no_goals",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="0-1"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/one_goal_or_less`,
            "zero_to_one",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="0-2"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/two_goal_or_less`,
            "zero_to_two",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="3+"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/plus_3`,
            "three_plus",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="4+"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/plus_4`,
            "four_plus",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="5+"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/plus_5`,
            "five_plus",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="6+"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/plus_6`,
            "six_plus",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="7+"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/plus_7`,
            "seven_plus",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="1/1"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/one_to_one`,
            "one_to_one",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="2/2"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/two_to_two`,
            "two_to_two",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="x/x"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/x_to_x`,
            "x_to_x",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="1/x"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/one_to_x`,
            "one_to_x",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="x/1"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/x_to_one`,
            "x_to_one",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="2/x"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/two_to_x`,
            "two_to_x",
            otherStats.country
          )
        }
      />
      <CTAButton
        text="x/2"
        onClickFn={() =>
          fetchData(
            `${Config.baseURL}/stats/x_to_two`,
            "x_to_two",
            otherStats.country
          )
        }
      />
    </section>
  );
};

export default StandardCTAButtons;
