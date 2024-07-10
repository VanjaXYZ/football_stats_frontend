import React from "react";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 text-center bg-gray-500/40 font-semibold mt-10">
      &copy; {new Date().getFullYear()}. Designed by <b>Tea Jaćimović</b> for{" "}
      <b>Boris Bašić</b>. All rights reserved.
    </footer>
  );
};

export default Footer;
