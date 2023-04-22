import React, { useState, useEffect, useRef } from "react";

export const SpotifyContext = React.createContext();
import env from "react-dotenv";

export const SpotifyProvider = ({ children }) => {
  const songs = [
    {
      id: "5aAx2yezTd8zXrkmtKl66Z",
      name: "Shape of You",
      artist: "Ed Sheeran",
      album: "÷",
      duration_ms: 233712,
      popularity: 87,
    },
    {
      id: "1BKT5ren0RT5xmB6DZNJSS",
      name: "Stupid Love",
      artist: "Lady Gaga",
      album: "Chromatica",
      duration_ms: 183733,
      popularity: 70,
    },
    {
      id: "2YpeDb67231RjR0MgVLzsG",
      name: "Old Town Road",
      artist: "Lil Nas X ft. Billy Ray Cyrus",
      album: "7",
      duration_ms: 157066,
      popularity: 84,
    },
    {
      id: "3tjFYV6RSFtuktYl3ZtYcq",
      name: "Levitating (feat. DaBaby)",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      duration_ms: 203064,
      popularity: 95,
    },
  ];

  const [topTracks, setTopTracks] = useState([""]);
  const [topArtists, setTopArtists] = useState([""]);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [duration, setDuration] = useState("00");
  const [currentTime, setCurrentTime] = useState("00");
  const [songProgress, setSongProgress] = useState("0");
  const [sliderValue, setSliderValue] = useState("0");
  const [isSongLooping, setIsSongLooping] = useState(false);
  const [songVolume, setSongVolume] = useState("0.5");
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volumeSliderValue, setVolumeSliderValue] = useState("");
  const [likedSongs, setLikedSongs] = useState([
    // {
    //   id: "0RiRZpuVRbi7oqRdSMwhQY",
    //   name: "drivers license",
    //   artist: "Olivia Rodrigo",
    //   album: "SOUR",
    //   duration_ms: 242013,
    //   popularity: 100,
    //   liked: true,
    // },
    {
      id: "7MAibcTli4IisCtbHKrGMh",
      name: "Leave The Door Open",
      artist: "Silk Sonic",
      album: "An Evening with Silk Sonic",
      duration_ms: 242096,
      popularity: 98,
      liked: true,
    },
    {
      id: "2MbdDtCv5LUVjYy9RuGTgC",
      name: "Save Your Tears (with Ariana Grande) (Remix)",
      artist: "The Weeknd, Ariana Grande",
      album: "The Highlights",
      duration_ms: 215626,
      popularity: 99,
      liked: true,
    },
  ]);

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

  const getSong = (id) => {
    const data = songs.find((song) => song.id === id);

    return data;
  };

  // console.log(getSong("5aAx2yezTd8zXrkmtKl66Z"));

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
        songVolume,
        setSongVolume,
        isMuted,
        setIsMuted,
        isLiked,
        setIsLiked,
        volumeSliderValue,
        setVolumeSliderValue,
        likedSongs,
        setLikedSongs,
        getSong,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};
