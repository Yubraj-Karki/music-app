import React, { useContext, useEffect, useRef } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CgPlayListAdd } from "react-icons/cg";
import { CiPause1, CiPlay1, CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import { ImLoop, ImShuffle } from "react-icons/im";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";

import { SpotifyContext } from "../../context";

const Control = () => {
  const {
    currentSong,
    setCurrentSong,
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
    isSongLooping,
    setIsSongLooping,
    volumeSliderValue,
    setVolumeSliderValue,
    songVolume,
    setSongVolume,
    isMuted,
    setIsMuted,
    isLiked,
    setIsLiked,
    handlePlayPause,
    audioRef,
    handleLike,
    likedSongs,
  } = useContext(SpotifyContext);

  const sliderRef = useRef(null);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // Callback functions
    const handleLoadedMetaData = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setSliderValue(updateProgress());
    };

    // Event listeners
    audio.addEventListener("loadedmetadata", handleLoadedMetaData);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      // Clean up functions
      audio.removeEventListener("loadedmetadata", handleLoadedMetaData);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [currentTime]);

  const toggleLoop = () => {
    const audio = audioRef.current;

    const handleSongEnd = () => {
      setCurrentTime(0);
      audio.currentTime = 0;
      audio.play();
    };

    setIsSongLooping(!isSongLooping);
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleSongEnd = () => {
      setCurrentTime(0);
      audio.currentTime = 0;
      audio.play();
    };

    if (!isSongLooping) {
      audio.removeEventListener("ended", handleSongEnd);
      console.log("removing event listener");
    } else {
      audio.addEventListener("ended", handleSongEnd);
      console.log("adding event listener");
    }

    return () => {
      // Clean up functions

      audio.removeEventListener("ended", handleSongEnd);
    };
  }, [isSongLooping]);

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
    const audio = audioRef.current;

    const value = e.target.value;
    const newTime = (value / 100) * duration;
    setSliderValue(newTime);
    setCurrentTime(newTime);
    audio.currentTime = newTime;

    console.log(value);
  };

  const handleVolumeSliderChange = (e) => {
    const audio = audioRef.current;
    const volumeSliderValue = e.target.value;
    const songVolume = volumeSliderValue / 100;
    setVolumeSliderValue(volumeSliderValue);

    console.log(songVolume);

    if (isMuted) {
      audio.volume = 0;
    } else {
      audio.volume = songVolume;
    }

    setSongVolume(songVolume);

    if (songVolume <= 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    console.log(isMuted, "top");
    const audio = audioRef.current;
    if (isMuted) {
      audio.volume = 0.9;
      setVolumeSliderValue(volumeSliderValue);
    } else {
      audio.volume = 0;
    }
    setIsMuted(!isMuted);
    console.log(isMuted, "bottom");
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
          value={sliderValue}
          className="cursor-pointer appearance-none absolute top-0 left-0 right-0 w-full h-[3px] bg-gray-300"
          onChange={handleSliderChange}
          style={{
            transition: ".5s ease",
          }}
        />
      </div>

      <div className="grid grid-cols-3 justify-items-center items-center ">
        <div className=" flex items-center justify-between justify-self-start w-[89%]">
          <div className="relative song-img-container h-[47.33px] w-[56.52px] mr-[6px] rounded-[3px] overflow-hidden">
            <img
              src={currentSong.img}
              alt=""
              className="absolute animate-spin-slow w-full h-full  object-cover"
            />
            <audio ref={audioRef} src={currentSong.src} />
          </div>
          <div className="song-title">
            <h3 className="text-[13px] font-bold">{currentSong.name}</h3>
            <p className="text-[10px] font-normal text-[#BABABA]">
              {currentSong.album}
            </p>
          </div>
          <div
            onClick={() => handleLike(currentSong.id)}
            className="cursor-pointer text-[21px] font-normal text-[#BABABA]"
          >
            {/* {isLiked ? (
              <AiFillHeart style={{ color: "red" }} />
            ) : (
              <AiOutlineHeart />
            )} */}

            {/* {likedSongs.find((song)=>song.id==currentSong.id) && likedSongs[index]?<AiFillHeart style={{ color: "red" }} />: <AiOutlineHeart />} */}

            {likedSongs &&
            likedSongs.some((song) => song.id === currentSong.id) ? (
              <AiFillHeart style={{ color: "red" }} />
            ) : (
              <AiOutlineHeart />
            )}
          </div>
          <p className="ml-[15%] text-[12px] text-[#BABABA]">
            {formatTime(currentTime)}-{formatTime(duration)}
          </p>
        </div>
        <div className="flex justify-items-center items-center justify-between w-[60%] text-[25px]">
          <span style={{ color: isSongLooping && "#F5E33F" }}>
            <ImLoop
              onClick={toggleLoop}
              className="cursor-pointer text-[20px]"
            />
            {isSongLooping && (
              <span className="block bg-[#F5E33F] mx-auto h-[3px] w-[3px] rounded-full"></span>
            )}
          </span>
          <RxTrackPrevious className="cursor-pointer ml-[20px]" />
          <span className="cursor-pointer flex justify-center items-center h-[40px] w-[40px] bg-[#fff] text-black rounded-full">
            {isSongPlaying ? (
              <CiPause1 onClick={handlePlayPause} />
            ) : (
              <CiPlay1 onClick={handlePlayPause} />
            )}
          </span>
          <RxTrackNext className="cursor-pointer mr-[20px]" />
          <ImShuffle className="cursor-pointer text-[20px]" />
        </div>
        <div className="text-[25px] justify-self-end">
          <div className="flex items-center relative">
            <CgPlayListAdd className="cursor-pointer" />
            <div className="bg-[#1b1bb5] absolute rounded-[7px] shadow-lg top-[-60px] text-[13px]">
              <div className="relative group">
                <button className="px-[10px] py-[5px]">Add to playlist</button>

                <div className="group-hover:flex bg-[#1b1bb5] align-items-start  hidden flex-col  absolute rounded-[7px] left-[-150px] shadow-lg top-[-80px]">
                  <button className="p-[5px]">Create playlist</button>
                  <button className="p-[5px]">Add to Playlist #1</button>
                  <button className="p-[5px]">Add to Playlist #2</button>
                </div>
              </div>
              <button className="px-[10px] py-[15px]">
                Save to your liked songs
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div onClick={toggleMute}>
                {isMuted ? (
                  <CiVolumeMute className="cursor-pointer ml-[15px]" />
                ) : (
                  <CiVolumeHigh className="cursor-pointer ml-[15px]" />
                )}
              </div>
              <div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volumeSliderValue}
                  className="cursor-pointer right-0 w-full h-[3px] bg-gray-300 mb-[22px]"
                  onChange={handleVolumeSliderChange}
                  style={{
                    background: "yellow",
                    transition: ".5s ease",
                  }}
                />
              </div>

              {/* <div className="relative songVolume w-[34px] h-[3px] bg-[#F5E33F]">
                <span className="absolute right-0 top-[-3px] rounded-full w-[9px] h-[9px] bg-[#F5E33F]"></span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
