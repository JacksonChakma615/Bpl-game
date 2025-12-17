 import React from 'react';
 import userimg from "../../assets/Group.png";
import userimg2 from "../../assets/Group-(2).png";
 const PlayerCard = ({player}) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-sm p-4">
        <figure>
          <img className="w-full h-[300px] object-cover"
            src={player.player_image}
            alt="Shoes"
          />
        </figure>
        <div className="mt-5">
          <div className="flex ">
            <img src={userimg} alt="" />{" "}
            <h2 className="card-title ml-2">{player.player_name}</h2>
          </div>
          <div className="flex justify-between mt-4 border-gray-400 border-b-1 pb-2 ">
            <div className="flex items-center">
              <img className="w-[15px] h-[15px]" src={userimg2} alt="" />
              <span className="ml-2">{player.player_country}</span>
            </div>
             <button className="btn">{player.playing_role}</button>
          </div>

          <div className="flex justify-between font-bold mt-4">
            <span>Rating</span>
            <span>{player.rating}</span>
          </div>

          <div className="flex justify-between ">
            <span className="font-bold">{player.bating_style}</span>
            <span>{player.bowling_style}</span>
          </div>

          <div className="card-actions mt-4 justify-between items-center">
            <p ><span className="font-bold">Price:</span> {player.price}</p>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>
        </div>
    );
 };
 
 export default PlayerCard;