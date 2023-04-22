import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { SpotifyContext } from "../../context";

const Song = ({ img, id }) => {
  const { likedSongs, setLikedSongs, getSong } = useContext(SpotifyContext);

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
      setLikedSongs([updatedLikedSongs]);

      console.log(updatedLikedSongs, "updatedLikedSongs");
    }
  };

  console.log(likedSongs, "here are your liked songs");

  return (
    <div className="flex flex-row items-center justify-between space-y-[5px] space-x-[5px] mb-[25px]">
      <p>1</p>
      <div className="song-img-container max-h-[47.33px] w-[56.52px]  rounded-[3px] overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="song-title">
        <h3 className="text-[13px] font-bold">Whole Lotta Love</h3>
        <p className="text-[10px] font-normal text-[#BABABA]">Led Zeppelin</p>
      </div>
      <h3 className="album text-[12px] font-normal text-[#BABABA]">
        Whole Lotta Love
      </h3>
      <p className="song-length text-[12px] font-normal text-[#BABABA]">5:36</p>
      <span
        onClick={() => {
          handleLike(id);
        }}
        className="song-heart-icon text-[18px] font-normal text-[#BABABA] "
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
