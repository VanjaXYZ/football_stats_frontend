import React from "react";

const Page = async ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full">{children}</div>;
};

export default Page;
