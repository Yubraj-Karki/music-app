import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBar } from "./components";
import { Explore, Artists } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <aside>
          <SideBar />
        </aside>
        <main className="p-3">
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
