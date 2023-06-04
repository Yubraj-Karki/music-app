import React, { useState, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Control,
  CreatePlaylist,
  Searchbar,
  SideBar,
  User,
  ResponsiveSidebar,
} from "./components";

import { Albums, Artists, Explore, LikedSongs, PlayList } from "./pages";

import { SpotifyContext } from "../context";

import { FiSettings } from "react-icons/fi";

const App = () => {
  const { setIsSidebarOpen } = useContext(SpotifyContext);

  return (
    <BrowserRouter>
      <div className="wrapper h-[140vh] relative ">
        <aside className="relative h-screen hidden">
          <SideBar />
        </aside>

        <main className="relative container ">
          <ResponsiveSidebar />

          <header className="">
            <FiSettings
              onClick={() => setIsSidebarOpen(true)}
              className="settings-icon mb-[5vh] ml-auto hidden"
            />
            <div className="flex flex-col flex-col-reverse items-center justify-between md:flex-row">
              <Searchbar />
              <User
                name="John Doe"
                img="https://images.pexels.com/photos/13358914/pexels-photo-13358914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/playlist" element={<PlayList />} />
            <Route path="/likedsongs" element={<LikedSongs />} />
          </Routes>

          <section>
            <Control />
          </section>
        </main>
        <CreatePlaylist />
      </div>
    </BrowserRouter>
  );
};

export default App;
