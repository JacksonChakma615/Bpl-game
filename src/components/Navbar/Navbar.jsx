 import React from 'react';
 import navimg from "../../assets/logo.png";
import dolerimg  from "../../assets/doler.png";
 const Navbar = ({AvailableBlanace}) => {
    return (
        <div>
             <div className="navbar max-w-[1100px] mx-auto ">
        <div className="flex-1">
          <a className=" text-xl">
            <img className="w-[50px] h-[50px]" src={navimg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-1">{AvailableBlanace}</span>
          <span className="mr-1">Coin</span>
          <img className="w-6 h-6" src={dolerimg} alt="" />
        </div> 
      </div>
        </div>
    );
 };
 
 export default Navbar;