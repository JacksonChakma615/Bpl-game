import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";
const AvailablePlayers = ({ playersPromis }) => {
  const playersdata = use(playersPromis);
  console.log(playersdata);

  return (
    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-9">
        {
            playersdata.map(player =><PlayerCard player={player}></PlayerCard> )
        }
     
    </div>
  );
};

export default AvailablePlayers;
