import React from "react";

const Searchbar = () => {
  return (
    <div>
      <input
        className="rounded-full text-[11px] bg-[#121059] outline-0 p-[18px] pl-[30px] w-[37%]"
        type="text"
        placeholder="Search music, artists, and albums"
      ></input>
    </div>
  );
};

export default Searchbar;
