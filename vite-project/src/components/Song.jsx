import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Song = () => {
  return (
    <div className="flex flex-row items-center space-y-[5px] space-x-[5px]">
      <div className="song-img-container max-h-[47.33px] w-[56.52px]">
        <img
          src="https://imgs.search.brave.com/aCbef1gsqszeX5le_QgYAhox8VtkOOG0aTvOC0cEWPg/rs:fit:1200:1200:1/g:ce/aHR0cDovL3hoZW5p/Lm1lL2ltYWdlcy9t/dXNpYy9sZWR6ZXBw/ZWxpbjIuSlBH"
          alt=""
        />
      </div>
      <div className="song-title">
        <h3 className="text-[13px] font-bold">Whole Lotta Love</h3>
        <p className="text-[10px] font-normal text-[#BABABA]">Led Zeppelin</p>
      </div>
      <h3 className="album text-[12px] font-normal text-[#BABABA]">
        Whole Lotta Love
      </h3>
      <p className="song-length text-[12px] font-normal text-[#BABABA]">5:36</p>
      <span className="song-heart-icon text-[12px] font-normal text-[#BABABA]">
        <AiFillHeart />
      </span>
    </div>
  );
};

export default Song;
