import React from "react";

const ArtistCard = ({ img }) => {
  return (
    <div className="artist-card w-full">
      <div className="artist-card-img">
        <img src={img} alt="" />
      </div>
      <h4>Whole lotta love</h4>
      <p>Led Zeppelin</p>
    </div>
  );
};

export default ArtistCard;
