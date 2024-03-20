import React from "react";
import HeroSection from "../(shared)/HeroSection";
import TableComponent from "../(shared)/TableComponent";

const Homepage = () => {
  const homepageColumnData = [
    {
      key: "homeTeam",
      header: "home",
    },
    {
      key: "awayTeam",
      header: "away",
    },
    {
      key: "_1_quote",
      header: "1",
    },
    {
      key: "_x_quote",
      header: "x",
    },
    {
      key: "_2_quote",
      header: "2",
    },
    {
      key: "date",
      header: "date",
    },
  ];
  const homepageRowData = [
    {
      homeTeam: "Manchester City",
      awayTeam: "Arsenal",
      _1_quote: 1.55,
      _x_quote: 1.26,
      _2_quote: 1.76,
      date: "03.07.2023.",
    },
    {
      homeTeam: "Crystal Palace",
      awayTeam: "Newcastle",
      _1_quote: 3.12,
      _x_quote: 2.01,
      _2_quote: 1.3,
      date: "20.06.2023.",
    },
    {
      homeTeam: "Crystal Palace",
      awayTeam: "Newcastle",
      _1_quote: 3.12,
      _x_quote: 2.01,
      _2_quote: 1.3,
      date: "20.06.2023.",
    },
    {
      homeTeam: "Crystal Palace",
      awayTeam: "Newcastle",
      _1_quote: 3.12,
      _x_quote: 2.01,
      _2_quote: 1.3,
      date: "20.06.2023.",
    },
  ];

  return (
    <main className=" w-full min-h-[100vh]">
      <HeroSection />
      <section>
        <TableComponent column={homepageColumnData} row={homepageRowData} />
      </section>
    </main>
  );
};

export default Homepage;
