import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ImPause2, ImPlay3, ImShuffle, ImLoop } from "react-icons/im";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

const Control = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-86px bg-[#0C0B39] p-10">
      <div className="progress-bar"></div>
      <div className="grid grid-cols-3 justify-items-center items-center ">
        <div className="flex items-center justify-between justify-self-start w-[81%]">
          <div className="song-img-container max-h-[47.33px] w-[56.52px]  rounded-[3px] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3310871/pexels-photo-3310871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="song-title">
            <h3 className="text-[13px] font-bold">Whole Lotta Love</h3>
            <p className="text-[10px] font-normal text-[#BABABA]">
              Led Zeppelin
            </p>
          </div>
          <div className="text-[21px] font-normal text-[#BABABA]">
            <AiOutlineHeart />
          </div>
          <p className="ml-[15%]">4:30-5:36</p>
        </div>
        <div className="flex items-center justify-between w-[75%] text-[25px]">
          <ImLoop />
          <RxTrackPrevious />
          <span className="flex items-center h-[40px] w-[40px] bg-[#fff] text-[#000] rounded-full">
            <ImPause2 />
          </span>
          <RxTrackNext />
          <ImShuffle />
        </div>
        <div>volume</div>
      </div>
    </div>
  );
};

export default Control;
