import React, { useContext } from "react";
import { RiHeadphoneFill } from "react-icons/ri";
import { PageTitle } from "../components/index";

import { SpotifyContext } from "../../context";

const PlayList = () => {
  const { playlist, setPlaylist } = useContext(SpotifyContext);

  // playlist &&
  //   playlist.map((list) => {
  //     console.log(list.id);
  //   });

  return (
    <div>
      <PageTitle title="Playlist" icon={RiHeadphoneFill} />
      <h3>
        {playlist &&
          playlist.map((list) => {
            return list.name;
          })}
      </h3>
    </div>
  );
};

export default PlayList;
