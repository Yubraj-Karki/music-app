import React from "react";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { GiMicrophone } from "react-icons/gi";
import { IoAlbumsOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="side-bar p-10 h-screen w-60 text-white">
      <h3 className="font-bold text-3xl">Music App</h3>
      <ul className="menus">
        <li>
          <RiCompassDiscoverLine />
          Explore
        </li>
        <li>
          <GiMicrophone />
          Artists
        </li>
        <li>
          <IoAlbumsOutline /> Albums
        </li>
        <li>Playlist</li>
        <li>Liked songs</li>
      </ul>
    </div>
  );
};

export default SideBar;
<ul></ul>;
