import React from "react";
import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  return (
    <div className="flex items-center">
      <input
        className="rounded-full text-[11px] bg-[#121059] outline-0 p-[18px] pl-[70px] w-[25vw]"
        type="text"
        placeholder="Search music, artists, and albums"
      ></input>
      <BsSearch className="relative right-[22vw]" />
    </div>
  );
};

export default Searchbar;
