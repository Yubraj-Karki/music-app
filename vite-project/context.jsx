import React, { useState, useEffect, useRef } from "react";

export const SpotifyContext = React.createContext();
import env from "react-dotenv";

export const SpotifyProvider = ({ children }) => {
  const [topTracks, setTopTracks] = useState([""]);
  const [topArtists, setTopArtists] = useState([""]);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [duration, setDuration] = useState("00");
  const [currentTime, setCurrentTime] = useState("00");
  const [songProgress, setSongProgress] = useState("0");
  const [songVolume, setSongVolume] = useState("");
  const [sliderValue, setSliderValue] = useState("0");
  const [isSongLooping, setIsSongLooping] = useState(false);
  const [volume, setVolume] = useState("0.5");
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volumeSliderValue, setVolumeSliderValue] = useState("");

  // const apiKey = process.env.REACT_APP_API_KEY;

  // console.log(process.env.REACT_APP_API_KEY, "api key here");

  // const fetchTopCharts = async () => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": `${apiKey}`,
  //       "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  //     },
  //   };

  //   const params = new URLSearchParams({
  //     ids: "4WNcduiCmDNfmTEz7JvmLv",
  //   }).toString();

  //   try {
  //     const response = await fetch(
  //       `https://spotify23.p.rapidapi.com/tracks/?${params}`,
  //       options
  //     );

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     setTopTracks(data.tracks);
  //   } catch (error) {
  //     console.error(`Error fetching top charts: ${error}`);
  //   }
  // };

  // useEffect(() => {
  //   fetchTopCharts();
  // }, []);

  // useEffect(() => {
  //   console.log(topTracks);
  // }, [topTracks]);

  return (
    <SpotifyContext.Provider
      value={{
        topArtists,
        topTracks,
        isSongPlaying,
        setIsSongPlaying,
        duration,
        setDuration,
        currentTime,
        setCurrentTime,
        songProgress,
        setSongProgress,
        sliderValue,
        setSliderValue,
        isSongLooping,
        setIsSongLooping,
        volume,
        setVolume,
        isMuted,
        setIsMuted,
        isLiked,
        setIsLiked,
        volumeSliderValue,
        setVolumeSliderValue,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};
