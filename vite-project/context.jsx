import React, { createContext, useState, useEffect } from "react";

export const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    const token = "d2b3436a5amshec421dbcda0c511p1b980djsn63308e328379";

    // Fetch top tracks
    fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=short_term`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setTopTracks(data.items))
      .catch((error) => console.error(error));

    // Fetch top artists
    fetch(`https://api.spotify.com/v1/me/top/artists?time_range=short_term`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setTopArtists(data.items))
      .catch((error) => console.error(error));
  }, []);

  // function TopCharts() {
  //   const { topTracks } = useContext(SpotifyContext);

  //   return (
  //     <div>
  //       <h1>Top Tracks</h1>
  //       <ul>
  //         {/* {topTracks.map((track) => (
  //           <li key={track.id}>{track.name}</li>
  //         ))} */}
  //       </ul>
  //     </div>
  //   );
  // }

  // function TopArtists() {
  //   const { topArtists } = useContext(SpotifyContext);

  //   return (
  //     <div>
  //       <h1>Top Artists</h1>
  //       <ul>
  //         {/* {topArtists.map((artist) => (
  //           <li key={artist.id}>{artist.name}</li>
  //         ))} */}
  //       </ul>
  //     </div>
  //   );
  // }

  console.log(topTracks, "top tracks");

  return (
    <SpotifyContext.Provider value={{ topArtists, topTracks }}>
      {children}
    </SpotifyContext.Provider>
  );
};
