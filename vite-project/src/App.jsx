import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBar, Control } from "./components";
import { Explore, Artists } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <aside>
          <SideBar />
        </aside>
        <main className="container">
          <Routes>
            <Route path="/" element={<Explore />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
          <section>
            <Control />
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
