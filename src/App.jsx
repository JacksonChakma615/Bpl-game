import { Suspense, useState } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fachPlayers = async () => {
  const res = await fetch("plyer.json");
  return res.json();
};
function App() {
  const [toggle, settoggle] = useState(false);
  const playersPromis = fachPlayers();
  return (
    <>
      <Navbar></Navbar>
      <div className=" max-w-[1100px] mx-auto flex justify-between items-center">
        <p className="font-bold text-2xl">Available Players</p>
        <div className=" font-bold">
          <button onClick={()=>settoggle(true)} className={`py-3 px-4  border-1 border-gray-500 rounded-l-2xl border-r-0 ${toggle===true?"bg-green-500":""}`}>
            Available
          </button>
          <button onClick={()=>settoggle(false)} className={`py-3  px-4 border-r-o border-1 border-gray-500 rounded-r-2xl border-l-0 ${toggle===false?"bg-green-500":""}`}>
            Selected <span>(0)</span>
          </button>
        </div>
      </div>

      {
        toggle ===true?<Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playersPromis={playersPromis}></AvailablePlayers>
      </Suspense>:<SelectedPlayers></SelectedPlayers>
      }
      
     
    </>
  );
}

export default App;
