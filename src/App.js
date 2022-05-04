import React, { useState } from "react";

import BottomMainNav from "./comps/bottom_nav";
import { Finder, Welcome } from "./comps/finder";
import { folder_logo, win_logo } from "./urls";
function App() {
  const [displayFinder, setDisplayFinder] = useState(false);
  return (
    <div className=" relative ">
      {/* <Welcome /> */}
      <Finder
        displayFinder1={displayFinder}
        setDisplayFinder2={setDisplayFinder}
      />

      {/* Bottom Nav */}
      <div className="w-full bg-[#FFFFFF]/70 h-14 fixed bottom-0 backdrop-blur-sm ">
        <div className="flex justify-start align-middle items-center">
          <button className="flex justify-center align-middle items-center pt-2 ml-3 ">
            <img alt="winlogo" src={win_logo} className="w-10 h-10 pb-1 " />
          </button>
          <button
            onClick={() => setDisplayFinder(true)}
            className="flex justify-center align-middle items-center pt-2 ml-3 "
          >
            <img
              alt="folderLogo"
              src={folder_logo}
              className={
                "w-12 h-12 pb-1 ml-1 transition-all duration-150" +
                (displayFinder &&
                  "  transform -translate-y-2 animate-bounce shadow-red-500")
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
