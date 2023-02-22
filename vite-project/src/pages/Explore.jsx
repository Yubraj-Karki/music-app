import React, { useContext } from "react";
import { RiHeadphoneFill } from "react-icons/ri";
import {
  ArtistCard,
  Searchbar,
  PageTitle,
  SectionTitle,
  Song,
  User,
  Control,
} from "../components/index";

import { SpotifyContext } from "../../context";

const Explore = () => {
  // const { topTracks } = useContext(SpotifyContext);
  return (
    <div>
      <header className="">
        <div className="flex items-center justify-between">
          <Searchbar />
          <User
            name="John Doe"
            img="https://images.pexels.com/photos/13358914/pexels-photo-13358914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>

        <PageTitle title="Explore" icon={RiHeadphoneFill} />
      </header>

      <section className="topCharts ">
        {/* section title */}
        <SectionTitle title="top charts" />

        {/* Artists */}
        <div className="top-charts-items flex justify-between">
          <ArtistCard img="https://images.pexels.com/photos/1886641/pexels-photo-1886641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ArtistCard img="https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ArtistCard img="https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ArtistCard img="https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ArtistCard img="https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </section>

      {/* top songs */}
      <section>
        <div className="grid grid-cols-2 gap-4">
          <div className="top-songs">
            <SectionTitle title="top songs" />
            <Song img="https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Song img="https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Song img="https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Song img="https://images.pexels.com/photos/3310871/pexels-photo-3310871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <div className="justify-self-end">
            <SectionTitle title="top albums" />
            <div className="top-albums grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
              <ArtistCard img="https://images.pexels.com/photos/3310871/pexels-photo-3310871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <ArtistCard img="https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <ArtistCard img="https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <ArtistCard img="https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Control />
      </section>
    </div>
  );
};

export default Explore;
