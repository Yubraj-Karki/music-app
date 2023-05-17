import React, {  useContext } from "react";
import { SpotifyContext } from "../../context";

import { AiFillHeart } from "react-icons/ai";
import { CiPlay1, CiPause1, CiVolumeHigh, CiVolumeMute } from "react-icons/ci";


const Banner = () => {
  const {
 
    isSongPlaying,
    handlePlayPause
  

  } = useContext(SpotifyContext);
  return (
    <div className="bg-[#0C0B39] mt-[40px] mb-[40px] w-[100%] p-[20px] flex  items-center justify-center  justify-between">
      <div className="">
        <div className="flex items-center gap-5">
          <div className="box flex items-center justify-center h-[144px] w-[147px] bg-[#1B1BB5] text-[85px]">
            <AiFillHeart />
          </div>
          <div>
            <p className="text-[13px] font-bold">Playlist</p>
            <h3 className="pageName font-bold text-[32px]">Liked Songs</h3>
            <div className="flex items-center mt-[20px] ">
              <p className="userName font-bold text-[13px]">John.</p>
              <p className="songCount text-[10px] ml-[5px] ">5 songs</p>
            </div>
          </div>
        </div>
      </div>
      <div>

      <span className="cursor-pointer flex justify-center items-center h-[40px] w-[40px] bg-[#fff] text-black rounded-full">
            {isSongPlaying ? (
              <CiPause1 onClick={handlePlayPause} />
            ) : (
              <CiPlay1 onClick={handlePlayPause} />
            )}
      </span>
      </div>
    </div>
  );
};

export default Banner;
