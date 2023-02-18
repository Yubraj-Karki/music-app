import React, { createContext, useState, useEffect } from "react";

export const SpotifyContext = createContext();

const SpotifyProvider = ({ children }) => {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    const fetchTopCharts = async () => {
      const response = await fetch(
        "https://api.spotify.com/v1/charts/top?limit=10",
        {
          headers: {
            Authorization: `Bearer ${token}`, // replace with your Spotify access token
          },
        }
      );

      const data = await response.json();
      setTopTracks(data.tracks);
    };

    fetchTopCharts();
  }, []);

  useEffect(() => {
    console.log(topTracks);
  }, [topTracks]);

  return (
    <SpotifyContext.Provider value={{ topArtists, topTracks }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyProvider;
