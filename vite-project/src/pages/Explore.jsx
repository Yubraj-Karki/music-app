import React, { useContext } from "react";

import { RiHeadphoneFill } from "react-icons/ri";

import { SpotifyContext } from "../../context";

import { ArtistCard, PageTitle, SectionTitle, Song } from "../components/index";

const Explore = () => {
  const { songs } = useContext(SpotifyContext);

  // const { topTracks } = useContext(SpotifyContext);
  return (
    <div>
      <PageTitle title="Explore" icon={RiHeadphoneFill} />

      <section className="topCharts ">
        {/* section title */}
        <SectionTitle title="top charts" />

        {/* Artists */}
        <div className="top-charts-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <ArtistCard img="https://images.pexels.com/photos/1886641/pexels-photo-1886641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ArtistCard img="https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ArtistCard img="https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ArtistCard img="https://images.pexels.com/photos/1644616/pexels-photo-1644616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          <ArtistCard img="https://images.pexels.com/photos/3693108/pexels-photo-3693108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
      </section>

      {/* top songs */}
      <section>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="top-songs">
            <SectionTitle title="top songs" />
            <div className="grid sm:grid-cols-1 ">
              {songs.map((song, index) => {
                const { id, name, artist, album, duration, img } = song;
                return <Song key={id} {...song} index={index} />;
              })}
            </div>
          </div>
          <div className="">
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
    </div>
  );
};

export default Explore;
