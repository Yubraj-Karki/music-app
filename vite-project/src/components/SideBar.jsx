import React from "react";
import { Link } from "react-router-dom";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { GiMicrophone } from "react-icons/gi";
import { IoAlbumsOutline } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import { MdHeadphones, MdOutlineTravelExplore } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="side-bar fixed left-0 top-0 bg-[#0C0B39] p-10 pt-[20px] h-screen w-[273px] text-white">
      <div className="logo-title flex items-center mb-[46px]">
        <img className="h-[39px] w-[39px] mr-[10px]" src="/logo.png" alt="" />
        <h3 className="font-bold text-[18px]">MUSIXBOX</h3>
      </div>
      <ul className="menus text-[16px]">
        <Link to="/">
          <li>
            <MdOutlineTravelExplore />
            Explore
          </li>
        </Link>
        {/* <Link to="/artists">
          <li>
            <MdHeadphones />
            Artists
          </li>
        </Link>
        <Link to="/albums">
          <li>
            <IoAlbumsOutline /> Albums
          </li>
        </Link> */}
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
