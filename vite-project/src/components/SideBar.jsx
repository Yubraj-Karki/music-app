import React from "react";
import { Link } from "react-router-dom";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { GiMicrophone } from "react-icons/gi";
import { IoAlbumsOutline } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

const SideBar = () => {
  return (
    <div className="side-bar p-10 h-screen w-64 text-white">
      <h3 className="font-bold text-3xl">Music App</h3>
      <ul className="menus">
        <Link to="/">
          <li>
            <RiCompassDiscoverLine />
            Explore
          </li>
        </Link>
        <Link to="/artists">
          <li>
            <GiMicrophone />
            Artists
          </li>
        </Link>
        <Link to="/albums">
          <li>
            <IoAlbumsOutline /> Albums
          </li>
        </Link>
        <Link to="/playlist">
          <li>
            <TbPlaylist /> Playlist
          </li>
        </Link>
        <Link to="/likedSongs">
          <li>
            <AiFillHeart /> Liked songs
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
