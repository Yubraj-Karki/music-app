import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Control = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-86px bg-[#0C0B39] p-10">
      <div className="progress-bar"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-[16vw]">
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
        </div>
        <div>
          <p>4:30-5:36</p>
          volume
        </div>
      </div>
    </div>
  );
};

export default Control;
