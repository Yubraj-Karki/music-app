import React from "react";

const Searchbar = () => {
  return (
    <div>
      <input
        className="rounded-full  bg-[#0C0B39] outline-0 p-2.5 pl-10 w-1/2"
        type="text"
        placeholder="Search music, artists, and albums"
      ></input>
    </div>
  );
};

export default Searchbar;
