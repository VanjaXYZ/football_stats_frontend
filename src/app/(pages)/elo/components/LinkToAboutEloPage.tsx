import Link from "next/link";
import React from "react";

const LinkToAboutEloPage = () => {
  return (
    <div className="flex gap-1">
      <p>Find out more about ELO</p>
      <Link
        href={"/elo/about_elo"}
        className="underline-offset-2 underline decoration-dotted text-blue-600 hover:text-blue-400"
      >
        here
      </Link>
    </div>
  );
};

export default LinkToAboutEloPage;
