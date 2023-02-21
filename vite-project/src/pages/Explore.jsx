import React, { useContext } from "react";
import { RiHeadphoneFill } from "react-icons/ri";
import {
  ArtistCard,
  Searchbar,
  PageTitle,
  SectionTitle,
  Song,
} from "../components/index";

import { SpotifyContext } from "../../context";

const Explore = () => {
  // const { topTracks } = useContext(SpotifyContext);
  return (
    <div>
      <header>
        <Searchbar />
      </header>
      <PageTitle title="Explore" icon={RiHeadphoneFill} />

      <section className="topCharts ">
        {/* section title */}
        <SectionTitle title="top charts" />

        {/* Artists */}
        <div className="top-charts-items flex justify-evenly  gap-x-8 ">
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </div>
      </section>

      {/* top songs */}
      <section className="grid grid-cols-2 gap-4">
        <div className="top-songs grid grid-col-1">
          <Song />
          <Song />
          <Song />
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
  );
};

export default Explore;
