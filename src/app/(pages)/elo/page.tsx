import React from "react";
import HeroSection from "../(shared)/HeroSection";

const Page = async ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default Page;
