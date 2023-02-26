import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SideBar, Control, Searchbar, User, PageTitle } from "./components";
import { Explore, Artists } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper h-[140vh]">
        <aside className="relative h-screen">
          <SideBar />
        </aside>
        <main className="relative container">
          <header className="">
            <div className="flex items-center justify-between">
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
