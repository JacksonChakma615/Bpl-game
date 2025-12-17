import { Suspense } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fachPlayers = async () => {
  const res = await fetch("plyer.json");
  return res.json();
};
function App() {
  const playersPromis = fachPlayers();
  return (
    <>
      <Navbar></Navbar>
      <div className=" max-w-[1100px] mx-auto flex justify-between items-center">
        <p className="font bold text-2xl">Available Players</p>
        <div className="">
          <button className="py-3 px-4  border-1 border-gray-500 rounded-l-2xl border-r-0 bg-green-500">Available</button>
          <button className="py-3  px-4 border-r-o border-1 border-gray-500 rounded-r-2xl border-l-0">Selected <span>(0)</span></button>
        </div>

      </div>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      
        <AvailablePlayers playersPromis={playersPromis}></AvailablePlayers>
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
