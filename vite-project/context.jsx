import React, { useState, useEffect } from "react";

export const SpotifyContext = React.createContext();

export const SpotifyProvider = ({ children }) => {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

  const token = "d2b3436a5amshec421dbcda0c511p1b980djsn63308e328379";

  const fetchTopCharts = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d2b3436a5amshec421dbcda0c511p1b980djsn63308e328379",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    const params = new URLSearchParams({
      ids: "4WNcduiCmDNfmTEz7JvmLv",
    }).toString();

    try {
      const response = await fetch(
        `https://spotify23.p.rapidapi.com/tracks/?${params}`,
        options
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTopTracks(data.tracks);
    } catch (error) {
      console.error(`Error fetching top charts: ${error}`);
    }
  };

  useEffect(() => {
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
