import React from "react";
import HeroSection from "../(shared)/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <>
      <HeroSection />
      <h2 className="text-center py-14">Under construction...</h2>
    </>
  );
};

export default About;
