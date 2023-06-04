import React, { useContext } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { SpotifyContext } from "../../context";

import { FaPlay } from "react-icons/fa";

const Song = ({ id, name, artist, album, duration, img, index }) => {
  const {
    likedSongs,
    setLikedSongs,
    getSong,
    currentSong,
    setCurrentSong,
    isSongPlaying,
    setIsSongPlaying,
    handlePlayPause,
    handleLike,
  } = useContext(SpotifyContext);

  const handleSongPlay = (id) => {
    const clickedSong = getSong(id);
    if (currentSong.id === id) {
      handlePlayPause();
    } else {
      setCurrentSong(clickedSong);
      setIsSongPlaying(true);
    }
  };

  // console.log("song index from song.jsx", index)

  return (
    <div className="group flex flex-row items-center justify-between gap-2 text-left mx-auto mb-[25px] px-[9px] py-[5px]  hover:bg-[#19177F] w-full">
      <p className="">{index + 1}</p>
      <div className="block relative cursor-pointer song-img-container h-[47.33px] my-[0px] mx-[0px] w-[56.52px] overflow-hidden">
        <FaPlay
          onClick={() => {
            handleSongPlay(id);
          }}
          className="absolute opacity-0 text-white text-[20px] top-[30%] left-[30%] group-hover:opacity-100 z-20"
        />

        <img
          className="object-cover z-10 group-hover:opacity-60"
          src={img}
          alt=""
        />
      </div>
      <div className="song-title w-[150px]">
        <h3 className="text-[13px] font-bold">{name}</h3>
        <p className="text-[10px] font-normal text-[#BABABA]">{artist}</p>
      </div>
      <h3 className="album w-[100px] hidden md:block  text-[12px] font-normal text-[#BABABA]">
        {album}
      </h3>
      <p className="song-length text-[12px] font-normal text-[#BABABA]">5:36</p>
      <span
        onClick={() => {
          handleLike(id);
        }}
        className="song-heart-icon text-[18px] font-normal text-[#BABABA] cursor-pointer"
      >
        {likedSongs && likedSongs.some((song) => song.id === id) ? (
          <AiFillHeart style={{ color: "red" }} />
        ) : (
          <AiOutlineHeart />
        )}
      </span>
      <span className="song-more-icon text-[20px] font-normal text-[#BABABA]">
        <FiMoreHorizontal />
      </span>
    </div>
  );
};
export default Song;
