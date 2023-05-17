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
      {likedSongs.length === 0 ? (
  <h1 className="text-center font-bold text-[20px]">Uh-oh! No songs liked yet</h1>
) : (
  likedSongs.map((song, index) => {
    const { id, name, artist, album, img } = song;
    return <Song key={id} {...song} index={index} />;
  })
)}

    </div>
  );
};

export default LikedSongs;
