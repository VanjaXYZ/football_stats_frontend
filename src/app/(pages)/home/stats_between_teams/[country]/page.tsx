import React from "react";

const Country = ({ params }: { params: any }) => {
  console.log("Params: ", params);

  return <div>{params?.country}</div>;
};

export default Country;
