import React, { useContext } from "react";
import { PageTitle, Banner } from "../components/index";
import { RiHeadphoneFill } from "react-icons/ri";

import { SpotifyContext } from "../../context";

import { Song } from "../components/index";

const LikedSongs = () => {
  const { likedSongs, setLikedSongs } = useContext(SpotifyContext);
  return (
    <div>
      {/* <PageTitle title="Liked Songs" icon={RiHeadphoneFill} /> */}
      <Banner />
      {likedSongs.map((song) => {
        const { id, name, artist, album, img } = song;
        return <Song {...song} />;
      })}
    </div>
  );
};

export default LikedSongs;
