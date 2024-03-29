import React, { useContext, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { SpotifyContext } from "../../context";

const CreatePlaylist = () => {
  const {
    isCreatePlaylistOpen,
    setIsCreatePlaylistOpen,
    playlist,
    setPlaylist,
  } = useContext(SpotifyContext);

  const [playlistName, setPlaylistName] = useState("");

  const handleCreatePlaylistSubmit = (e) => {
    e.preventDefault();
    const newPlaylist = {
      id: 3,
      name: playlistName,
      songs: {},
    };

    setPlaylist([...playlist, newPlaylist]);
    setPlaylistName("");
    setIsCreatePlaylistOpen(!isCreatePlaylistOpen);
  };

  return (
    <div
      className={`w-[100vw] h-[100vh] bg-black bg-opacity-60 z-3000 fixed top-0 left-0 ${
        isCreatePlaylistOpen ? "flex" : "hidden"
      } items-center justify-center`}
    >
      <form
        action=""
        className="flex flex-col bg-indigo-800  h-auto w-[30vw]  px-[20px] py-[29px] rounded-[9px]"
      >
        <header className="flex flex-row justify-between items-center mb-[17px]">
          <h1 className="text-left font-bold text-[27px] ">Create playlist</h1>
          <AiOutlineClose
            onClick={() => setIsCreatePlaylistOpen(false)}
            className="text-[23px] text-gray-300 cursor-pointer"
          />
        </header>

        <input
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          className="p-[10px] rounded-[5px] bg-indigo-600 text-white placeholder-white outline-none"
          type="text"
          placeholder="Enter playlist name"
        />
        <button
          type="submit"
          onClick={handleCreatePlaylistSubmit}
          className="ml-auto font-bold text-black bg-white p-[10px] mt-[29px] w-[30%] rounded-[32px]"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
