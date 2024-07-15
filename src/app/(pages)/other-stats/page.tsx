import { getCountries } from "@/app/routes/Stats_Between_Teams/routes";
import HeroSection from "../(shared)/HeroSection";
import NumberOfGoals from "./components/NumberOfGoals";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Other stats",
};

const OtherStats = async () => {
  let countries = await getCountries();
  return (
    <>
      <HeroSection />
      <div className="container">
        {/* <NumberOfGoals countries={countries} /> */}
        <p>Under construction...</p>
      </div>
    </>
  );
};

export default OtherStats;
