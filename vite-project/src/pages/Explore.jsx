import React, { useContext } from "react";
import { ArtistCard } from "../components/index";

import { SpotifyContext } from "../../context";

const Explore = () => {
  const { topTracks } = useContext(SpotifyContext);
  return (
    <div>
      <ArtistCard />
    </div>
  );
};

export default Explore;
