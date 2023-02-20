import React, { useContext } from "react";
import { ArtistCard, Searchbar, PageTitle, Song } from "../components/index";

import { SpotifyContext } from "../../context";

const Explore = () => {
  // const { topTracks } = useContext(SpotifyContext);
  return (
    <div>
      <div className="container">
        <header>
          <Searchbar />
        </header>
        <section className="topCharts ">
          {/* section title */}
          <h4 className="section-title  text-[#BABABA] text-[11px] mb-3 uppercase">
            Top charts
          </h4>

          {/* Artists */}
          <div className="top-charts-items flex justify-evenly justify-between gap-x-8 ">
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
          </div>
        </section>
        <PageTitle title="Explore" icon="icon-name" />

        {/* top songs */}
        <section className="grid grid-cols-2 gap-4">
          <div className="top-songs">
            <Song />
          </div>
          <div className="top-albums grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-self-end">
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Explore;
