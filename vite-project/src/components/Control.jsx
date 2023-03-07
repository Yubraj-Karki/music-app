import React, { useEffect, useRef, useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { ImPause2, ImShuffle, ImLoop } from "react-icons/im";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import { CiPlay1, CiPause1, CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import { CgPlayListAdd } from "react-icons/cg";

import { SpotifyContext } from "../../context";

const Control = () => {
  const {
    isSongPlaying,
    setIsSongPlaying,
    duration,
    setDuration,
    currentTime,
    setCurrentTime,
    songProgress,
    setSongProgress,
    sliderValue,
    setSliderValue,
  } = useContext(SpotifyContext);

  const audioRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderContainerRef = useRef(null);

  const audio = audioRef.current;

  useEffect(() => {
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
      setSongProgress(updateProgress());
    });

    return () => {
      audio.removeEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime);
        setSongProgress(updateProgress());
      });

      audio.removeEventListener("loadedmetadata", () => {
        setDuration(audio.duration);
      });
    };
  }, [currentTime]);

  const togglePlay = () => {
    if (isSongPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsSongPlaying(!isSongPlaying);
  };

  const formatTime = (duration) => {
    const date = new Date(duration * 1000);
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  const updateProgress = () => {
    const progress = (currentTime / duration) * 100;
    return progress;
  };

  const handleSliderChange = (e) => {
    const value = e.target.value;
    const newTime = (value / duration) * 100;
    setSongProgress(newTime);
    setCurrentTime(newTime);
    audio.currentTime = newTime;

    console.log(value);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-86px bg-[#0C0B39] p-10 pt-5 pb-5">
      <div
        ref={sliderContainerRef}
        className="slider absolute top-0 left-0 right-0 h-[3px] bg-white"
      >
        <input
          ref={sliderRef}
          type="range"
          min="0"
          max="100"
          value={songProgress}
          className="absolute top-0 left-0 right-0 w-full h-[3px] bg-gray-300"
          onChange={handleSliderChange}
          style={{
            background: "yellow",
            transition: ".5s ease",
            // width: `${songProgress}%`,
          }}
        />
      </div>
      {/* <input
        ref={sliderRef}
        type="range"
        min="0"
        max="100"
        step="1"
        value={sliderValue}
        className="absolute top-0 left-0 right-0 w-full h-[3px] bg-gray-300 appearance-none focus:outline-none"
        onClick={updateSliderChange}
        onChange={handleSliderChange}
        style={{
          background: `linear-gradient(to right, #f5e33f 0%, #f5e33f ${songProgress}%, #ddd ${songProgress}%, #ddd 100%)`,
        }}
      /> */}
      <div className="grid grid-cols-3 justify-items-center items-center ">
        <div className="flex items-center justify-between justify-self-start w-[81%]">
          <div className="song-img-container max-h-[47.33px] w-[56.52px]  rounded-[3px] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3310871/pexels-photo-3310871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <audio ref={audioRef} src="/song.mp3" />
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
          <p className="ml-[15%] text-[12px] text-[#BABABA]">
            {formatTime(currentTime)}-{formatTime(duration)}
          </p>
        </div>
        <div className="flex justify-items-center items-center justify-between w-[60%] text-[25px]">
          <ImLoop className="text-[20px]" />
          <RxTrackPrevious className="ml-[20px]" />
          <span className="flex justify-center items-center h-[40px] w-[40px] bg-[#fff] text-black rounded-full">
            {isSongPlaying ? (
              <CiPause1 onClick={togglePlay} />
            ) : (
              <CiPlay1 onClick={togglePlay} />
            )}
          </span>
          <RxTrackNext className="mr-[20px]" />
          <ImShuffle className="text-[20px]" />
        </div>
        <div className="text-[25px] justify-self-end">
          <div className="flex items-center">
            <CgPlayListAdd />

            <CiVolumeHigh className="ml-[15px]" />
            <div className="volume w-[100px] h-[3px] bg-[#D9D9D9] ml-[10px]">
              <div className="relative volume w-[34px] h-[3px] bg-[#F5E33F]">
                <span className="absolute right-0 top-[-3px] rounded-full w-[9px] h-[9px] bg-[#F5E33F]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
