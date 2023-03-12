import React, { useContext } from "react";
import { PageTitle } from "../components/index";
import { RiHeadphoneFill } from "react-icons/ri";

import { SpotifyContext } from "../../context";

const LikedSongs = () => {
  const { likedSongs, setLikedSongs } = useContext(SpotifyContext);
  return (
    <div>
      <PageTitle title="Liked Songs" icon={RiHeadphoneFill} />
    </div>
  );
};

export default LikedSongs;
