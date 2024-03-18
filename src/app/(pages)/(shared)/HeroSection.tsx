import React from "react";
import HERO_IMAGE from "@/assets/hero_section.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative z-0 pb-10">
      <h1 className="uppercase text-6xl font-bold  pt-24 text-center text-white">
        Football-Stats
      </h1>
      <div className="text-center max-w-sm mx-auto mt-6 text-white text-2xl justify-center flex-wrap items-center py-8 px-2 flex gap-8 font-semibold">
        <span>3+</span>
        <span>4+</span>
        <span>5+</span>
        <span>6+</span>
        <span>7+</span>
        <span>0-1</span>
        <span>0-2</span>
        <span>2-1/1-2</span>
      </div>
      <div className="absolute top-0 w-full h-full -z-30">
        <Image
          src={HERO_IMAGE}
          alt="hero_image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
