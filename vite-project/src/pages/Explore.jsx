import React, { useContext } from "react";

import { SpotifyProvider } from "../../context";

const Explore = () => {
  const { topArtists } = useContext(SpotifyProvider);
  return <div>{console.log(topArtists)}</div>;
};

export default Explore;
