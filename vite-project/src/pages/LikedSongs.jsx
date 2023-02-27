import React from "react";
import { PageTitle } from "../components/index";
import { RiHeadphoneFill } from "react-icons/ri";

const LikedSongs = () => {
  return (
    <div>
      <PageTitle title="Liked Songs" icon={RiHeadphoneFill} />
    </div>
  );
};

export default LikedSongs;
