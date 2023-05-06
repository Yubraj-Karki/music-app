import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { SpotifyContext } from "../../context";

import { FaPlay } from "react-icons/fa";

const Song = ({ id, name, artist, album, duration, img, index }) => {
  const { likedSongs, setLikedSongs, getSong, currentSong, setCurrentSong, isSongPlaying, setIsSongPlaying, handlePlayPause } = useContext(SpotifyContext);

  const handleLike = (id) => {
    const clickedSong = getSong(id);

    console.log(clickedSong, "clickedSong");

    const isSongAvailable = likedSongs.find(
      (likedSong) => clickedSong.id === likedSong.id
    );

    console.log(isSongAvailable, "<=is song available");

    // If song is already not in the likedSongs array, add song to the list
    if (!isSongAvailable) {
      setLikedSongs([...likedSongs, clickedSong]);
      console.log("liked song state updated");
    } else {
      const temp = [...likedSongs];
      const updatedLikedSongs = temp.filter(
        (song) => song.id === clickedSong.id
      );
      setLikedSongs(updatedLikedSongs);

      console.log(updatedLikedSongs, "updatedLikedSongs");
    }

  };

  const handleSongPlay = (id) => {
    const clickedSong = getSong(id);
    setCurrentSong(clickedSong);

    handlePlayPause();

    console.log(clickedSong)
    // setIsSongPlaying(true);
  }


  return (
    <div className="group grid grid-cols-7 gap-2 mx-auto mb-[25px] p-[9px] hover:bg-[#19177F] w-full">
      <p className="col-span-0.3">{index+1}</p>
      <div className="hidden col-start-1.2 col-span-1 md:block relative cursor-pointer song-img-container max-h-[47.33px] my-[0px] mx-[0px] w-[56.52px] overflow-hidden">
        <FaPlay  onClick={() => {
          handleSongPlay(id);
        }} className="absolute opacity-0 text-white text-[20px] top-[30%] left-[30%] group-hover:opacity-100 z-20" />

        <img
          className="object-cover z-10 group-hover:opacity-60"
          src={img}
          alt=""
        />
      </div>
      <div className="song-title">
        <h3 className="text-[13px] font-bold">{name}</h3>
        <p className="text-[10px] font-normal text-[#BABABA]">{artist}</p>
      </div>
      <h3 className="album hidden md:block  text-[12px] font-normal text-[#BABABA]">
        {album}
      </h3>
      <p className="song-length text-[12px] font-normal text-[#BABABA]">5:36</p>
      <span
        onClick={() => {
          handleLike(id);
        }}
        className="song-heart-icon text-[18px] font-normal text-[#BABABA] cursor-pointer"
      >
        <AiOutlineHeart />
      </span>
      <span className="song-more-icon text-[20px] font-normal text-[#BABABA]">
        <FiMoreHorizontal />
      </span>
    </div>
  );
};
export default Song;
