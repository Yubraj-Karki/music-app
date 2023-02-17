import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBar } from "./components";
import { Explore, Artists } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
