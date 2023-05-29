import React, { useEffect, useRef, useState } from "react";
export const SpotifyContext = React.createContext();

export const SpotifyProvider = ({ children }) => {
  const songs = [
    {
      id: "1raaNykBg1bDnWENUzwLxp",
      name: "I Love You Baby",
      artist: "Frank Sinatra",
      album: "Nothing But The Best",
      img: "https://i.ytimg.com/vi/AiIBKcd4m5Q/mqdefault.jpg",

      duration_ms: 155506,
      popularity: 76,
      src: "./I love you baby.mp3",
      liked: false,
    },

    {
      id: "4eLPdQCvCV4PQBzMzNkxbD",
      name: "Sadeness - Part I",
      artist: "Enigma",
      album: "MCMXC a.D.",
      img: "https://m.media-amazon.com/images/M/MV5BMzVmMzVmNzUtM2ZlZS00ZTYyLWIyN2UtYmMxMjg1NTEyNjRhXkEyXkFqcGdeQXVyMTE3MjAyODEz._V1_.jpg",

      duration_ms: 265573,
      popularity: 68,
      src: "./Sadeness.mp3",
      liked: true,
    },

    {
      id: "vyDfz9H3bm0",
      name: "One Love",
      artist: "Blue",
      album: "One Love",
      img: "https://i1.sndcdn.com/artworks-hIzigGXGwFqI-0-t500x500.jpg",

      duration_ms: 203160,
      popularity: 55,
      src: "./One Love.mp3",
      liked: false,
    },

    {
      id: "ESvP8TC21G0",
      name: "Every Breath You Take",
      artist: "The Police",
      album: "Synchronicity",
      img: "https://m.media-amazon.com/images/I/71owz-N614L._UF1000,1000_QL80_.jpg",
      duration_ms: 257480,
      popularity: 83,
      src: "./Every breath you take.mp3",
      liked: true,
    },
  ];
  const audioRef = useRef(null);
  const [topTracks, setTopTracks] = useState([""]);
  const [topArtists, setTopArtists] = useState([""]);
  const [currentSong, setCurrentSong] = useState(() => songs[1]);
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [duration, setDuration] = useState("00");
  const [currentTime, setCurrentTime] = useState("00");
  const [songProgress, setSongProgress] = useState("0");
  const [sliderValue, setSliderValue] = useState("0");
  const [isSongLooping, setIsSongLooping] = useState(null);
  const [songVolume, setSongVolume] = useState("0.5");
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volumeSliderValue, setVolumeSliderValue] = useState("");
  // const [currentAudio, setCurrentAudio] = useState(()=>new Audio(currentSong.src))

  // playlist
  const [isCreatePlaylistOpen, setIsCreatePlaylistOpen] = useState(false);

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
    // {
    //   id: "7MAibcTli4IisCtbHKrGMh",
    //   name: "Leave The Door Open",
    //   artist: "Silk Sonic",
    //   album: "An Evening with Silk Sonic",
    //   duration_ms: 242096,
    //   popularity: 98,
    //   liked: true,
    // },
    // {
    //   id: "2MbdDtCv5LUVjYy9RuGTgC",
    //   name: "Save Your Tears (with Ariana Grande) (Remix)",
    //   artist: "The Weeknd, Ariana Grande",
    //   album: "The Highlights",
    //   duration_ms: 215626,
    //   popularity: 99,
    //   liked: true,
    // },
  ]);

  useEffect(() => {
    const audio = audioRef.current;
    if (isSongPlaying) {
      audio.play();
      console.log("played");
    } else {
      audio.pause();
      console.log("paused");
    }

    console.log(currentSong, "from current song useEffect hook");
  }, [currentSong, isSongPlaying]);

  const getSong = (id) => {
    const data = songs.find((song) => song.id === id);

    return data;
  };

  const handlePlayPause = () => {
    setIsSongPlaying(!isSongPlaying);
  };

  const handleLike = (id) => {
    const clickedSong = getSong(id);

    console.log(clickedSong, "clickedSong");

    const isSongAvailable = likedSongs.some(
      (likedSong) => clickedSong.id === likedSong.id
    );

    console.log(isSongAvailable, "is available");

    // If song is already not in the likedSongs array, add song to the list
    if (!isSongAvailable) {
      setLikedSongs([...likedSongs, clickedSong]);
      console.log("liked song state updated");
    } else {
      const temp = [...likedSongs];
      const updatedLikedSongs = temp.filter(
        (song) => song.id !== clickedSong.id
      );
      setLikedSongs(updatedLikedSongs);

      console.log(updatedLikedSongs, "updatedLikedSongs");
    }
  };

  // console.log(getSong("5aAx2yezTd8zXrkmtKl66Z"));

  return (
    <SpotifyContext.Provider
      value={{
        topArtists,
        topTracks,
        songs,
        currentSong,
        setCurrentSong,
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
        audioRef,
        handlePlayPause,
        handleLike,
        isCreatePlaylistOpen,
        setIsCreatePlaylistOpen,
      }}
    >
      {children}
    </SpotifyContext.Provider>
  );
};
