import React from "react";
import Player from "./Player";
import players from "../Players";

const PlayersList = () => {
  return (
    <div
      className="d-flex gap-4 flex-wrap justify-content-center"
      style={{ margin: "40px 45px" }}
    >
      {/*  mapping through all player's data */}
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
