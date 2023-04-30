import React from "react";
import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  return (
    <div className="flex items-center mt-[20px] md:mt-[0px]">
      <input
        className="rounded-full text-[14px] bg-[#121059] outline-0 p-[15px] pl-[70px] w-[320px]"
        type="text"
        placeholder="Search music, artists, and albums"
      ></input>
      <BsSearch className="relative right-[290px]" />
    </div>
  );
};

export default Searchbar;
