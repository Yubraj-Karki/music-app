import React from "react";
import { NavLink } from "react-router-dom";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { GiMicrophone } from "react-icons/gi";
import { IoAlbumsOutline } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import { MdHeadphones, MdOutlineTravelExplore } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="side-bar fixed left-0 top-0 bg-[#0C0B39] p-10 pt-[20px] h-screen w-[273px] text-white ">
      <div className="logo-title flex items-center mb-[46px]">
        <img className="h-[39px] w-[39px] mr-[10px]" src="/logo.png" alt="" />
        <h3 className="font-bold text-[18px]">MUSIXBOX</h3>
      </div>
      <ul className="menus text-[16px]">
        <li>
          <NavLink activeClassName="active" exact to="/">
            <MdOutlineTravelExplore />
            Explore
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/artists">
            <MdHeadphones />
            Artists
          </NavLink>
        </li>
        <li>
          <NavLink to="/albums">
            <IoAlbumsOutline /> Albums
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/playlist" activeClassName="active">
            <TbPlaylist /> Playlist
          </NavLink>
        </li>
        <li>
          <NavLink to="/likedSongs" activeClassName="active">
            <AiFillHeart /> Liked songs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
