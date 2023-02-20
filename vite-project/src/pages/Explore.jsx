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
          <h4 className="section-title  text-[#BABABA] text-[11px] mb-3 uppercase">
            Top charts
          </h4>
          <div className="top-charts-items flex justify-evenly gap-x-8 ">
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
            <ArtistCard />
          </div>
        </section>
        <PageTitle title="Explore" icon="icon-name" />

        <section>
          <Song />
        </section>
      </div>
    </div>
  );
};

export default Explore;
