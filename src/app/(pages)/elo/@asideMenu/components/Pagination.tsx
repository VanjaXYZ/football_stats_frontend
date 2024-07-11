import React from "react";
/*
    Default: neka bude max 10 elemenata prikazanih;
             podijeli citav country response sa 10 i tako prikazi stranice (broj stranica: 1, 2 ... n);
             nakon toga limitiraj prikaz na 10 zemalja po stranici
*/
const Pagination = ({ countries }: { countries: any }) => {
  const leftArrow = "<<";
  const rightArrow = ">>";
  const numberOfPages = Math.round(countries.length / 10);
  return <div></div>;
};

export default Pagination;
